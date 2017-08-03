const commonConfig = require('./config/common.conf').config;

const customConfig = {
  capabilities: [
    {
      browserName: 'ie',
      platform: 'Windows',
      version: '10',
      maxInstances: '1',
      name: 'Windows IE 10'
    },

    // Safari
    {
      browserName: 'Safari',
      platform: 'mac',
      version: '8',
      maxInstances: '1',
      name: 'Mac Safari 8'
    },

    // Chrome
    {
      browserName: 'chrome',
      platform: 'windows',
      version: '53',
      maxInstances: '1',
      name: 'Windows Chrome 53'
    },

    // Firefox
    {
      browserName: 'firefox',
      platform: 'windows',
      version: '45',
      maxInstances: '1',
      name: 'Windows Firefox 45'
    },
  ],

  browserstackLocal: true,
  user: 'YOURUSER',
  key: 'YOURKEI',

  services: [
    'selenium-standalone',
    'visual-regression',
    'browserstack'
  ]
};

exports.config = Object.assign({}, commonConfig, customConfig);