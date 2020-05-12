import DM from '../dm/dm-manager';
import { waitFor } from '../utilities/wait-for';

declare global {
	interface Window {
		// dmEmbed: PlayerManager;
		WDMObject: any;
		cpe: any;
	}
}

const init = async () => {

	await waitFor( () => document.querySelectorAll('.dm-player').length > 0, 500, 2000, "Timeout to get DM placeholder");
	const el: NodeListOf<HTMLDivElement> = document.querySelectorAll('.dm-player');

	new DM(el);
};

init();
