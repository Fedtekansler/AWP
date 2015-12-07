var env = require('./script.js');

exports.config = {
    framework: "jasmine",
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: "phantomjs",
        "phantomjs.binary.path": require("phantomjs").path,
        'phantomjs.cli.jargs': '--web-security=false',
        'phantomjs.ghostdriver.cli.args': ["--loglevel=DEBUG"]
    },

    baseUrl: 'http://localhost:8000',

    onPrepare: function() {
        browser.driver.manage().window().maximize();
        browser.get('star_rating.html');
    }
};