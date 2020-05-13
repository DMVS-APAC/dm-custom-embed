import infVideo from "player/interfaces/infVideo";

export default function setInfoCard(data: infVideo): HTMLDivElement {
    const infoCard = document.createElement('div');
    infoCard.className = 'dm__info-card';

    const textWrapper = document.createElement('div');
    textWrapper.className = 'dm__text-wrapper';

    const videoTitle = document.createElement('p');
    videoTitle.innerHTML = data.title;
    videoTitle.className = 'dm__video-title';

    const videoDesc = document.createElement('p');
    videoDesc.innerHTML = data.description;
    videoDesc.className = 'dm__video-desc';

    textWrapper.append(videoTitle);
    textWrapper.append(videoDesc);

    const avaWrapper = document.createElement('picture');
    avaWrapper.className = 'dm__ava-wrapper';

    const ownerAva = document.createElement('img');
    ownerAva.src = data["owner.avatar_190_url"];
    ownerAva.className = 'dm__owner-ava';

    avaWrapper.append(ownerAva);

    infoCard.append(textWrapper);
    infoCard.append(avaWrapper);

    return infoCard;
}

