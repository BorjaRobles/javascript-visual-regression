import { assertDiff } from '../lib/assertions';
import { do_login_flow } from '../flows/login.flow';
import LoginPage from '../pageobjects/login.page.js';
import DashboardPage from '../pageobjects/dashboard.page.js';

const widths = [1024];

suite('Dashboard tests', function() {

  test('Dashboard whole page', async function() {
    await LoginPage.open();
    do_login_flow('user', 'password');
    //await browser.waitForVisible('#login');

    const report = await browser.checkDocument({
      //hide: ['time.tb-timestamp'],
      widths: widths
    });

    assertDiff(report);
  });
});


