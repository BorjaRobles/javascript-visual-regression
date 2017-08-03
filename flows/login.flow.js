import LoginPage from '../pageobjects/login.page.js';

export async function do_login_flow(user, password) {
  await LoginPage.is_loaded.waitForExist();
  await LoginPage.username.setValue(user);
  await LoginPage.password.setValue(password);
  //await LoginPage.submita();
}