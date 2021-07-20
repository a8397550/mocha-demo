// add.js
function add(x, y) {
  return x + y;
}

var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  // 跳过这条
  it.skip('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  // 只执行这条
  it.only('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});