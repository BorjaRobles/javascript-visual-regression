const Page = require('./base.page');

const LOGIN_PATH = `login?page=`;

class LoginPage extends Page {
  get username()  { return browser.element("input[placeholder='Email or Username']"); }
  get password()  { return browser.element('#password'); }
  get form()  { return browser.element('form'); }
  get loginModal() { return 'h1.main-box__title'; }
  get is_loaded() {return browser.elements('h1.main-box__title'); }

  open(redirect = '/a/#!') {
    return super.open(`${LOGIN_PATH}${encodeURIComponent(redirect)}`);
  }

  submita() {
    return this.form.submitForm();
  }
}

module.exports = new LoginPage();