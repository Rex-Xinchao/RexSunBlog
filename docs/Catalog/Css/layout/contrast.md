兼容性对比
---------------------------
### Flex
+ Android 
    > + 2.1 开始就支持旧版本 display:-webkit-box;
    > + 4.4 开始支持标准版本 display: flex;
+ IOS 
    > + 3.2 开始支持旧版本 display:-webkit-box;
    > + 7.1 开始支持标准版本display: flex;
+ PC 
    > + ie10开始支持，但是IE10的是-ms形式的
    
### Grid
+ Android 
    > + 4.4 开始支持标准版本;
+ IOS 
    > + 10.3 开始支持标准版本;
+ PC 
    > + ie10开始支持，但是IE10的是-ms形式的

使用场景
---------------------------
### Flex
如果你只在一个方向上布局（比如在header里面放三个button），你需要使用Flexbox

### Grid
如果你打算在两个维度上创建一个完整的布局，同时使用行和列，那么你应该使用Grid
::: tip Tips
Flex用来做一维布局，Grid用来做二维布局。<br/>
最完美的做法是使用Grid来布局页面，使用Flex去对齐里面的内容
:::
