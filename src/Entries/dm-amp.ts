// import CustomEmbedManager from '../CustomEmbed/custom-embed-manager';
import NoCpeManager from '../NoCPE/no-cpe-manager';
import { waitFor, sleep } from '../Libraries/Utilities/waitFor';
import getParam from '../Libraries/Utilities/get-query-params';

declare global {
    interface Window {
        WDMObject: any;
        cpe: any;
        AmpVideoIframe: any;
    }
}

let keywords: string = '';

// Load SDK first before start
(function() {
    var e = document.createElement('script');
    e.async = true;
    e.src = 'https://api.dmcdn.net/all.js';

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(e, s);
}());

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
    keywords = getParam('keywords');

    init();
    // Tell amp that player is ready, so loader will be removed
    ampIntegration.postEvent("canplay");
}

const setAttributes = async (el: NodeListOf<HTMLDivElement>) => {
    const dmPlayer = el[0];

    dmPlayer.setAttribute('cpeId', getParam('cpeId'));
    dmPlayer.setAttribute('owners', getParam('owners'));
    dmPlayer.setAttribute('sort', getParam('sort'));

    if (getParam('searchinplaylist') !== null) {
        dmPlayer.setAttribute('searchInPlaylist', getParam('searchinplaylist'));
    }

    if (getParam('videoid') !== null) {
        dmPlayer.setAttribute('videoId', getParam('videoid'));
    }

    if (getParam('minwordlength') !== null) {
        dmPlayer.setAttribute('minWordLength', getParam('minwordlength'));
    }

    if (getParam('minwordsearch') !== null) {
        dmPlayer.setAttribute('minWordSearch', getParam('minwordsearch'));
    }

    if (getParam('maxwordsearch') !== null) {
        dmPlayer.setAttribute('maxWordSearch', getParam('maxwordsearch'));
    }

    if (getParam('language') !== null) {
        dmPlayer.setAttribute('language', getParam('language'));
    }

    if (getParam('category') !== null) {
        dmPlayer.setAttribute('category', getParam('category'));
    }

    if (getParam('excludeids') !== null) {
        dmPlayer.setAttribute('excludeIds', getParam('excludeids'));
    }

    if (getParam('syndication') !== null) {
        dmPlayer.setAttribute('syndication', getParam('syndication'));
    }

    if (getParam('controls') !== null) {
        dmPlayer.setAttribute('controls', getParam('controls'));
    }

    if (getParam('adsparams') !== null) {
        dmPlayer.setAttribute('adsParams', getParam('adsparams'));
    }

    if (getParam('getupdatedvideo') !== null) {
        dmPlayer.setAttribute('getUpdatedVideo', getParam('getupdatedvideo'));
    }

    if (getParam('queueenable') !== null) {
        dmPlayer.setAttribute('queueEnable', getParam('queueenable'));
    }

    if (getParam('queueenablenext') !== null) {
        dmPlayer.setAttribute('queueEnableNext', getParam('queueenablenext'));
    }
}

const init = async () => {

    // Wait `.dm-player` to be ready first before do everything
    await waitFor(() => document.querySelectorAll('.dm-player').length > 0, 500, 20000, "Timeout to get DM placeholder");

    // Wait DM sdk to be ready
    // @ts-ignore
    await waitFor( () => typeof DM !== 'undefined', 500, 10000, "Timeout to get DM sdk");

    const el: NodeListOf<HTMLDivElement> = document.querySelectorAll('.dm-player');

    await setAttributes(el);

    const playerManager = new NoCpeManager(el, keywords);

    await waitFor(() => playerManager.dm !== null, 500, 10000, "Timeout to get player ready");
    addEventListeners(playerManager.dm);
};

const addEventListeners = async (player) => {

    await waitFor(() => AMP !== null, 500, 2000, "Timeout to get AMP Ready");


    /**
     * Send post event to AMP
     */
    player.addEventListener('playing', (e) => {
        AMP.postEvent("playing");
    });

    player.addEventListener("pause", (e) => {
        AMP.postEvent("pause");
    });

    player.addEventListener("end", (e) => {
        AMP.postEvent("ended");
    });

    player.addEventListener('controlschange', (e) => {
    });

    player.addEventListener("volumechange", (e) => {
        if (player.muted === true) {
            AMP.postEvent("muted");
        } else {
            AMP.postEvent("unmuted");
        }
    });

    player.addEventListener('ad_start', (e) => {
        AMP.postEvent('ad_start');
    });

    player.addEventListener('ad_end', (e) => {
        AMP.postEvent('ad_end');
    });

    /**
     * Send a event to player
     */
    AMP.method("play", () => {
        player.play();
    });

    AMP.method("pause", () => {
        player.pause();
    });

    AMP.method("mute", () => {
        player.setMuted(true);
    });

    AMP.method("unmute", () => {
        player.setMuted(false);
    });

    AMP.method("fullscreenenter", () => {
        player.setFullscreen(true);
    });

    AMP.method("fullscreenexit", () => {
        player.setFullscreen(false);
    });
};
