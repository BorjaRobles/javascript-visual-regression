const Page = require('./base.page');

class DashboardPage extends Page {
  get counter() { return browser.element('.js-notifications-counter'); }
}

module.exports = new DashboardPage();