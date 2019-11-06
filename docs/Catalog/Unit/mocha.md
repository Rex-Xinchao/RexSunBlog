Mocha
--------------------
### 安装
```
npm install -g mocha
```

### 运行
```
// 在项目根目录执行 mocha 命令
// 默认执行根目录夏test目录里的所有测试文件
mocha 
```
::: tip 运行命令配置
+ npm test 配置为 mocha test/
+ 测试文件命名格式为 *.test.js
:::

### 基本用法
```javascript
describe('#calc', () => {
  describe('#sum()', () => {
    it('sum() should return 0', () => {
      assert.strictEqual(sum(), 1);
    });
    it('sum() should return 1', () => {
      assert.strictEqual(sum(), 0);
    });
  });
});
// 控制台输出
// #calc
//   #sum()
//     1) sum() should return 0 // 失败
//     ~ sum() should return 0  // 成功
// 1 passing (1ms)
// 1 failing
```

### 钩子函数
::: tip Tips
+ before( description, callback ) // 在执行所有测试前, 执行 before()
+ after( description, callback ) // 在执行完所有测试后
+ beforeEach( description, callback ) // 在执行每个测试前, 执行 beforeEach()
+ afterEach( description, callback ) // 在执行完每个测试后
:::
```
describe( '#First', function () {
    before('before', function () {
    } );
    beforeEach('beforeEach', function () {
    } );
    afterEach('afterEach', function () {
    } );
    after('after', function () {
    } );
    // describe里面可以嵌套describe 
    // 虽然嵌套的describe定义在it方法前面，但it方法会优先执行
    // 只有执行完describe中所有的it方法后，才会去执行嵌套的describe方法
    // describe方法会按照前后顺序依次执行
    // describe也会触发父级的钩子函数
    describe( '#Second', function () {
    } );
    it('sum() should return 0', () => {
        assert.strictEqual(sum(), 0);
    });
} );
```

### 异步测试
+ 对调形式
```
describe('Array', function(){
  it('should correct', function(done){
    setTimeout(done,1000)
  })
})
```
+ Promise形式
```
describe('Array', function(){
  it('should correct', function(){
    return Promise.resolve()
  })
})
```
::: tip Tips
+ 如果done()执行的时候有参数，如done('错误')， 那么mocha判定测试不通过。 你也可以直接传入一个Error对象到done函数中，如done(new Error('fail'))
+ 如果it 函数的返回值是一个promise, 将被是为是一个异步测试。并且根据promise的fullfill状态来决定测试是否通过
:::

SupperTest(接口测试)
--------------------
### 安装
```
npm install supertest --save-dev
```

### 基本用法
```javascript
const request = require('supertest');
const api = 'http://localhost:3000';
request(api)
.get('/api/person/list?id=1')
.expect(200)
.expect('Content-Length', '100')
.end(function(err, res) {
  console.log(err);
  console.log(res);
});
```

### 设置Cookie
```javascript
const request = require('supertest');
const should = require('should');
const api = 'http://192.168.1.220';
let cookie = null;
describe('request.agent(app)', function() {
  it('should save cookies', function() {
    login()
  });
  const agent = request(api);
  function login () {
    agent
    .post('/api/authcenter/user/login')
    .send({username: 'jingjing', password: 'e10adc3949ba59abbe56e057f20f883e'})
    .expect(200)
    .end(function(err, res) {
      if (err) {
        console.log(err)
      } else {
        cookie = res.header['authorization']; // 获取cooie
        console.log(cookie);
        getOthers()
      }
    });
  }
  function getOthers () {
    agent
    .get('/api/order/spinner/settlementStyle')
    .set('authorization', cookie) // 设置cookie
    .expect(200)
    .end(function(err, res) {
      if (err) {
        console.log(err)
      } else {
        console.log(res.body)
      }
    });
  }
});
```

Istanbul(测试覆盖率)
-------------------

### 安装
```
npm install -g istanbul
```

### 命令
```
// 检测simpleJs的测试覆盖率
istanbul cover simple.js
```
::: tip 命令配置
+ cover配置为 istanbul cover node_modules/mocha/bin/_mocha test/
:::

### 覆盖率门槛
完美的覆盖率当然是 100%，但是现实中很难达到。需要有一个门槛，衡量覆盖率是否达标。
+ 运行指令
```
// 覆盖率的门槛是90%
istanbul check-coverage --statement 90
// 只允许有一个语句没有被覆盖到
istanbul check-coverage --statement -1
// 设置了3个覆盖率门槛：5个语句、3个 if 代码块、100%的函数
istanbul check-coverage --statement -5 --branch -3 --function 100
```
+ 传递参数
```
// 结合mocha框架
istanbul cover node_modules/mocha/bin/_mocha -- test/test.sqrt.js -R spec
```

### 注释语法
```javascript
// 注意，注释要写在"或"运算符的后面
const object = parameter || /* istanbul ignore next */ {};
// if 语句块，在计算覆盖率的时候会被忽略  
/* istanbul ignore if  */
if (hardToReproduceError) {
  return callback(hardToReproduceError);
}
```
