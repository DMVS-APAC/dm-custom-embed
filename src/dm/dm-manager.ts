// utilities
import {waitFor} from "../utilities/wait-for";

import PlayerManager from "../player/player-manager";
import PlayerEventsManager from "../player/player-events-manager";

export default class DmManager {
    private rootEls: NodeListOf<HTMLDivElement> = null;
    private player: PlayerManager[] = [];
    private scriptLoaded: boolean = false;

    public constructor(rootEls: NodeListOf<HTMLDivElement>){
        // Pass rootEls to local variable
        this.rootEls = rootEls;
        this.eventListeners();
        this.renderElement();
    }

    private eventListeners() {

        document.addEventListener('dm-video-holder-ready', async () => {

            await waitFor(() => this.player[0] !== null, 500, 2000, "Timeout waiting player ready");

            if (this.scriptLoaded !== true) {
                // Waiting for the first instance filled
                this.loadScript(this.player[0].cpeId, this.player[0].cpeParams);

                this.scriptLoaded = true;
            }
        });
    }

    private listenVideoEvents() {
        // It's start to listen to the video events
        new PlayerEventsManager();
    }

    public async renderElement() {

        for ( let i=0; i<this.rootEls.length; i++) {
            this.player[i] = new PlayerManager("dm_" + i, this.rootEls[i]);
        }

        this.listenVideoEvents();
    }

    private loadScript(cpeId: string[], cpeParams: object): void {
        let cpe = cpeId[0];

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            cpe = cpeId[1] ? cpeId[1] : cpeId[0];

        // Avoid error while building
        const date: any = new Date();

        // Load the CPE script
        (function(w,d,s,u,n,i,f,g,e,c){w.WDMObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments);};w[n].l=1*date;w[n].i=i;w[n].f=f;w[n].g=g;e=d.createElement(s);e.async=1;e.src=u;c=d.getElementsByTagName(s)[0];c.parentNode.insertBefore(e,c);})(window,document,"script","//api.dmcdn.net/pxl/cpe/client.min.js","cpe", cpe, cpeParams);
    }

}