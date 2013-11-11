var assert = require('assert');

describe('Promise-enabled WebDriver', function () {

  describe('injected browser executing a Google Search', function () {

    it('performs as expected', function (done) {
      var searchBox;
      var browser = this.browser;


		browser._debugPromise();
		browser.on('status', function(info) {
		 console.log(info.cyan);
		});
		browser.on('command', function(meth, path, data) {
		 console.log(' > ' + meth.yellow, path.grey, data || '');
		});

      browser.get('http://google.com')
      .elementByName('q').type('webdriver')
      .elementByName('q').getAttribute('value')
      .then(function(val){
        assert.equal(val, 'webdriver');
      }).then(done, done);
    });
  });
});
