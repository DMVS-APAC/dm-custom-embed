import CustomEmbedManager from '../CustomEmbed/custom-embed-manager';
import { waitFor } from '../Libraries/Utilities/waitFor';

declare global {
	interface Window {
		WDMObject: any;

		/**
		 * To avoid error when using CPE
		 */
		cpe: any;

		/**
		 * Accessible by outside script, this is for
		 */
		dmce: any;
	}
}

const init = async () => {

	// Wait `.dm-player` to be ready first before get the element
	await waitFor( () => document.querySelectorAll('.dm-player').length > 0, 500, 2000, "Timeout to get DM placeholder");

	// Get the element to render process
	const el: NodeListOf<HTMLDivElement> = document.querySelectorAll('.dm-player');

	new CustomEmbedManager(el);
};

init();


/**
 * Expose dmce render method for `on-the-fly` rendering
 * This function idea is for infinite scroll purposes,
 * but it is not limited to only for infinite scroll
 */
class dmce {
	public render( el: HTMLDivElement, keywords?: string) {
		CustomEmbedManager.renderOnDemand(el, keywords);
	};
}

window.dmce = new dmce();