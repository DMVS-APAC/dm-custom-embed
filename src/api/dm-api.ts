// Interfaces
import infVideo from "../dm-player/interfaces/infVideo";

export default class DmApi {

    public fetchData(urlParams: string): Promise<any> {
        return new Promise( async (resolve, reject) => {
            try {
                const response = await fetch(urlParams);

                /*
                  * Only HTTP 200 is regarded as successful response
                  */
                if (response.status === 200) {
                    resolve(response);
                } else {
                    reject(response);
                }
            } catch(err) {
                err.message += "Failed to fetch. Url: " + urlParams;
                reject(err);
            }
        });
        // fetch(urlParams).then( response => {
        //     return response.json();
        // }).then( data => {
        //     if (data.total > 0) {
        //         this.setVideo(data.list[0]);
        //     } else {
        //
        //         // Strip a string to try to get video one more time if there is no video found
        //         this.searchParams.search = this.searchParams.search.substring(0, this.searchParams.search.lastIndexOf(' '));
        //
        //         if( this.searchParams.search.split(' ').length >= this.playerParams.minWordSearch && this.searchParams.search.length > 0 )
        //             this.searchVideo();
        //         else {
        //             if (this.debugMode === true) {
        //                 console.log("%c DM related ", "background: #56C7FF; color: #232323", "Can not find related video. Fallback video used.");
        //             }
        //             this.getFallbackVideo();
        //         }
        //     }
        // });
    }
}