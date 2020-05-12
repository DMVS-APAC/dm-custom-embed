import PlayerManager from "../player/player-manager";

export default class DM {
    private rootEls: NodeListOf<HTMLDivElement> = null;

    public constructor(rootEls: NodeListOf<HTMLDivElement>){
        this.rootEls = rootEls;

        this.addEventListeners();
    }

    private addEventListeners() {

    }

    public renderElement() {

        for ( let i=0; i<this.rootEls.length; i++) {
            const player = new PlayerManager(this.rootEls[i]);
        }
    }

    private loadScript(cpeId: Array<string>): void {
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