// Utilities
import getParam from "../utilities/get-query-params";

// Get debug mode params from url
export const debugMode: boolean = (getParam('dmdebug') != null && getParam('dmdebug') != 'false');

export const apiUrl: string = process.env.API_URL ? process.env.API_URL : "https://api.dailymotion.com/";
