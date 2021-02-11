import infVideo from "../Interfaces/infVideo";

export default class InfoCard {
    private infoCardEl: HTMLDivElement = null;

    public setInfoCard(data: infVideo, fullLength: boolean): HTMLDivElement {

        this.infoCardEl = document.createElement('div');
        this.infoCardEl.className = 'dm__info-card';

        const textWrapper = document.createElement('div');
        textWrapper.className = 'dm__text-wrapper';

        const videoTitle = document.createElement('h5');
        videoTitle.innerHTML = data.title;
        videoTitle.className = 'dm__video-title';

        const videoDesc = document.createElement('p');
        const desc = fullLength ? data.description.replace(
            /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
            '<a href="$1">$1</a>'
        ) : data.description;
        videoDesc.innerHTML = desc;
        videoDesc.className = 'dm__video-desc';

        const collapseButton = document.createElement('button');
        collapseButton.innerHTML = `<svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="9" height="10" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.111111 0.1)"/>
</pattern>
<image id="image0" width="9" height="10" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAKCAYAAABmBXS+AAAAXElEQVQoFYXQwQmAMAyF4Q+vTuAQzuEgDqKDOIhzOIQTeBWlh0IotA2EJLwf8nhwYtapDy8OTDU2QbkfbBhLOANx3lgxZDiK5X5hSWApxLsJNd8l43vNeDeCbpg/LfMs1IxQsGEAAAAASUVORK5CYII="/>
</defs>
</svg>
`;
        collapseButton.className = 'dm__collapse-button';
        collapseButton.setAttribute('aria-label', 'Collapse video description');

        collapseButton.addEventListener('click', e => {
            this.collapseDesc(videoDesc, collapseButton);
        });

        videoTitle.insertAdjacentElement('afterbegin', collapseButton);
        textWrapper.append(videoTitle);
        textWrapper.append(videoDesc);

        const avaWrapper = document.createElement('picture');
        avaWrapper.className = 'dm__ava-wrapper';

        const ownerAva = document.createElement('img');
        ownerAva.src = data["owner.avatar_190_url"];
        ownerAva.className = 'dm__owner-ava';

        avaWrapper.append(ownerAva);

        this.infoCardEl.append(textWrapper);
        this.infoCardEl.append(avaWrapper);

        return this.infoCardEl;
    }

    public cleanup() {

        if (this.infoCardEl) {
            this.infoCardEl.remove();
            delete this.infoCardEl;
        }
    }

    private collapseDesc(descEl: HTMLElement, buttonEl: HTMLButtonElement): void {
        if (descEl.classList.contains('dm__full-desc')) {
            descEl.classList.remove('dm__full-desc');
            buttonEl.classList.remove('collapsed');
        } else {
            descEl.classList.add('dm__full-desc');
            buttonEl.classList.add('collapsed');
        }
    }
}
