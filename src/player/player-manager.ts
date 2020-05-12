// Interfaces
import infPlayer from './interfaces/infPlayer';
import infSearch from "./interfaces/infSearch";
import infVideo from "./interfaces/infVideo";

// Global
import {apiUrl, debugMode} from '../global/vars';

// Utilities
import htmlEntities from "../utilities/html-entities";
import {fetchData} from "../api/apiCall";

// Styles
import '../scss/main.scss';

export default class PlayerManager {
    private rootEl: HTMLDivElement = null;
    private playerParams: infPlayer = null;
    private searchParams: infSearch = null;
    private videoParams: infVideo = null;

    // Events
    private apiReady: Event;
    private playerExtracted: Event;
    private searchParamsReady: Event;

    public constructor(rootEl: HTMLDivElement) {
        this.rootEl = rootEl;

        this.addEventListeners();
        this.registerNewEvents();
        this.extractAttrs();

        this.videoEvents();
    }

    private addEventListeners() {
        const self = this;

        /**
         * Listen to `dm-api-ready` to run `loadDmPlayer` to construct the player
         */
        document.addEventListener('dm-api-ready', ( e) => {

            for ( let i=0; i<this.rootEls.length; i++) {
                self.loadDmPlayer(this.rootEls[i]);
            }
        });

        /**
         * Listen to `player-extracted` to wait all attributes is extracted from the element
         * then prepare the search parameters
         */
        document.addEventListener('player-extracted', (e) => {
            self.prepareSearchParams();
            self.loadScript();
        });

        /**
         * Listen to `dm-search-params-ready` after parameters is ready then start search
         * related/recent video
         */
        document.addEventListener( 'dm-search-params-ready', (e) => {
            self.searchVideo();
        });
    }

    /**
     * Create new events to dispatch after the event is ready
     */
    private registerNewEvents() {
        this.apiReady = new Event('dm-api-ready');
        this.playerExtracted = new Event('player-extracted');
        this.searchParamsReady = new Event('dm-search-params-ready');
    }

    private extractAttrs() {
        const rootEl = this.rootEls[0];

        /**
         * See interfaces/infPlayer.ts to know further
         */
        this.playerParams = {
            maxWordSearch: rootEl.getAttribute('maxWordSearch') ? Number(rootEl.getAttribute('maxWordSearch')) : 15,
            minWordLength: rootEl.getAttribute('minWordLength') ? Number(rootEl.getAttribute('minWordLength')) : 4,
            minWordSearch: rootEl.getAttribute('minWordSearch') ? Number(rootEl.getAttribute('minWordSearch')) : 2,
            language: rootEl.getAttribute("language") ? rootEl.getAttribute("language") : "",
            sort:  rootEl.getAttribute("sort") ? rootEl.getAttribute("sort") : "recent",
            owners: rootEl.getAttribute("owners") ? rootEl.getAttribute("owners") : "",
            category: rootEl.getAttribute("category") ? rootEl.getAttribute("category") : "",
            excludeIds: rootEl.getAttribute("excludeIds") ? rootEl.getAttribute("excludeIds") : "",
            searchInPlaylist: rootEl.getAttribute("searchInPlaylist") ? rootEl.getAttribute("searchInPlaylist") : false,
            syndication: rootEl.getAttribute("syndication") ? rootEl.getAttribute("syndication") : "",
            controls: (rootEl.getAttribute('controls') != 'false'),
            adsParams: rootEl.getAttribute('adsParams') ? rootEl.getAttribute('adsParams') : "contextual",
            cpeId: rootEl.getAttribute('cpeId') ? rootEl.getAttribute('cpeId').split(',') : [''],
            keywordsSelector: rootEl.getAttribute('keywordsSelector') ? rootEl.getAttribute('keywordsSelector') : null,
            getUpdatedVideo: ( rootEl.getAttribute('getUpdatedVideo') != 'false' ) ,
            preVideoTitle: rootEl.getAttribute('preVideoTitle') ? rootEl.getAttribute('preVideoTitle') : null,
            showVideoTitle: ( rootEl.getAttribute('showVideoTitle') != 'false' &&  rootEl.getAttribute('showVideoTitle') != null ),
            showInfoCard: ( rootEl.getAttribute('showInfoCard') != 'false' &&  rootEl.getAttribute('showInfoCard') != null ),
            autoPlayMute: ( rootEl.getAttribute("autoPlayMute") != 'false'),
            queueEnable: ( rootEl.getAttribute('queueEnable') != 'false'),
            queueEnableNext: ( rootEl.getAttribute('queueEnableNext') != 'false'),
            pipAtStart: ( rootEl.getAttribute('pipAtStart') != 'false' && rootEl.getAttribute('pipAtStart') != null ),
            noStp: ( rootEl.getAttribute('noStp') != 'false' && rootEl.getAttribute('noStp') != null ),
            noPip: ( rootEl.getAttribute('noPip') != 'false' && rootEl.getAttribute('noPip') != null ),
            scrollToPause: ( rootEl.getAttribute('scrollToPause') != 'false' && rootEl.getAttribute('scrollToPause') != null ),
            stpSound: ( rootEl.getAttribute('stpSound') != 'false' && rootEl.getAttribute('stpSound') != null ),
            playerStyleEnable: ( rootEl.getAttribute('playerStyleEnable') != 'false' && rootEl.getAttribute('playerStyleEnable') != null ),
            playerStyleColor: rootEl.getAttribute('playerStyleColor') ? rootEl.getAttribute('playerStyleColor') : null
        };

        if (debugMode === true) {
            console.log("%c DM Player Params: ", "background: #56C7FF; color: #232323", this.playerParams);
        }

        // Tell the event listener that player parameters is extracted
        document.dispatchEvent(this.playerExtracted);
    }

