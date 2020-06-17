import DmManager from '../../dm/dm-manager';
import {waitFor} from '../../utilities/wait-for';
import getParam from '../../utilities/get-query-params';

declare global {
    interface Window {
        WDMObject: any;
        cpe: any;
        AmpVideoIframe: any;
    }
}

let keywords: string = '';

/**
 * Waiting for iframe ready
 */
const waitForIframeReady = async () => {
    await waitFor(() => window.AmpVideoIframe !== undefined, 100, 5000, "Timeout to get AmpVideoIframe");
    (window.AmpVideoIframe = window.AmpVideoIframe || []).push(onAmpIntegrationReady);
};
waitForIframeReady();


let AMP;

/**
 * Integrate with amp
 */
const onAmpIntegrationReady = (ampIntegration: any) => {
    AMP = ampIntegration;
    const meta = ampIntegration.getMetadata();

    fetch(meta.sourceUrl)
        .then((res) => {
            return res.text();
        })
        .then((html) => {
            keywords = html.match(`<title>(.*?)</title>`)[1];

            init();
            // Tell amp that player is ready, so loader will be removed
            ampIntegration.postEvent("canplay");
        });
}

const init = async () => {

    // Wait `.dm-player` to be ready first before do everything
    await waitFor(() => document.querySelectorAll('.dm-player').length > 0, 500, 2000, "Timeout to get DM placeholder");
    const el: NodeListOf<HTMLDivElement> = document.querySelectorAll('.dm-player');

    new DmManager(el, keywords);
};

// @ts-ignore
window.addEventListener('cpeready', async ({detail: {players}}) => {

    const player = players[0];

    await waitFor(() => AMP !== null, 500, 2000, "Timeout to get AMP Ready");


    /**
     * Send post event to AMP
     */
    player.addEventListener('playing', (e) => {
        console.log("playing");
        AMP.postEvent("playing");
    });

    player.addEventListener("pause", (e) => {
        console.log("pause");
        AMP.postEvent("pause");
    });

    player.addEventListener("end", (e) => {
        console.log("end");
        AMP.postEvent("ended");
    });

    player.addEventListener('controlschange', (e) => {
        console.log("changing", player);
    });

    player.addEventListener("volumechange", (e) => {
        console.log("volumechange");
        if (player.muted === true) {
            AMP.postEvent("muted");
        } else {
            AMP.postEvent("unmuted");
        }
    });

    /**
     * Send a event to player
     */
    AMP.method("play", () => {
        console.log("AMP play");
        player.play();
    });

    AMP.method("pause", () => {
        console.log("AMP pause");
        player.pause();
    });

    AMP.method("mute", () => {
        console.log("AMP mute");
        player.setMuted(true);
    });

    AMP.method("unmute", () => {
        console.log("AMP unmute");
        player.setMuted(false);
    });

    AMP.method("fullscreenenter", () => {
        player.setFullscreen(true);
    });

    AMP.method("fullscreenexit", () => {
        player.setFullscreen(false);
    });
});
