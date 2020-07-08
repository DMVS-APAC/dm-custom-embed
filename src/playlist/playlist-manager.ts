// Interfaces
import infVideoApi from "../player/interfaces/infVideoApi";

// Plugins
import { lory } from 'lory.js';

// Styles
import '../scss/playlist.scss';

export default class PlaylistManager {
    private dmPlaylist: HTMLDivElement = null;
    private rootEl: HTMLDivElement = null;
    private videos: infVideoApi = null;
    private slides: HTMLLIElement[] = [];
    private slideActive: string = '';
    private nowPlayingTitle: HTMLElement = null;

    public constructor(rootEl: HTMLDivElement, videos: infVideoApi, playnow?: boolean) {
        this.rootEl = rootEl;
        this.videos = videos;

        this.addEventListeners();
        this.generateCarouselTag();

        if (playnow) this.generateNowPlaying();

    }

    private addEventListeners() {
        document.addEventListener('dm-video-end', ( e: Event) => {
            // @ts-ignore
            this.playNext(e.detail);
        });
    }

    private generateNowPlaying() {
        const nowPlaying = document.createElement('div');
        nowPlaying.className = 'dm__now-playing-status';

        const statusText = document.createElement('div');
        statusText.className = 'dm__now-playing-text';
        statusText.innerText = 'Now playing:    ';

        nowPlaying.appendChild(statusText);

        this.nowPlayingTitle = document.createElement('div');
        this.nowPlayingTitle.className = 'dm__now-playing-title';
        this.nowPlayingTitle.innerText = this.videos.list[0].title;

        nowPlaying.appendChild(this.nowPlayingTitle);

        this.dmPlaylist.insertAdjacentElement('afterbegin', nowPlaying);
    }

    private generateCarouselTag() {
        // Create the playlist container first
        this.dmPlaylist = document.createElement('div');
        this.dmPlaylist.className = 'dm-playlist';

        const carouselPlugin = document.createElement('div');
        carouselPlugin.className = 'slider js_slider';

        // Track for Carousel
        const carouselTrack = document.createElement('div');
        carouselTrack.className = 'frame js_frame';
        // carouselTrack.setAttribute('data-glide-el', 'track');

        // Slides
        const carouselSlides = document.createElement('ul');
        carouselSlides.className = 'slides js_slides';

        this.slideActive = this.videos.list[0].id;

        for(let i=0; i < this.videos.list.length; i++) {
            // Slide
            this.slides[i] = document.createElement('li');
            this.slides[i].className = (i === 0) ? 'js_slide dm__playlist-slide dm__playlist-active' : 'js_slide dm__playlist-slide';
            this.slides[i].setAttribute('data-id', this.videos.list[i].id);

            const slideWrapper = document.createElement('div');
            slideWrapper.className = 'dm__slide-wrapper';

            // Thumbnail
            const contThumbnail = document.createElement('figure');
            contThumbnail.className = 'dm__playlist-cont-thumbnail';

            const thumbnail = new Image();
            thumbnail.className = 'dm__playlist-thumbnail';
            thumbnail.src = this.videos.list[i].thumbnail_240_url;

            contThumbnail.appendChild(thumbnail);

            const duration = document.createElement('span');
            duration.className = 'dm__playlist-duration';
            duration.innerText = this.durationFormat(this.videos.list[i].duration);

            contThumbnail.appendChild(duration);

            slideWrapper.appendChild(contThumbnail);

            // Title
            const title = document.createElement('h5');
            title.className = 'dm__playlist-title';

            const text = document.createTextNode(this.videos.list[i].title);
            title.appendChild(text);

            slideWrapper.appendChild(title);

            this.slides[i].appendChild(slideWrapper);

            // Listen to the slide
            this.slides[i].addEventListener('click', (e) => {
                // @ts-ignore
                this.toggleActive(e.target.dataset.id);
            });

            carouselSlides.appendChild(this.slides[i]);
        }

        /**
         * Left Arrow
         */
        const leftArrow = document.createElement('button');
        leftArrow.className = 'js_prev prev';
        // leftArrow.setAttribute('data-glide-dir', '<');
        leftArrow.setAttribute('aria-label', 'Previous');
        leftArrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path class="arrow" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>';

        /**
         * Right Arrow
         */
        const rightArrow = document.createElement('button');
        rightArrow.className = 'js_next next';
        // rightArrow.setAttribute('data-glide-dir', '>');
        rightArrow.setAttribute('aria-label', 'Next');
        rightArrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path class="arrow" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>';

        /**
         * Append component to its container
         */
        carouselTrack.appendChild(carouselSlides);
        carouselPlugin.appendChild(carouselTrack);
        carouselPlugin.appendChild(leftArrow);
        carouselPlugin.appendChild(rightArrow);
        this.dmPlaylist.appendChild(carouselPlugin);

        this.rootEl.appendChild(this.dmPlaylist);

        const self = this;
        /**
         * Execute the carousel
         */
        lory(self.dmPlaylist, {
            slidesToScroll: 2,
        });

    }

    private toggleActive(videoId: string): void {
        this.slideActive = videoId;
        for( let i=0; i < this.slides.length; i++) {
            this.slides[i].className = (this.slides[i].dataset.id === this.slideActive) ? 'glide__slide dm__playlist-slide dm__playlist-active' : 'glide__slide dm__playlist-slide';
        }

        // Seek the video active
        for( let i=0; i < this.videos.list.length; i++) {
            if (videoId === this.videos.list[i].id) {
                this.nowPlayingTitle.innerText = this.videos.list[i].title;
                break;
            }
        }

        this.slideChanges(videoId);
    }

    private playNext(videoId: string): void {
        let slideActive = videoId;

        // Seek the video container first
        for( let i=0; i < this.slides.length; i++) {
            if (this.slides[i].dataset.id === videoId && i !== this.slides.length - 1) {
                slideActive = this.slides[i+1].dataset.id;
                break;
            } else if (i === this.slides.length - 1) {
                slideActive = this.slides[0].dataset.id;
                break;
            }
        }

        this.toggleActive(slideActive);
    }

    private slideChanges(videoId: string):void {

        const slideChanges = new CustomEvent("dm-slide-changes", {detail: videoId});
        document.dispatchEvent(slideChanges);
    }

    private durationFormat(duration: number): string {
        return new Date(duration * 1000).toISOString().substr(14,5);
    }
}