    /**
     * Set search parameters
     *
     * For all search parameters, please see interfaces/infSearch.ts
     */
    private prepareSearchParams(): void {
        const keywords = this.findKeywords(this.playerParams.keywordsSelector);
        this.searchParams = {
            fields: this.playerParams.showInfoCard ? 'id,title,description,owner.avatar_190_url' : 'id,title',
            limit: 1,
            sort: this.playerParams.sort,
        };

        if (this.playerParams.sort === "relevance") {
            this.searchParams.search= keywords ? keywords.sort((a, b) => b.length - a.length).slice(0, this.playerParams.maxWordSearch).join(' ') : "";
        }

        if (!this.playerParams.searchInPlaylist) {

            // TODO: test using private video
            this.searchParams.private = 0;
            this.searchParams.flags = "no_live,exportable" + (this.playerParams.owners.length > 0 ? "": ",verified");
            this.searchParams.longer_than = 0.35; //21sec

            if (this.playerParams.owners) this.searchParams.owners = this.playerParams.owners;

            if (this.playerParams.category) this.searchParams.channel = this.playerParams.category;

            if (this.playerParams.excludeIds) this.searchParams.exclude_ids = this.playerParams.excludeIds;
        }

        if (this.playerParams.language) this.searchParams.language = this.playerParams.language;

        // Tell the event listener that search params is ready
        document.dispatchEvent(this.searchParamsReady);

    }

