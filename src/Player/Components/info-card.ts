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
        collapseButton.innerHTML = `<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.707107" y1="1.29289" x2="10.253" y2="10.8388" stroke="#BBBCBC" stroke-width="2"/>
<line x1="9.1924" y1="11.1924" x2="19.0919" y2="1.29289" stroke="#BBBCBC" stroke-width="2"/>
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
