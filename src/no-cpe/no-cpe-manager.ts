// utilities
import {waitFor} from "../utilities/wait-for";

import PlayerManager from "../player/player-manager";

import '../scss/no-cpe.scss';

export default class NoCpeManager {
    private rootEls: NodeListOf<HTMLDivElement> = null;
    private keywords: string = null;

    // TODO: Find best practice to do static variable and function
    private static player: PlayerManager[] = [];

    public constructor(rootEls: NodeListOf<HTMLDivElement>, keywords?: string){
        // Pass rootEls to local variable
        this.rootEls = rootEls;
        this.keywords = keywords;
        this.renderElement();
    }

    public async renderElement() {

        for ( let i=0; i<this.rootEls.length; i++) {
            NoCpeManager.player[i] = new PlayerManager("dm_" + i, this.rootEls[i], (i===0 && this.keywords !== null) ? this.keywords : null);

            const player = NoCpeManager.player[i];

            await waitFor( () => player.videoParams !== null, 500, 10000, "Timeout waiting videoPaarms");
            console.log(player.videoParams, this.rootEls[i].querySelector('.dailymotion-cpe'));

            const videoPlaceholder = document.createElement('div');
            videoPlaceholder.className = 'dailymotion-no-cpe';

            this.rootEls[i].querySelector('.dailymotion-cpe').appendChild(videoPlaceholder);

            // @ts-ignore
            DM.player(videoPlaceholder, {
                video: player.videoParams.id,
                params: {
                    autoplay: true,
                    mute: true
                }
            });
        }

    }

}