    private loadScript(): void {

        let cpeId = this.playerParams.cpeId[0];

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            cpeId = this.playerParams.cpeId[1] ? this.playerParams.cpeId[1] : this.playerParams.cpeId[0];

        // Avoid error while building
        const date: any = new Date();

        // Load the CPE script
        (function(w,d,s,u,n,i,f,g,e,c){w.WDMObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments);};w[n].l=1*date;w[n].i=i;w[n].f=f;w[n].g=g;e=d.createElement(s);e.async=1;e.src=u;c=d.getElementsByTagName(s)[0];c.parentNode.insertBefore(e,c);})(window,document,"script","//api.dmcdn.net/pxl/cpe/client.min.js","cpe", cpeId);
    }

    private loadDmPlayer(rootEl: HTMLDivElement): void {
        const cpeEmbed = document.createElement("div");

        /**
         * Set attributes part
         */
        let queryString = "";

        if (this.playerParams.adsParams === "") {
            queryString += "ads_params=contextual";
        } else {
            queryString += "ads_params=" + htmlEntities(this.playerParams.adsParams);
        }

        if (this.playerParams.syndication !== "") queryString += "&syndication=" + this.playerParams.syndication;

        if (this.playerParams.controls !== true) queryString += "&controls=" + this.playerParams.controls;

        cpeEmbed.setAttribute("class", "dailymotion-cpe");
        cpeEmbed.setAttribute("video-id", this.videoParams.id);
        cpeEmbed.setAttribute("query-string", queryString);

        if (this.playerParams.pipAtStart === true) cpeEmbed.setAttribute("pip-at-start", "");

        if (this.playerParams.noStp === true) cpeEmbed.setAttribute("no-stp", "");

        if (this.playerParams.noPip === true) cpeEmbed.setAttribute("no-pip", "");

        if (this.playerParams.queueEnable === false) cpeEmbed.setAttribute("no-queue", "");

        if (this.playerParams.queueEnableNext === false) cpeEmbed.setAttribute("no-autonext", "");

        if (this.playerParams.searchInPlaylist !== false) cpeEmbed.setAttribute("Playlist-id", this.playerParams.searchInPlaylist as string);

        if(rootEl.getAttribute("width") !== null){
            this.playerParams.width = Number(rootEl.getAttribute("width"));
            cpeEmbed.setAttribute("width", rootEl.getAttribute("width"));
        }

        if(rootEl.getAttribute("height") !== null){
            this.playerParams.height = Number(rootEl.getAttribute("height"));
            cpeEmbed.setAttribute("height", rootEl.getAttribute("height"));
        }

        // end of set attributes

        let cpeParams = {};

        if (this.playerParams.scrollToPause === true) cpeParams['scroll_to_pause'] = true;

        if (this.playerParams.stpSound === true) cpeParams['stp_sound'] = true;

        if (this.playerParams.playerStyleEnable === true) cpeParams['player_style_enable'] = true;

        if (this.playerParams.playerStyleColor !== null) cpeParams['player_style_color'] = this.playerParams.playerStyleColor;


        /**
         * Set pre title for video
         */
        if (this.playerParams.preVideoTitle !== null) {
            const preTitle = this.setPreVideoTitle(this.playerParams.preVideoTitle);
            rootEl.appendChild(preTitle);
        }

        // Append the element to the root player element
        rootEl.appendChild(cpeEmbed);

        /**
         * Set a video title
         */
        if ( this.playerParams.showVideoTitle === true ) {
            const videoTitle = this.setVideoTitle(this.videoParams.title);
            rootEl.appendChild(videoTitle);
        }

        /**
         * Set an info card
         */
        if (this.playerParams.showInfoCard === true) {
            const infoCard = this.setInfoCard(this.videoParams);
            rootEl.appendChild(infoCard);
        }
    }

    private setVideo(video: infVideo): void {
        this.videoParams = video;
        document.dispatchEvent(this.apiReady);
    }

    private setPreVideoTitle(text: string): HTMLParagraphElement {
        const preTitle = document.createElement('p');
        preTitle.innerHTML = text;
        preTitle.className = 'dm__pre-video-title';

        return preTitle;
    }

    private setVideoTitle(text: string): HTMLParagraphElement {
        const videoTitle = document.createElement('p');
        videoTitle.innerHTML = text;
        videoTitle.className = 'dm__video-title';

        return videoTitle;
    }

    private setInfoCard(data: infVideo): HTMLDivElement {
        const infoCard = document.createElement('div');
        infoCard.className = 'dm__info-card';

        const textWrapper = document.createElement('div');
        textWrapper.className = 'dm__text-wrapper';

        const videoTitle = document.createElement('p');
        videoTitle.innerHTML = data.title;
        videoTitle.className = 'dm__video-title';

        const videoDesc = document.createElement('p');
        videoDesc.innerHTML = data.description;
        videoDesc.className = 'dm__video-desc';

        textWrapper.append(videoTitle);
        textWrapper.append(videoDesc);

        const avaWrapper = document.createElement('picture');
        avaWrapper.className = 'dm__ava-wrapper';

        const ownerAva = document.createElement('img');
        ownerAva.src = data["owner.avatar_190_url"];
        ownerAva.className = 'dm__owner-ava';

        avaWrapper.append(ownerAva);

        infoCard.append(textWrapper);
        infoCard.append(avaWrapper);

        return infoCard;
    }

    private async searchVideo(): Promise<void> {

        if (debugMode === true && this.playerParams.sort === 'relevance') {
            console.log("%c DM related ", "background: #56C7FF; color: #232323", "Search: " + this.searchParams.search);
        }

        const properties = Object.entries( this.searchParams ).map( ([ key, value] ) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }).join('&');

        const dmSearchUrl = apiUrl + (this.playerParams.searchInPlaylist ? "playlist/" + this.playerParams.searchInPlaylist + "/videos" : "videos") + "?" + properties;

        const video = await fetchData(dmSearchUrl);

        if (video) {
            if (video.total > 0) {
                this.setVideo(video.list[0]);
            } else {
                // Strip a string to try to get video one more time if there is no video found
                this.searchParams.search = this.searchParams.search.substring(0, this.searchParams.search.lastIndexOf(' '));

                if( this.searchParams.search.split(' ').length >= this.playerParams.minWordSearch && this.searchParams.search.length > 0 )
                    await this.searchVideo();
                else {
                    if (debugMode === true) {
                        console.log("%c DM related ", "background: #56C7FF; color: #232323", "Can not find related video. Fallback video used.");
                    }
                    this.getFallbackVideo();
                }
            }

        }

    }

    private async getFallbackVideo(): Promise<void> {

        // Define current time and 30 days
        const currentTime = Math.floor(Date.now()/1000);
        const thirtyDays = 2592000;
        const url = apiUrl + (this.playerParams.searchInPlaylist ? "playlist/" + this.playerParams.searchInPlaylist + "/videos?" : "videos?owners=" + this.playerParams.owners)  + (this.playerParams.getUpdatedVideo ? "&created_after=" + (currentTime - thirtyDays) : "") + "&sort=random&limit=1&fields=" + this.searchParams.fields;
        const video = await fetchData(url);

        if (video) {
            if (video.list.length > 0) {

                /**
                 * Data return array, get the first array and pass it to setVideo function
                 */
                this.setVideo(video.list[0]);
            } else {
                if (debugMode === true) {
                    console.warn("DM related Unable to find a fallback video");
                }
            }
        }

    }

    private videoEvents(): void {

        // Ignore 'cpeready' event because this event is from outside the script
        // @ts-ignore
        window.addEventListener('cpeready', ({ detail: { players } }) => {
            const player = players[0];

            // TODO: handle on video change: for now just update the title below the video
            player.addEventListener('videochange', (e) => {
                console.log(player.video.title);
            });

            player.addEventListener('loadedmetadata', (e) => {
                console.log("playing", player);
            });
        });

        // @ts-ignore
        window.addEventListener('cpepipclose', ({ detail: { player } }) => {
            // detail is an Object containing the dailymotion player that has been closed
            player.pause()
        });
    }

    public reloadPlayer() {

    }

    /**
     * Find keywords strings on website
     *
     * selector must be a meta tag placed in head
     */
    private findKeywords(selector?: string): string[] {
        let keywords = [''];

        if ( selector !== null ) {
            try {
                const keywordContainer = document.querySelector(selector);
                keywords = this.sanitizeKeywords(keywordContainer.textContent ? keywordContainer.textContent : keywordContainer.getAttribute("content"));
            } catch (e) {
                if (debugMode === true) {
                    console.error("Can't find selector: ", selector);
                }
            }

        } else if ( selector === null && typeof document.getElementsByTagName("h1")[0] !== "undefined") {
            keywords = this.sanitizeKeywords(document.getElementsByTagName("h1")[0].textContent);
        }

        return keywords;
    }

    /**
     * Sanitize keywords based on language
     *
     * Hangul (Korea): \u3131-\uD79D
     * Alphabet: a-zA-Z0-9
     * Latin Character: \u00C0-\u00FF
     * Devanagri (India): \u0900-\u097F
     */
    // TODO: improve sanitize the keywords to strip duplicate string
    protected sanitizeKeywords(keywords: string): string[] {
        return keywords.replace(/[^- \u3131-\uD79D a-zA-Z0-9 \u00C0-\u00FF \u0900-\u097F \u0153]/g, ' ')
            .split(' ')
            .filter(word => word.length >= this.playerParams.minWordLength);
    }

}