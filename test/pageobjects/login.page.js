const USERNAME_TBX = '[name="username"]';
const PASSWORD_TBX = '[name="password"]';
const LOGIN_BTN = '.login-button';

class Login {
    async doLogin(credential) {
        await browser.url('');
        await $(USERNAME_TBX).setValue(credential.username);
        await $(PASSWORD_TBX).setValue(credential.password);
        await $(LOGIN_BTN).click();
        await $(LOGIN_BTN).waitForDisplayed({ reverse: true });
    }
}

export const loginPage = new Login();
