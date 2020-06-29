// utilities
import {waitFor} from "../utilities/wait-for";

import PlayerManager from "../player/player-manager";
import ScrollOut from "scroll-out";

import '../scss/no-cpe.scss';

export default class NoCpeManager {
    private rootEls: NodeListOf<HTMLDivElement> = null;
    private keywords: string = null;

    // TODO: Find best practice to do static variable and function
    private static player: PlayerManager[] = [];

    // Player stuffs
    private dm: any = null;
    private pauseOnClick: boolean = false;
    private onViewport: boolean = false;

    public constructor(rootEls: NodeListOf<HTMLDivElement>, keywords?: string){
        // Pass rootEls to local variable
        this.rootEls = rootEls;
        this.keywords = keywords;
        this.renderElement();
        this.addEventListeners();
    }

    private async addEventListeners() {

        await waitFor( () => this.dm !== null, 500, 10000, "Timeout waiting player to be ready");

        this.dm.addEventListener('apiready', () => {
            this.listenToScroll();
        });

        this.dm.addEventListener('pause', (e) => {
            console.log('pause', e);
            if (this.onViewport === true) {
                this.pauseOnClick = true;
            }
        });

        this.dm.addEventListener('play', (e) => {
            console.log('play', e);
            if (this.onViewport === true && this.pauseOnClick === true) {
                this.pauseOnClick = false;
            }
        });
    }

    private listenToScroll() {
        ScrollOut({
            targets: this.rootEls[0],
            onShown: (element, ctx, scrollingElement) => {
                if (this.dm.paused === true && this.pauseOnClick === false) {
                    this.dm.play();
                }

                this.onViewport = true;
            },
            onHidden: (element, ctx, scrollingElement) => {
                if (this.dm.paused !== true) {
                    this.dm.pause();
                }

                this.onViewport = false;
            }
        });
    }

    public async renderElement() {

        for ( let i=0; i<this.rootEls.length; i++) {
            NoCpeManager.player[i] = new PlayerManager("dm_" + i, this.rootEls[i], (i===0 && this.keywords !== null) ? this.keywords : null);

            const player = NoCpeManager.player[i];

            await waitFor( () => player.videoParams !== null, 500, 10000, "Timeout waiting videoPaarms");

            const videoPlaceholder = document.createElement('div');
            videoPlaceholder.className = 'dailymotion-no-cpe';

            this.rootEls[i].querySelector('.dailymotion-cpe').appendChild(videoPlaceholder);

            // @ts-ignore
            this.dm = DM.player(videoPlaceholder, {
                video: player.videoParams.id,
                params: {
                    mute: true
                }
            });
        }

    }

}