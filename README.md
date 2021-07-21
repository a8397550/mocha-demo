# mocha-demo

### npm install -g mocha
git clone https://github.com/a8397550/mocha-demo.git

### macha ./test/**/*.js
macha ./test/**/*.js

###
```javascript
describe("test", function() {
  it("test 测试点1", function (done) {
    //...
    done()
  })
  it.only("test 有only的只执行only的 测试点2", function (done) {
    //...
    done()
  })
  it.skip("test skip 跳过此测试点 测试点3", function (done) {
    //...
    done()
  })
});
```