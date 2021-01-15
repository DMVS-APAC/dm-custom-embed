// utilities
import {waitFor, sleep} from "../Libraries/Utilities/waitFor";

import PlayerManager from "../Player/player-manager";
import PlayerEventsManager from "../Player/player-events-manager";

export default class CustomEmbedManager {
    private rootEls: NodeListOf<HTMLDivElement> = null;
    private scriptLoaded: boolean = false;
    private keywords: string = null;

    private built: boolean = false;

    // TODO: Find best practice to do static variable and function
    private static player: PlayerManager[] = [];

    public constructor(rootEls: NodeListOf<HTMLDivElement>, keywords?: string){
        // Pass rootEls to local variable
        this.rootEls = rootEls;
        this.keywords = keywords;
        this.eventListeners();
        this.renderElement();
        // this.waitScroll();
        console.log("DM: is this executed?");
    }

    private eventListeners() {

        document.addEventListener('dm-video-holder-ready', async () => {

            await waitFor(() => CustomEmbedManager.player[0] !== null, 500, 2000, "Timeout waiting player ready");

            /**
             * Waiting for the first instance filled and only load script once
             */
            if (this.scriptLoaded !== true) {
                this.loadScript(CustomEmbedManager.player[0].cpeId, CustomEmbedManager.player[0].cpeParams);

                // Set scriptLoaded status
                this.scriptLoaded = true;
            }
        });
    }

    private listenVideoEvents() {
        // It's start to listen to the video events
        new PlayerEventsManager(CustomEmbedManager.player[0].playerParams, CustomEmbedManager.player[0].multiplayerParams);
    }

    public async renderElement() {

        for ( let i=0; i<this.rootEls.length; i++) {
            CustomEmbedManager.player[i] = new PlayerManager("dm_" + i, this.rootEls[i], (i===0 && this.keywords !== null) ? this.keywords : null);
        }

        this.listenVideoEvents();
    }


    public static async renderOnDemand(el: HTMLDivElement, keywords?: string) {
        this.player.push(new PlayerManager("dm_" + this.player.length + 1, el, keywords));

        await sleep(1000);
        window.cpe.parse();
    }

    private waitScroll() {

        window.addEventListener('scroll', e => {
            const heightOfWindow = window.innerHeight;
            const contentScrolled = window.pageYOffset;
            const bodyHeight = document.body.offsetHeight;
            const total = bodyHeight - heightOfWindow;
            const got = contentScrolled;
            const percent = parseInt(String((got / total) * 100));

            if (percent > 20 && this.built === false) {
                this.renderElement();
                this.built = true;
                window.removeEventListener('scroll', () => {});
            }
        });
    }

    /**
     * Load CPE script
     * @param cpeId
     * @param cpeParams
     */
    private loadScript(cpeId: string[], cpeParams: object): void {
        let cpe = cpeId[0];

        // Set different cpeId for mobile
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            cpe = cpeId[1] ? cpeId[1] : cpeId[0];

        // Avoid error while building
        const date: any = new Date();

        // Load the CPE script
        (function(w,d,s,u,n,i,f,g,e,c){w.WDMObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments);};w[n].l=1*date;w[n].i=i;w[n].f=f;w[n].g=g;e=d.createElement(s);e.async=1;e.src=u;c=d.getElementsByTagName(s)[0];c.parentNode.insertBefore(e,c);})(window,document,"script","//api.dmcdn.net/pxl/cpe/client.min.js","cpe", cpe, cpeParams);
    }

    /**
     * Extracted CPE function
     */
    private loadCpeScript() {
        // (function(w, d, s, u, n, i, f, g, e, c) {
        //     w.WDMObject = n;
        //     w[n] = w[n] || function() {
        //         (w[n].q = w[n].q || []).push(arguments);
        //     };
        //     w[n].l = 1 * date;
        //     w[n].i = i;
        //     w[n].f = f;
        //     w[n].g = g;
        //     e = d.createElement(s);
        //     e.async = 1;
        //     e.src = u;
        //     c = d.getElementsByTagName(s)[0];
        //     c.parentNode.insertBefore(e, c);
        // })(window, document, "script", "//api.dmcdn.net/pxl/cpe/client.min.js", "cpe", cpe, cpeParams);
    }

}