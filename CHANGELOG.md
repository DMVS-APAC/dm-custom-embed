# Changelog

## [1.5.12] ()

**Implemented enhancements:**
- Add new parameter to dm-player on AMP

**Fixed Bugs:**
- Add unrewrite style to avoid the style changes on partner website

## [1.5.11] (2020-10-21)

**Implemented enhancements:**
- Add feature to hide close button in ad playing on PiP mode

## [1.5.10] (2020-10-20)

**Fixed Bugs:**
- Increase waiting time for ad filled
- Add width 100% to fit its container
- Fixed overwriting inline style in `dm-player` element
- Add `clear` to avoid oldschool floating layout

## [1.5.9] (2020-10-02)

**Fixed Bugs:**
- The recent fallback is still using keywords
- Double `created_after` param if the `rangeDay` and `startDate` exist
- Fixed random video falback when playlist actived

## [1.5.8] (2020-09-29)

**Fixed Bugs:**
- Thumbnail not showing

## [1.5.7] (2020-09-29)

**Fixed Bugs:**
- Fixed style issue in small player size

## [1.5.6] (2020-09-28)

**Fixed Bugs:**
- Hotfix style issue

## [1.5.5] (2020-09-28)

**Implemented enhancements:**
- Add thumbnail before video ready to play

## [1.5.3] (2020-09-22)

**Fixed Bugs:**
- Multiple fallback is still looping when video is found

## [1.5.2] (2020-09-04)

**Implemented enhancements:**
- Update endpoint

## [1.5.1] (2020-09-02)

**Implemented enhancements:**
- Add new custom close button to remove video player

## [1.5.0] (2020-08-26)

**Implemented enhancements:**
- New Outside Playlist theme

## [1.4.10] (2020-08-19)

**Implemented enhancements:**
- Add handling ad_pause by a user click

## [1.4.9] (2020-08-10)

**Implemented enhancements:**
- Improve AMP script to be more faster to load

## [1.4.8] (2020-08-07)

**Fixed Bugs:**
- Fix api calling for recent sort param

## [1.4.7] (2020-08-06)

**Implemented enhancements:**
- Add param for hide controls when ad playing: This issue is related to controls position and skip ad button from IMA SDK

## [1.4.6] (2020-08-05)

**Fixed Bugs:**
- Hotfix filtering status for sort param "recent"

## [1.4.5] (2020-07-30)

**Implemented enhancments:**
- Create new module on player-manager for generate query
- Enhance the sort params for possibilty to have multiple fallback
- Add new param to find the video based on range day.

## [1.4.4] (2020-07-27)

**Implemented enhancements:**
- Rename wait-for.ts to waitFor.ts

**Fixed Bugs**
- No-cpe floating is not showing

## [1.4.3] (2020-07-22)

**Fixed Bugs**
- Increase waiting time for ad

## [1.4.2] (2020-07-21)

**Fixed Bugs**
- Fix playlist align on Safari
- Add one more param to player showAdOnly

## [1.4.1] (2020-07-15)

**Implemented enhancements:**
- Add PiP for No CPE
- Restructure folder naming and code

## [1.4.0] (2020-07-08)

**Implemented enhancements:**
- Add a new feature Playlist outside the player
- Fixed the AMP script

## [1.3.0] (2020-06-29)

**Implemented enhancements:**
- Add basic features scroll-to-play and scroll-to-pause to no-cpe player

## [1.2.10] (2020-06-23)

**Implemented enhancements:**
- Support custom endpoint for private content purposes

## [1.2.9] (2020-06-18)

**Implemented enhancements:**
- Add new no-cpe player

## [1.2.8] (2020-06-17)

**Fixed Bugs:**
- Small fixed for multiple video player

## [1.2.7] (2020-06-17)

**Implemented enhancements:**
- Support infinite scroll

## [1.2.6] (2020-06-09)

**Implemented enhancements:**
- Add behaviour params for multiple player

## [1.2.5] (2020-06-04)

**Implemented enhancements:**
- Handle multiple player ad, others player will be disabled when ad is playing

## [1.2.4] (2020-05-28)

**Implemented enhancements:**
- Implement start date properly

## [1.2.3] (2020-05-27)

**Fixed Bugs:**
- Wrong deploy branch, see previous log to see what's added

## [1.2.2] (2020-05-27)

**Implemented enhancements:**
- Support custom start date
- Support ad playing before start another second video
- Support Arabic alphabet

## [1.2.1] (2020-05-22)

**Fixed Bugs:**
- Fix loading problem

## [1.2.0] (2020-05-20)

**Fixed Bugs:**
- Fix the infocard description to just show one line

**Implemented enhancements:**
- Support pause when PiP is closed
- Support multiple player
- Add function to wait keywords element to be ready (handle client rendered)
- Support change the video title when video changes
- Handle load video directly using video id

## [1.1.7] (2020-04-29)

**Implemented enhancements:**
- Support body element selector

## [1.1.6] (2020-04-27)

**Fixed Bugs:**
- Fixed publisher logo on info card

**Implemented enhancements:**
- Remove @types/dotenv package
- Add version badge and license badge to readme
- Add new param to handle updated video

## [1.1.5] (2020-04-24)

**Fixed Bugs:**
- Add waiting function to wait for the element is ready or not

**Implemented enhancements:**
- Search API improvements

## [1.1.2] (2020-04-22)

**Fixed Bugs:**
- Fixed get recent video

**Implemented enhancements:**
- Add owner avatar to info card

## [1.1.1] (2020-04-22)

**Fixed Bugs:**
- Handle empty language params

**Implemented enhancements:**
- Add info card below the video
- Add animation while showing the video

## [1.1.0] (2020-04-16)

**Implemented enhancements:**
- Handle many parameters in tag placeholder
- Add before title i.e. "See also:"
- Add video title below the video

## [1.0.0] (2020-03-23)

**Features:**
- Embed video from Dailymotion
- One script embed
- Add interfaces using html attributes
