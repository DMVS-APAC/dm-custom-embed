import infPlayer from '../../Player/Interfaces/infPlayer';

export default function playerExtractor(rootEl: HTMLDivElement): infPlayer {

    /**
     * See interfaces/infPlayer.ts to know further
     */
    const playerParams: infPlayer = {
        maxWordSearch: rootEl.getAttribute('maxWordSearch') ? Number(rootEl.getAttribute('maxWordSearch')) : 15,
        minWordLength: rootEl.getAttribute('minWordLength') ? Number(rootEl.getAttribute('minWordLength')) : 4,
        minWordSearch: rootEl.getAttribute('minWordSearch') ? Number(rootEl.getAttribute('minWordSearch')) : 2,
        videoId: rootEl.getAttribute('videoId') ? rootEl.getAttribute('videoId') : null,
        language: rootEl.getAttribute("language") ? rootEl.getAttribute("language") : "",
        sort:  rootEl.getAttribute("sort") ? rootEl.getAttribute("sort").split(',') : ["recent"],
        owners: rootEl.getAttribute("owners") ? rootEl.getAttribute("owners") : "",
        category: rootEl.getAttribute("category") ? rootEl.getAttribute("category") : "",
        excludeIds: rootEl.getAttribute("excludeIds") ? rootEl.getAttribute("excludeIds") : "",
        searchInPlaylist: rootEl.getAttribute("searchInPlaylist") ? rootEl.getAttribute("searchInPlaylist") : false,
        syndication: rootEl.getAttribute("syndication") ? rootEl.getAttribute("syndication") : "",
        controls: (rootEl.getAttribute('controls') != 'false'),
        adsParams: rootEl.getAttribute('adsParams') ? rootEl.getAttribute('adsParams') : "contextual",
        cpeId: rootEl.getAttribute('cpeId') ? rootEl.getAttribute('cpeId').split(',') : [''],
        keywordsSelector: rootEl.getAttribute('keywordsSelector') ? rootEl.getAttribute('keywordsSelector') : null,
        startDate: rootEl.getAttribute('startDate') ? rootEl.getAttribute('startDate') : null,
        getUpdatedVideo: ( rootEl.getAttribute('getUpdatedVideo') != 'false' ) ,
        preVideoTitle: rootEl.getAttribute('preVideoTitle') ? rootEl.getAttribute('preVideoTitle') : null,
        showVideoTitle: ( rootEl.getAttribute('showVideoTitle') != 'false' &&  rootEl.getAttribute('showVideoTitle') != null ),
        showInfoCard: ( rootEl.getAttribute('showInfoCard') != 'false' &&  rootEl.getAttribute('showInfoCard') != null ),
        showOutsidePlaylist: (rootEl.getAttribute('showOutsidePlaylist') === 'true'),
        showPlaynow: (rootEl.getAttribute('showPlaynow') === 'true'),
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

    return playerParams;
}