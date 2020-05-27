import { apiUrl } from "../global/vars";
import { fetchData } from "../api/apiCall";

export default class PlayerEventsManager {
    private players: any[] = [];
    private adPlaying: string = '';

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
                    const videoUpdated = new CustomEvent('dm-video-updated', { detail: { videoId: video.videoId }})
                    document.dispatchEvent(videoUpdated);
                });

                player.addEventListener('ad_play', (e) => {
                    this.adPlaying = player.id;
                });

                player.addEventListener('ad_end', (e) => {

                    this.adPlaying = '';

                });

                player.addEventListener('start', (e) => {
                    if (this.adPlaying !== player.id) {
                        player.pause();
                    }
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