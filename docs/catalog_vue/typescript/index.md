安装和运行
----------
> 安装nodeJs <br/>
> 全局安装ts编译器：npm i -g typescrip <br/>
> 编译命令：npx tsc hello.ts

ts配置
----------
在根目录下新建tsconfig.json就可以了，参考配置如下：
```json
// tsconfig.json
{
    "compilerOptions": {
        // 不报告执行不到的代码错误。
        "allowUnreachableCode": true,
        // 必须标注为null类型,才可以赋值为null
        "strictNullChecks": true,
        // 严格模式, 强烈建议开启
        "strict": true,
        // 支持别名导入:
        // import * as React from "react"
        "esModuleInterop": true,
        // 目标js的版本
        "target": "es5",
        // 目标代码的模块结构版本
        "module": "es6",
        // 在表达式和声明上有隐含的 any类型时报错。
        "noImplicitAny": true,
        // 删除注释
        "removeComments": true,
        // 保留 const和 enum声明
        "preserveConstEnums": false,
        // 生成sourceMap    
        "sourceMap": true,
        // 目标文件所在路径
        "outDir": "./lib",
        // 编译过程中需要引入的库文件的列表
        "lib": [
            "dom",
            "es7"
        ],
        // 额外支持解构/forof等功能
        "downlevelIteration": true,
        // 是否生成声明文件
        "declaration": true,
        // 声明文件路径
        "declarationDir": "./lib",
        // 此处设置为node,才能解析import xx from 'xx'
        "moduleResolution": "node"
    },
    // 入口文件
    "include": [
        "src/main.ts"
    ]
}
```

基础类型声明
----------
+ 字面量&非字面量
```typescript
// 字面量
// 字面量的意思就是直接声明，而非new关键词实例化出来的数据
const n:number = 123;
const s:string = '456';
const o:object = {a:1,b:'2'};

// 非字面量
const n:Number = new Number(123);
const s:String = new String('456');
const o:Object = new Object({a:1,b:'2'});
```

+ boolean
```typescript
let IS_MOBILE:boolean = true;
let IS_TABLE:boolean = false;
```

+ number
```typescript
// 支持整数/小数, 同时支持2/8/10/16进制字面量
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

+ string
```typescript
// 支持模板字符串
let s1:string = 'hello world!';
let s2:string = `hello ${name}`;
```

+ 数组
```typescript
// 第1种, 通过在指定类型后面增加[], 表示该数组内的元素都是该指定类型:
let numbers:number[] = [1,2,3,4,5];
// number|string代表联合类型
let numbers:(number|string)[] = [1,2,3,4,'5'];

// 第2种, 通过泛型表示, Array<元素类型>
let numbers:Array<number> = [1,2,3,4,5];
```

+ 元组(Tuple)
```typescript
// 元组类型表示一个已知元素数量和类型的数组, 各元素的类型不必相同
let list4:[number, string] = [1, '2']; // 正确
```

+ 枚举
```typescript
enum Color {Red, Green, Blue}
// 等价
enum Color {Red=0, Green=1, Blue=2}
Color[2] === 'Green' // true
```

+ any(任意类型)
当你不确认变量是什么类型是，可以使用any，但尽量避免

+ void
void的意义和any相反, 表示不是任何类型, 一般出现在函数中, 用来标记函数没有返回值
```typescript
function abc(n:number):void{
    console.log(n);
}
// void类型对应2个值, 一个是undefined,一个null
const n1:void = undefined;
const n2:void = null;
```

+ null & undefined
```typescript
// 默认情况下null和undefined是所有类型的子类型
const n1:null = 123;
const n2:undefined = '123';
// 默认情况下的编译选项strictNullChecks为false, 但是为了避免一些奇怪的问题出现, 建议设置为true
```

+ never
```typescript
// never表示不可达, 用文字还真不好描述, 主要使用在throw的情况下
function error():never{
    throw '错了!';
}
```

+ object
```typescript
// object表示非原始类型, 也就是除number/ string/ boolean/ symbol/ null/ undefined之外的类型
let o1:object = [];
let o2:object = {a:1,b:2};
```

高级类型声明
----------
+ 接口(interface)
```typescript
// 添加？表示非必填，可以为空
interface Article {
    title: string;
    count: number;
    content:string;
    fromSite?: string;
}

const article: Article = {
    title: '标题',
    count: 0,
    content: 'xxx...',
    fromSite: 'baidu.com'
}
```

+ 交叉类型(&)
```typescript
// 交叉类型是将多个类型合并为一个类型, 表示"并且"的关系,用&连接多个类型, 常用于对象合并
interface A {a:number};
interface B {b:string};

const a:A = {a:1};
const b:B = {b:'1'};
const ab:A&B = {...a,...b};
```

+ 联合类型(|)
```typescript
// 联合类型也是将多个类型合并为一个类型, 表示"或"的关系,用|连接多个类型
function setWidth(el: HTMLElement, width: string | number) {
    el.style.width = 'number' === typeof width ? `${width}px` : width;
}
```

+ 范式
```typescript
// 泛型主要是为了约束, 或者说缩小类型范围, 如果不能约束功能, 就代表不需要用泛型
// 范式类
class Person<U> {
    who: U;
    
    constructor(who: U) {
        this.who = who;
    }

    say(code:U): string {
        return this.who + ' :i am ' + code;
    }
}
// 泛型方法
class ABC{
    // 输入T[], 返回T
    getFirst<T>(data:T[]):T{
        return data[0];
    }
}
// 泛型类型
let arr : Array<number>;
arr = ['123']; // 错误, 提示数组中只可以有number类型
arr = [123];
// 泛型接口
interface Goods<T>{
    id:number;
    title: string;
    size: T;
}

let apple:Goods<string> = {id:1,title: '苹果', size: 'large'};
let shoes:Goods<number> = {id:1,title: '苹果', size: 43};
```
