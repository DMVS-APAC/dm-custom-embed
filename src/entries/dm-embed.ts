import DmPlayer from '../dm-player/dm-player';
import { waitFor } from '../utilities/wait-for';

const getEl = async () => {

	// console.log(document.querySelectorAll('.dm-player'));
	const el: NodeListOf<HTMLDivElement> = await waitFor( );

	// const dmEmbed = new DmPlayer(el);
};

getEl();