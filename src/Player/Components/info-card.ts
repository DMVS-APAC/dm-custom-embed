import infVideo from "../Interfaces/infVideo";

export default class InfoCard {
    private infoCardEl: HTMLDivElement = null;

    public setInfoCard(data: infVideo): HTMLDivElement {

        this.infoCardEl = document.createElement('div');
        this.infoCardEl.className = 'dm__info-card';

        const textWrapper = document.createElement('div');
        textWrapper.className = 'dm__text-wrapper';

        const videoTitle = document.createElement('h5');
        videoTitle.innerHTML = data.title;
        videoTitle.className = 'dm__video-title';

        const videoDesc = document.createElement('p');
        videoDesc.innerHTML = data.description;
        videoDesc.className = 'dm__video-desc';

        const collapseButton = document.createElement('button');
        collapseButton.innerHTML = 'collapse';
        collapseButton.className = 'dm__desc-collapse';

        collapseButton.addEventListener('click', e => {
            this.collapseDesc(videoDesc);
        });

        textWrapper.append(videoTitle);
        textWrapper.append(videoDesc);
        textWrapper.append(collapseButton);

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

    private collapseDesc(el: HTMLElement): void {
        if (el.classList.contains('dm__is-opened')) {
            el.classList.remove('dm__is-opened');
        } else {
            el.classList.add('dm__is-opened');
        }
    }
}
