(function() {
  var nx = require('next-js-core2');
  var NxXhrHeader = require('../src/next-xhr-header');

  describe('NxXhrHeader.methods', function() {
    test('set step by step', function() {
      var xhr = new XMLHttpRequest();
      var header = new NxXhrHeader(xhr);
      xhr.open('GET', '/', true);

      //1. init will be null
      expect(header.request).toEqual(null);

      //2. set content-type
      header.request = { 'Content-Type': 'application/json;charset=UTF-8' };
      expect(header.request).toEqual({
        'Content-Type': 'application/json;charset=UTF-8'
      });

      //3. set another header:
      header.request = { 'X-Token': 'qUdzM1oqwyS5VQLH0p5AHC1PfUvye17Qsc6Ec9Wso0I' };
      // equal settter:
      expect(header.request).toEqual({
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Token': 'qUdzM1oqwyS5VQLH0p5AHC1PfUvye17Qsc6Ec9Wso0I'
      });
    });
  });
})();
