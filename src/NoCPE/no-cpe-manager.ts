// Utilities
import { waitFor } from "../Libraries/Utilities/waitFor";

import PlayerManager from "../Player/player-manager";
import ScrollOut from "scroll-out";

// Assets
import '../NoCPE/Scss/no-cpe.scss';

export default class NoCpeManager {
    private rootEls: NodeListOf<HTMLDivElement> = null;
    private keywords: string = null;
    private videoInside: HTMLDivElement = null;

    // TODO: Find best practice to do static variable and function
    private static player: PlayerManager[] = [];

    // Player stuffs
    private dm: any = null;
    private pauseOnClick: boolean = false;
    private onViewport: boolean = false;
    private isOnPiP: boolean = false;
    private closeClick: boolean = false;
    private noFill: boolean = true;
    private hidden: string = '';
    private visibilityChange: string = '';

    public constructor(rootEls: NodeListOf<HTMLDivElement>, keywords?: string){
        // Pass rootEls to local variable
        this.rootEls = rootEls;
        this.keywords = keywords;
        this.setVisibilitEnv();
        this.renderElement();
        this.addEventListeners();
    }

    private setVisibilitEnv() {
        if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
            this.hidden = "hidden";
            this.visibilityChange = "visibilitychange";

            //@ts-ignore
        } else if (typeof document.msHidden !== "undefined") {
            this.hidden = "msHidden";
            this.visibilityChange = "msvisibilitychange";

            //@ts-ignore
        } else if (typeof document.webkitHidden !== "undefined") {
            this.hidden = "webkitHidden";
            this.visibilityChange = "webkitvisibilitychange";
        }
    }

    private async addEventListeners() {

        await waitFor( () => this.dm !== null, 500, 10000, "Timeout waiting player to be ready");

        document.addEventListener('dm-in-viewport-change', (e: Event) => {
            //@ts-ignore
            if (e.detail === true) {
                this.isInViewport();
            } else {
                this.isNotInViewport();
            }
        });

        document.addEventListener('dm-slide-changes', (e: Event) => {
            // @ts-ignore
            this.dm.load({video: e.detail});
        });

        this.dm.addEventListener('apiready', (e: Event) => {
            this.listenToScroll();

            if (NoCpeManager.player[0].playerParams.pipAtStart === true) {
                this.dm.play();
                this.isOnPiP = true;
                NoCpeManager.player[0].rootEl.setAttribute('data-is-pip', 'true');
            }
        });

        this.dm.addEventListener('playback_ready', (e: Event) => {
            // TODO: handle not showing video if ad is noFill

            const showPlayer = new CustomEvent('dm-show-player');
            document.dispatchEvent(showPlayer);
        });

        this.dm.addEventListener('pause', (e: Event) => {
            if (this.onViewport === true) {
                this.pauseOnClick = true;
            }
        });

        this.dm.addEventListener('play', (e: Event) => {
            if (this.onViewport === true && this.pauseOnClick === true) {
                this.pauseOnClick = false;
            }

            if (this.onViewport === true && this.closeClick === true) {
                this.closeClick = false;
            }
        });

        this.dm.addEventListener('end', (e: Event) => {
            const videoEnd = new CustomEvent("dm-video-end", {detail: this.dm.video.videoId});
            document.dispatchEvent(videoEnd);
        });

        this.dm.addEventListener('ad_start', (e: Event) => {
            this.noFill = false;
        });

        this.dm.addEventListener('ad_play', (e: Event) => {
            // TODO: do some stuff related to ad playing
        });

        this.dm.addEventListener('ad_end', (e: Event) => {
            // TODO: do some stuff related to ad end
        });

        /**
         * Add new class `dm-playback-ready` to show the player
         */
        document.addEventListener('dm-show-player', (e: Event) => {
            this.dm.parentNode.parentNode.parentNode.classList.add('dm-playback-ready');
        });

        /**
         * Handle change tab by user
         */
        document.addEventListener(this.visibilityChange, (e: Event) => {
            if (document[this.hidden]) {
                if (this.pauseOnClick !== false) this.dm.pause();
            } else {
                if (this.pauseOnClick !== false) this.dm.play();
            }
        });
    }

    private listenToScroll() {
        ScrollOut({
            targets: this.rootEls[0],
            onShown: (element, ctx, scrollingElement) => {
                const isInViewport = new CustomEvent('dm-in-viewport-change', { detail: true});
                document.dispatchEvent(isInViewport);
            },
            onHidden: (element, ctx, scrollingElement) => {
                const isInViewport = new CustomEvent('dm-in-viewport-change', { detail: false});
                document.dispatchEvent(isInViewport);
            }
        });
    }

    public async renderElement() {

        for ( let i=0; i<this.rootEls.length; i++) {
            NoCpeManager.player[i] = new PlayerManager("dm_" + i, this.rootEls[i], (i===0 && this.keywords !== null) ? this.keywords : null);

            const player = NoCpeManager.player[i];

            await waitFor( () => player.videoParams !== null, 500, 10000, "Timeout waiting videoParams");

            this.videoInside = document.createElement('div');
            this.videoInside.className = 'inside';

            const videoPlaceholder = document.createElement('div');
            videoPlaceholder.className = 'dailymotion-no-cpe';

            const closeButton = document.createElement('button');
            closeButton.className = 'dm__close-button';
            closeButton.setAttribute('aria-label', 'Close Picture-in-Picture video player');

            const closeImg = new Image();
            closeImg.src = 'https://api.dmcdn.net/pxl/cpe/btnClose.png';
            closeImg.alt = 'Close Picture-in-Picture video player';

            closeButton.appendChild(closeImg);

            this.videoInside.appendChild(closeButton);
            this.videoInside.appendChild(videoPlaceholder);

            // Add closeButton and videoPlaceholder
            this.rootEls[i].querySelector('.dailymotion-cpe').appendChild(this.videoInside);

            // @ts-ignore
            this.dm = DM.player(videoPlaceholder, {
                video: player.videoParams.id,
                params: {
                    mute: true,
                    'queue-enable': ( NoCpeManager.player[i].playerParams.showOutsidePlaylist === true ) ? false : true,
                }
            });

            closeButton.addEventListener('click', () => { this.closePip(); });

        }

    }

    private closePip(): void {
        this.dm.pause();
        NoCpeManager.player[0].rootEl.setAttribute('data-is-pip', 'false');
        this.closeClick = true;
    }

    private isNotInViewport(): void {
        /**
         * This is condition for no PiP
         */
        if (this.dm.paused !== true &&
            NoCpeManager.player[0].playerParams.scrollToPause === true) {
            this.dm.pause();
        }

        /**
         * This is condition for default PiP
         */
        if (this.closeClick !== true &&
            NoCpeManager.player[0].playerParams.noPip !== true &&
            NoCpeManager.player[0].playerParams.scrollToPause !== true &&
            this.dm.paused !== true) {
            this.isOnPiP = true;
            NoCpeManager.player[0].rootEl.setAttribute('data-is-pip', 'true');
        }

        // Change flag for auto play and auto pause purposes
        this.onViewport = false;
    }

    private isInViewport(): void {
        /**
         * This is condition for no PiP
         */
        if (this.dm.paused === true &&
            this.closeClick !== true &&
            this.pauseOnClick === false &&
            NoCpeManager.player[0].playerParams.noStp !== true) {

            this.dm.play();
        }

        if (this.closeClick !== true &&
            NoCpeManager.player[0].playerParams.noPip !== true) {
            this.isOnPiP = false;
            NoCpeManager.player[0].rootEl.setAttribute('data-is-pip', 'false');
        }

        // Change flag for auto play and auto pause purposes
        this.onViewport = true;
    }
}