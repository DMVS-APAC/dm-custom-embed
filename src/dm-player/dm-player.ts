// Libraries
import getParam from "../utilities/get-query-params";

// Interfaces
import infPlayer from './interfaces/infPlayer';
import infSearch from "./interfaces/infSearch";
import infVideo from "./interfaces/infVideo";

// Styles
import '../scss/main.scss';

declare global {
    interface Window {
        WDMObject: any;
        cpe: any;
    }
}

export default class DmPlayer {
    private rootEls: NodeListOf<HTMLDivElement> = null;
    private playerParams: infPlayer = null;
    private searchParams: infSearch = null;
    private videoParams: infVideo = null;

    // Showing debug console that need to check
    private debugMode: boolean = false;

    // Events
    private apiReady: Event;
    private playerExtracted: Event;
    private searchParamsReady: Event;

    public constructor(rootEls: NodeListOf<HTMLDivElement>) {
        this.rootEls = rootEls;

        if (getParam('dmdebug') != null) {
            this.debugMode = getParam('dmdebug') != 'false';
        }

        this.addEventListeners();
        this.registerNewEvents();
        this.extractAttrs();
    }

    private addEventListeners() {
        const self = this;

        /**
         * Listen to `dm-api-ready` to run `loadDmPlayer` to construct the player
         */
        document.addEventListener('dm-api-ready', ( e) => {
            self.loadDmPlayer();
        });

        /**
         * Listen to `dm-player-extracted` to wait all attributes is extracted from the element
         * then prepare the search parameters
         */
        document.addEventListener('dm-player-extracted', (e) => {
            self.prepareSearchParams();
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
        this.playerExtracted = new Event('dm-player-extracted');
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
            preVideoTitle: rootEl.getAttribute('preVideoTitle') ? rootEl.getAttribute('preVideoTitle') : null,
            showVideoTitle: ( rootEl.getAttribute('showVideoTitle') != 'false' &&  rootEl.getAttribute('showVideoTitle') != null ),
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

        if (this.debugMode === true) {
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
    private prepareSearchParams() {
        const keywords = this.findKeywords(this.playerParams.keywordsSelector);
        this.searchParams = {
            fields: 'id,title',
            limit: 1,
            sort: this.playerParams.sort,
            search: keywords ? keywords.sort((a, b) => b.length - a.length).slice(0, this.playerParams.maxWordSearch).join(' ') : "",
            language: this.playerParams.language ? this.playerParams.language : ''
        };

        if (!this.playerParams.searchInPlaylist) {

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

    /**
     * Handling multiple adsParams
     *
     * @param str
     */
    private htmlEntities(str: string): string {
        return String(str).replace(/&/g, '%26').replace(/=/g, '%3d');
    }

    private loadDmPlayer(): void {
        const rootEl = this.rootEls[0];
        let cpeEmbed = document.createElement("div");

        /**
         * Set attributes part
         */
        let queryString = "";

        if (this.playerParams.adsParams === "") {
            queryString += "ads_params=contextual";
        } else {
            queryString += "ads_params=" + this.htmlEntities(this.playerParams.adsParams);
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

        let cpeId = this.playerParams.cpeId[0];

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            cpeId = this.playerParams.cpeId[1] ? this.playerParams.cpeId[1] : this.playerParams.cpeId[0];

        let cpeParams = {};

        if (this.playerParams.scrollToPause === true) cpeParams['scroll_to_pause'] = true;

        if (this.playerParams.stpSound === true) cpeParams['stp_sound'] = true;

        if (this.playerParams.playerStyleEnable === true) cpeParams['player_style_enable'] = true;

        if (this.playerParams.playerStyleColor !== null) cpeParams['player_style_color'] = this.playerParams.playerStyleColor;


        // Avoid error while building
        const date: any = new Date();

        /**
         * Set pre title for video
         */
        if (this.playerParams.preVideoTitle !== null) {
            const preTitle = this.setPreVideoTitle(this.playerParams.preVideoTitle);
            rootEl.appendChild(preTitle);
        }

        // Append the element to the root player element
        rootEl.appendChild(cpeEmbed);

        // Load the CPE script
        (function(w,d,s,u,n,i,f,g,e,c){w.WDMObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments);};w[n].l=1*date;w[n].i=i;w[n].f=f;w[n].g=g;e=d.createElement(s);e.async=1;e.src=u;c=d.getElementsByTagName(s)[0];c.parentNode.insertBefore(e,c);})(window,document,"script","//api.dmcdn.net/pxl/cpe/client.min.js","cpe", cpeId, cpeParams);

        /**
         * Set a video title
         */
        if ( this.playerParams.showVideoTitle === true ) {
            const videoTitle = this.setVideoTitle(this.videoParams.title);
            rootEl.appendChild(videoTitle);
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

    private searchVideo(): void {

        if (this.debugMode === true) {
            console.log("%c DM related ", "background: #56C7FF; color: #232323", "Search: " + this.searchParams.search);
        }

        const properties = Object.entries( this.searchParams ).map( ([ key, value] ) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }).join('&');

        const dmSearchUrl = "https://api.dailymotion.com/" + (this.playerParams.searchInPlaylist ? "playlist/" + this.playerParams.searchInPlaylist + "/videos" : "videos") + "?" + properties;

        fetch(dmSearchUrl).then( response => {
            return response.json();
        }).then( data => {
            if (data.total > 0) {
                this.setVideo(data.list[0]);
            } else {
                if (this.debugMode === true) {
                    console.log("%c DM related ", "background: #56C7FF; color: #232323", "Can not find related video. Fallback video used.");
                }
                this.getFallbackVideo();
            }
        });

    }

    private getFallbackVideo() {

        // Define current time and 30 days
        const currentTime = Math.floor(Date.now()/1000);
        const thirtyDays = 2592000;
        const url = "https://api.dailymotion.com/" + (this.playerParams.searchInPlaylist ? "playlist/" + this.playerParams.searchInPlaylist + "/videos?" : "videos?owners=" + this.playerParams.owners)  + "&created_after=" + (currentTime - thirtyDays) + "&sort=random&limit=1&fields=" + this.searchParams.fields;

        const self = this;

        fetch(url).then( response => {
            return response.json();
        }).then( data => {

            if (data.list.length > 0) {

                /**
                 * Data return array, get the first array and pass it to setVideo function
                 */
                self.setVideo(data.list[0]);
            } else {
                if (this.debugMode === true) {
                    console.warn("DM related Unable to find a fallback video");
                }
            }
        });

    }

    private videoEvents(): void {

        // @ts-ignore
        window.addEventListener('cpeready', ({ detail: { players } }) => {
            const player = players[0];

            // TODO: handle on video change: for now just update the title below the video
            // player.addEventListener('videochange', (e) => {
            // });
        })
    }

    /**
     * Find keywords strings on website
     *
     * selector must be a meta tag placed in head
     */
    private findKeywords(selector?: string): string[] {
        let keywords = [''];

        if ( selector !== null ) {
            const keywordContainer = document.querySelector(selector);
            keywords = this.sanitizeKeywords(keywordContainer.getAttribute("content"));
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
    protected sanitizeKeywords(keywords: string): string[] {
        return keywords.replace(/[^- \u3131-\uD79D a-zA-Z0-9 \u00C0-\u00FF \u0900-\u097F \u0153]/g, ' ')
            .split(' ')
            .filter(word => word.length >= this.playerParams.minWordLength);
    }

}