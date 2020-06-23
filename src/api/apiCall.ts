// Global
import { debugMode } from "../global/vars";

export function fetchData(urlParams: string): Promise<any> {
    return new Promise( async (resolve, reject) => {
      const response = await fetch(urlParams, {
        mode: 'no-cors'
      });

        /**
         * Only HTTP 200 is regarded as successful response
         */
        if (response.status === 200) {
            resolve(response.json());
        } else {
            reject();
        }
    }).catch( (err) => {
        // Do nothing, just don't show to user what's happened on player
        if (debugMode === true) {
            console.log("API calling error");
        }
    });
}
