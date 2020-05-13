// utilities
import {waitFor} from "../utilities/wait-for";

import PlayerManager from "../player/player-manager";

export default class DM {
    private rootEls: NodeListOf<HTMLDivElement> = null;
    private player: Array<PlayerManager> = null;

    public constructor(rootEls: NodeListOf<HTMLDivElement>){
        this.rootEls = rootEls;

        this.renderElement();
    }

    private addEventListeners() {

    }

    public async renderElement() {

        for ( let i=0; i<this.rootEls.length; i++) {
            this.player.push( new PlayerManager(this.rootEls[i]) );
            // this.players[i] = 1;

            console.log(this.player);
            // if (i === 0) {
            //     await waitFor(() => this.players[0] !== null, 500, 2000, "Timeout waiting player ready");
            //     console.log(this.players[0]);
            //
            // }
        }
    }

    private loadScript(cpeId: string[]): void {
        // let cpeId = this.playerParams.cpeId[0];
        //
        // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        //     cpeId = this.playerParams.cpeId[1] ? this.playerParams.cpeId[1] : this.playerParams.cpeId[0];
        //
        // // Avoid error while building
        // const date: any = new Date();
        //
        // // Load the CPE script
        // (function(w,d,s,u,n,i,f,g,e,c){w.WDMObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments);};w[n].l=1*date;w[n].i=i;w[n].f=f;w[n].g=g;e=d.createElement(s);e.async=1;e.src=u;c=d.getElementsByTagName(s)[0];c.parentNode.insertBefore(e,c);})(window,document,"script","//api.dmcdn.net/pxl/cpe/client.min.js","cpe", cpeId);
    }

}