import { apiUrl } from "../global/vars";
import { fetchData } from "../api/apiCall";

export default class PlayerEventsManager {
    private players: any[] = [];

    public constructor() {

        this.videoEvents();
    }

    private videoEvents(): void {

        // Ignore 'cpeready' event because this event is from outside the script
        // @ts-ignore
        window.addEventListener('cpeready', ({ detail: { players } }) => {

            this.players = players;

            for (let i=0; i < players.length; i++) {
                const player = players[i];

                player.addEventListener('videochange', async (e) => {
                    const video = player.video;
                    // const url = apiUrl + "/video/" + video.videoId + '?fields=' + this.searchParams.fields;
                    // this.videoParams = await fetchData(url);
                    // this.updateVideoInfo(player.id);
                    const videoUpdated = new CustomEvent('dm-video-params-updated', { detail: {}})
                });

                /**
                 * To handle multiple players in a page with scroll to play
                 */
                player.addEventListener('playing', (e) => {
                    this.togglePlay(player.id);
                });
            }
        });

        // Listen to PiP close to pause the video player
        // @ts-ignore
        window.addEventListener('cpepipclose', ({ detail: { player } }) => {
            // Do pause when cpe PiP is closed
            player.pause()
        });
    }


    private togglePlay(playerId: string): void {

        for (let i=0; i < this.players.length; i++) {
            if (this.players[i].id !== playerId) {
                const parent = this.players[i].parentNode;
                this.players[i].pause();
                parent.classList.remove('pip');
            }
        }

    }
}