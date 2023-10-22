import { loginPage } from '../pageobjects/login.page';
import { switchBrowser } from '../../utils/utils';

describe('Multiremote', () => {
    const user1 = { username: 'user1', password: '1' };
    const user2 = { username: 'user2', password: '1' };

    it('multi browser in capabilities', async () => {
       await switchBrowser(1);
       await loginPage.doLogin(user1);

       await switchBrowser(2);
       await loginPage.doLogin(user2);
       await browser.pause(3000);
    });
})

