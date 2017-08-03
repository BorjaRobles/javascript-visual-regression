class Page {
  constructor() {
    browser.title = 'My Page';
  }

  open(path) {
    return browser.url(`/${path}`);
  }
}

module.exports = Page;