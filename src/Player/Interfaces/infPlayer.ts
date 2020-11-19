export default interface InfPlayer {
    //Minimum length of words to keep
    minWordLength: number;

    //Minimum words to perform a search: while no results it will removes a word and retry search
    minWordSearch: number;

    //Maximum of words used for the search: more words you keep, less are chances to get a result
    maxWordSearch: number;

    // Handle embed directly using video id
    videoId?: string;

    //language of videos. List of available values here: https://developer.dailymotion.com/api/partners#languages
    language: string;

    //Which sort to use. List of available values: https://developer.dailymotion.com/api#video-sort-filter
    sort: string[];

    //xid OR username of the channels to search separated by ","
    owners: string;

    //Category to filter. List of available values: https://api.dailymotion.com/channels
    category: string;

    //xid of videos to exclude separated by ","
    excludeIds: string;

    //search in a playlist ? provide playlist xid OR false
    searchInPlaylist: string | boolean;

    //syndication key
    syndication: string;

    //shows player controls
    controls: boolean;

    //parameter to be included on every embedding the player
    adsParams: string;

    //You can get CPE ID from partner HQ on template tabs, inside embed menu
    cpeId: string[];

    // Add selector to get keywords meta
    keywordsSelector: string;

    // A range day to find a video, it's a string that will be converted to number in process
    rangeDay?: string[] | number[];

    // Find a video from given start date, use standard date YYYY-mm-dd e.g. 2018-05-01
    startDate?: string;

    // Assign false the video inventory is not up to date
    getUpdatedVideo?: boolean;

    // Title before video player. I.E. "see also:"
    preVideoTitle?: string;

    // Show video title or not, set true if need to show video title
    showVideoTitle?: boolean;

    // Info of the video in a card below the video player
    showInfoCard?: boolean;

    // Enable outside playlist
    showOutsidePlaylist?: boolean;

    // Enable play now status
    showPlaynow?: boolean;

    // Show video only if ad exist
    showAdOnly?: boolean;

    // Hide controls when ad playing
    adHideControls?: boolean;

    // Close button
    closeButton?: boolean;

    ////// Config to player

    // Picture-in-Picture at start
    pipAtStart?: boolean;

    // No scroll to play
    noStp?: boolean;

    // No Picture-in-Picture
    noPip?: boolean;

    //enable video queue
    queueEnable?: boolean;

    //enable video queue autoplay next
    queueEnableNext?: boolean;

    ///// Config to the CPE script

    // Set video to pause when it is not in viewport
    scrollToPause?: boolean;

    // Activate sound
    stpSound?: boolean;

    // Video auto play
    autoPlayMute?: boolean;

    // Custom player style
    playerStyleEnable?: boolean;

    // Define player style
    playerStyleColor?: string;

    // add to block some keywords
    blockKeywords?: string[];

    width?: number;
    height?: number;

}
