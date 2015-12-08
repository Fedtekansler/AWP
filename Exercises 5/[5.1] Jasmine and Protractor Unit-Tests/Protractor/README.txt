# Install Protractor version 2.5.1 (we had trouble with latest version)
npm install -g protractor@2.5.1

# Update Selenium server
webdriver-manager update

# Start Selenium server
webdriver-manager start

# Run protractor tests
# Note: Page to be tested (/app/index.html) must be accessible at http://localhost/AWP/Exercises%205/%5b5.1%5d%20Jasmine%20and%20Protractor%20Unit-Tests/Protractor/app/index.html
protractor conf.js