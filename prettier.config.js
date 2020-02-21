const config = require('@serverless/eslint-config/prettier.config');

const newConfig = {
    tabWidth: 4,
};

module.exports = Object.assign(config, newConfig);
