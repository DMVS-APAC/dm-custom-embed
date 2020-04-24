import DmPlayer from '../dm-player/dm-player';
import { waitFor } from '../utilities/wait-for';

const init = async () => {

	await waitFor( () => document.querySelectorAll('.dm-player').length > 0, 500, 2000, "Timeout to get DM placeholder");
	const el: NodeListOf<HTMLDivElement> = document.querySelectorAll('.dm-player');

	const dmEmbed = new DmPlayer(el);
};

init();