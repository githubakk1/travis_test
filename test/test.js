var assert = require('chai').assert;
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(10));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  // describe('fail test', function () {
  //   it('should fail', function () {
  //     assert.equal(false, true);
  //   });
  // });
});
