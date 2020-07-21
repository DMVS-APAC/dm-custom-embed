import { debugMode } from "../Libraries/Global/vars";

export default class NlpManager {
    private playerParams = null;

    /**
     * Sanitize keywords based on language
     *
     * Hangul (Korea): \u3131-\uD79D
     * Alphabet: a-zA-Z0-9
     * Latin Character: \u00C0-\u00FF
     * Devanagri (India): \u0900-\u097F
     * Urdu (Arab): \u0621-\u064A \u0660-\u0669
     * Thai: \u0E00-\u0E7F
     */
    // TODO: improve sanitize the keywords to strip duplicate string
    protected sanitizeKeywords(keywords: string): string[] {
        return keywords.replace(/[^- \u3131-\uD79D a-zA-Z0-9 \u00C0-\u00FF \u0900-\u097F \u0621-\u064A \u0660-\u0669 \u0E00-\u0E7F \u0153]/g, ' ')
            .split(' ')
            .filter(word => word.length >= this.playerParams.minWordLength);
    }

    /**
     * Find keywords strings on website
     *
     * selector must be a meta tag placed in head
     */
    private findKeywords(selector?: string): string[] {
        let keywords = [''];

        if ( selector !== null ) {
            try {
                const keywordContainer = document.querySelector(selector);
                keywords = this.sanitizeKeywords(keywordContainer.textContent ? keywordContainer.textContent : keywordContainer.getAttribute("content"));
            } catch (e) {
                if (debugMode === true) {
                    console.error("Can't find selector: ", selector);
                }
            }

        } else if ( selector === null && typeof document.getElementsByTagName("h1")[0] !== "undefined") {
            keywords = this.sanitizeKeywords(document.getElementsByTagName("h1")[0].textContent);
        }

        return keywords;
    }
}