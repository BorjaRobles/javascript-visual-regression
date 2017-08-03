const commonConfig = require('./config/common.conf').config;

const customConfig = {
  capabilities: [
    {browserName: 'chrome'}
  ],
};

exports.config = Object.assign({}, commonConfig, customConfig);