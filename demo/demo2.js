const assert = require('assert').strict;

/*
# 生命周期执行测试
测试before执行时机1
测试beforeEach执行时机2
    ✓ 1 加 1 应该等于 2
测试afterEach执行时机3
    # indexo f测试
# indexOf测试测试before执行时机1
测试beforeEach执行时机2
# indexOf测试测试beforeEach执行时机2
      ✓ indexOf测试
# indexOf测试测试afterEach执行时机3
测试afterEach执行时机3
# indexOf测试测试after执行时机4
测试after执行时机4
*/
describe('# 生命周期执行测试', function () {
  before('before', function () { // 运行测试之前执行
    console.log('测试before执行时机1');
  });

  beforeEach('beforeEach', function () { // 在每个测试用例之前执行。
    console.log('测试beforeEach执行时机2');
  });

  after('after', function () { // 运行测试之后执行
    console.log('测试after执行时机4');
  });

  afterEach('afterEach', function () { // 在每个测试用例之后执行。
    console.log('测试afterEach执行时机3');
  });
  it('1 加 1 应该等于 2', function () {
    assert(1 + 1 === 2);
  });

  const publishApiName = '# index测试';

  describe(publishApiName, function () {
    before('before', function () {
      console.log(`${publishApiName}测试before执行时机1`);
    });

    beforeEach('beforeEach', function () {
      console.log(`${publishApiName}测试beforeEach执行时机2`);
    });

    after('after', function () {
      console.log(`${publishApiName}测试after执行时机4`);
    });

    afterEach('afterEach', function () {
      console.log(`${publishApiName}测试afterEach执行时机3`);
    });
    it('indexOf测试', function () {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});


/**
 * 异步的测试
 */
describe('#异步的测试', function () {
  this.timeout(6000); // 可以通过此方法设置超时时间
  // this.timeout(0); // 禁用超时
  before('before', function (done) { // 异步的生命周期，这里可以放connect数据库
    setTimeout(function () {
      done();
      // 超过2秒 就会抛出 Error: Timeout of 2000ms exceeded.
      // For async tests and hooks, ensure "done()" is called;
      // if returning a Promise, ensure it resolves.
    }, 1500);
  });

  beforeEach('before', function (done) { // 异步的生命周期，这里可以放connect数据库
    // this.timeout(2000); // 挂钩级超时也可能适用
    setTimeout(function () {
      done();
    }, 1500); // 超过2秒抛出异常
  });

  it('promise异步测试', function (done) { // done可以传入两个参数，第一个参数如果不是null或undefined,表示测试用例执行失败，第二个参数是回调函数
    new Promise(function (res, reject) {
      try {
        // assert(1 === 2);
        res();
      } catch (err) {
        reject(new Error(err));
      }
    }).then(function () {
      done();
    }).catch(function (err) {
      done(err);
    });
  }).timeout(6000); // 可以指定单个it的超时时间
});



// 可以异步执行用例
// $ mocha --delay xxx.js
// setTimeout(function () {
//   if (run) {
//     run();
//   }
// }, 5000);
