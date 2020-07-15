import { apiUrl } from "../Libraries/global/vars";

import infMultiplayer from "./interfaces/infMultiPlayer";

export default class PlayerEventsManager {
    private players: any[] = [];
    private adPlaying: string = '';
    private multiplayerParams: infMultiplayer = null;

    public constructor(multiplayer: infMultiplayer) {
        this.videoEvents();

        this.multiplayerParams = multiplayer;
    }

    /**
     * Listen to video events from Dailymotion player
     */
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

                /**
                 * Listen to an ad_play
                 *
                 * - Cover others player when the ad is played
                 */
                player.addEventListener('ad_play', (e) => {
                    if (this.adPlaying === '') {
                        this.adPlaying = player.id;

                        // Disable the player that not playing yet
                        if (this.multiplayerParams.adCoverPlay === true) {
                            this.toggleDisable();
                        }

                        // Toggle playing video and hide the PiP
                        if (this.multiplayerParams.closePip === true) {
                            this.togglePlay(player.id);
                        }
                    }
                });

                /**
                 * Listen to an ad_end event
                 *
                 * - Remove player cover when the ad is ended
                 */
                player.addEventListener('ad_end', (e) => {

                    if (this.adPlaying !== '') {
                        this.adPlaying = '';

                        // Toggle disabled player
                        if (this.multiplayerParams.adCoverPlay) {
                            this.toggleDisable();
                        }
                    }
                });

                /**
                 * Listening to playing event
                 *
                 * - Close the PiP if there are multiple players and the closePip is true
                 */
                player.addEventListener('playing', (e) => {
                    if (this.multiplayerParams.closePip === true) {
                        this.togglePlay(player.id);
                    }
                });

                player.addEventListener('end', (e) => {
                    const videoEnd = new CustomEvent("dm-video-end", {detail: player.video.videoId});
                    document.dispatchEvent(videoEnd);
                });
            }
        });

        // Listen to PiP close to pause the video player
        // @ts-ignore
        window.addEventListener('cpepipclose', ({ detail: { player } }) => {
            // Do pause when cpe PiP is closed
            player.pause()
        });

        // TODO: support multiplayer for next development
        document.addEventListener('dm-slide-changes', ( e: Event) => {
            // @ts-ignore
            this.players[0].load({ video: e.detail});
        });
    }

    /**
     * Toggle play and remove all PiP active
     *
     * @param playerId
     */
    private togglePlay(playerId: string): void {

        // Check every player available
        for (let i=0; i < this.players.length; i++) {

            // close the PiP if other player is start playing
            if (this.players[i].id !== playerId) {
                const parent = this.players[i].parentNode;
                this.players[i].pause();
                parent.classList.remove('pip');
            }
        }

    }

    /**
     * Add cover to others player to be not clickable by the user
     */
    private toggleDisable(): void {

        // Check every player available
        for (let i=0; i < this.players.length; i++) {

            // get parent player
            const parent = this.players[i].parentNode;

            if (this.adPlaying !== '' && this.adPlaying !== this.players[i].id) {
                parent.classList.add('dm-disabled');
            } else {
                parent.classList.remove('dm-disabled');
            }
        }
    }
}