export default function setVideoTitle(text: string): HTMLParagraphElement {
    const videoTitle = document.createElement('p');
    videoTitle.innerHTML = text;
    videoTitle.className = 'dm__video-title';

    return videoTitle;
}
