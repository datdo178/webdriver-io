/**
 *
 * @param browserIndex - 1 | 2
 *   - 1: chrome1
 *   - 2: chrome2
 */
export const switchBrowser = async (browserIndex) => {
    const selectedBrowser = await browser.getInstance('chrome' + browserIndex);
    $ = selectedBrowser.$.bind(selectedBrowser);
    $$ = selectedBrowser.$$.bind(selectedBrowser);
}
