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
        const desc = data.description.replace(
            /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
            '<a href="$1">$1</a>'
        );
        videoDesc.innerHTML = desc;
        videoDesc.className = 'dm__video-desc';

        const collapseButton = document.createElement('button');
        collapseButton.innerHTML = `<svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="7.35355" y1="8.64645" x2="15.3536" y2="16.6464" stroke="#BBBBBB"/>
<line x1="14.6464" y1="16.6464" x2="22.6464" y2="8.64645" stroke="#BBBBBB"/>
<g filter="url(#filter0_f)">
<line y1="-2.5" x2="15.6205" y2="-2.5" transform="matrix(0.640184 0.768221 -0.640184 0.768221 5 9)" stroke="#BBBBBB" stroke-width="5" stroke-linejoin="round"/>
<line y1="-2.5" x2="15.6205" y2="-2.5" transform="matrix(0.640184 -0.768221 0.640184 0.768221 15 21)" stroke="#BBBBBB" stroke-width="5" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_f" x="0" y="0.158894" width="30" height="25.8411" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur"/>
</filter>
</defs>
</svg>`;
        collapseButton.className = 'dm__collapse-button';
        collapseButton.setAttribute('aria-label', 'Collapse video description');

        collapseButton.addEventListener('click', e => {
            this.collapseDesc(videoDesc, collapseButton);
        });

        // videoTitle.insertAdjacentElement('afterbegin', collapseButton);
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
        this.infoCardEl.append(collapseButton);

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
