[[toc]]

### 兼容性对比

| 版本        | Flex                               | Grid                               |
| :---------- | :--------------------------------- | :--------------------------------- |
| Android:2.1 | 支持旧版本 display:-webkit-box     | 不兼容                             |
| Android:4.4 | 开始支持标准版本 display:flex      | 开始支持标准版本                   |
| IOS:3.2     | 开始支持旧版本 display:-webkit-box | 不兼容                             |
| IOS:7.1     | 开始支持标准版本 display:flex      | 不兼容                             |
| IOS:10.3    | 开始支持标准版本 display:flex      | 开始支持标准版本                   |
| PC:ie10     | 开始支持 但是 IE10 的是-ms 形式的  | 开始支持，但是 IE10 的是-ms 形式的 |

::: tip Tips
Flex 用来做一维布局，Grid 用来做二维布局。<br/>
最完美的做法是使用 Grid 来布局页面，使用 Flex 去对齐里面的内容
:::

### Flex

#### 容器属性

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"
::: tip 注意
Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效
:::

- flex-direction：决定主轴的方向（即项目的排列方向）

  > - row：默认值，主轴为水平方向，起点在左端
  > - row-reverse：主轴为水平方向，起点在右端
  > - column：主轴为垂直方向，起点在上沿
  > - column-reverse：主轴为垂直方向，起点在下沿
  >
  > ```
  > .box {
  >   flex-direction: row | row-reverse | column | column-reverse;
  > }
  > ```

- flex-wrap：决定如果一条轴线排不下，如何换行

  > - nowrap：默认值，不换行
  > - wrap：换行，第一行在上方
  > - wrap-reverse：换行，第一行在下方
  >
  > ```
  > .box{
  >   flex-wrap: nowrap | wrap | wrap-reverse;
  > }
  > ```

- flex-flow：flex-direction 属性和 flex-wrap 属性的简写形式

  > ```
  > .box {
  >   flex-flow: <flex-direction> || <flex-wrap>;
  > }
  > ```

- justify-content：决定项目在主轴上的对齐方式

  > - flex-start：默认值，左对齐
  > - flex-end：右对齐
  > - center： 居中
  > - space-between：两端对齐，项目之间的间隔都相等
  > - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍
  >
  > ```
  > .box {
  >   justify-content: flex-start | flex-end | center | space-between | space-around;
  > }
  > ```

- align-items：决定项目在交叉轴上如何对齐

  > - flex-start：交叉轴的起点对齐
  > - flex-end：交叉轴的终点对齐
  > - center：交叉轴的中点对齐
  > - baseline: 项目的第一行文字的基线对齐
  > - stretch：默认值，如果项目未设置高度或设为 auto，将占满整个容器的高度
  >
  > ```
  > .box {
  >   align-items: flex-start | flex-end | center | baseline | stretch;
  > }
  > ```

- align-content：决定多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
  > - flex-start：与交叉轴的起点对齐
  > - flex-end：与交叉轴的终点对齐
  > - center：与交叉轴的中点对齐
  > - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布
  > - space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
  > - stretch：默认值，轴线占满整个交叉轴
  >
  > ```
  > .box {
  >   align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  > }
  > ```

#### 项目属性

容器的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"

- order：决定项目的排列顺序。数值越小，排列越靠前，默认为 0

  > ```
  > .item {
  >   order: <integer>;
  > }
  > ```

- flex-grow：决定项目的放大比例，默认为 0，即如果存在剩余空间，也不放大

  > ```
  > .item {
  >   flex-grow: <number>; /_ default 0 _/
  > }
  > ```

- flex-shrink：决定项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小

  > ```
  > .item {
  >   flex-shrink: <number>; /_ default 1 _/
  > }
  > ```

- flex-basis：决定在分配多余空间之前，项目占据的主轴空间

  > ```
  > .item {
  >   flex-basis: <length> | auto; /_ default auto _/
  > }
  > ```

- flex：flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto

  > ```
  > .item {
  >   flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  > }
  > ```

- align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性
  > - auto：自动，继承父级
  > - flex-start：交叉轴的起点对齐
  > - flex-end：交叉轴的终点对齐
  > - center：交叉轴的中点对齐
  > - baseline: 项目的第一行文字的基线对齐
  > - stretch：默认值，如果项目未设置高度或设为 auto，将占满整个容器的高度
  >
  > ```
  > .item {
  >   align-self: auto | flex-start | flex-end | center | baseline | stretch;
  > }
  > ```

### Grid

#### 容器属性

采用网格布局的区域，称为"容器"（container）。

- display
  > - display: grid (块级元素)
  > - display: inline-grid (行内元素)

::: tip Tips
设为网格布局以后，容器子元素（项目）的 float、display: inline-block、display: table-cell、vertical-align 和 column-\*等设置都将失效。
:::

- grid-template-columns/grid-template-rows

  > - grid-template-columns (定义每一列列宽)
  > - grid-template-rows (定义每一行行高)
  >
  > ```
  > // 绝对单位
  > grid-template-columns: 100px 100px 100px
  > // 百分比
  > grid-template-columns: 33.33% 33.33% 33.33%
  > // repeat-简化重复的值，同上
  > grid-template-columns：repeat(3, 33.33%)
  > //auto-fill：单元格大小是固定的，容器大小不确定，自动填充
  > grid-template-columns：repeat(auto-fill, 100px)
  > // fr：两列的宽度分别为 1fr 和 2fr，就表示后者是前者的两倍
  > // 可以与绝对长度的单位结合使用, 150px 1fr 2fr = 150px 75px 150px
  > grid-template-columns：150px 1fr 2fr;
  > // minmax：函数产生一个长度范围，表示长度就在这个范围之中
  > grid-template-columns：1fr 1fr minmax(100px, 1fr)
  > // auto 的宽度等于该列单元格的最大宽度
  > // 除非单元格内容设置了 min-width，且这个值大于最大宽度
  > grid-template-columns: 100px auto 100px
  > // 设置网格线名称
  > // 多个名称设置[fifth-line row-5]
  > grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4]
  > ```

- grid-gap
  > - grid-row-gap: 20px (属性设置行与行的间隔(行间距))
  > - grid-column-gap: 20px (属性设置列与列的间隔(列间距))
  > - grid-gap: 20px 20px (简写形式)

::: tip Tips
grid-前缀可以去除
:::

- grid-template-areas: 'a b c' (定义区域)

  > ```
  > // 定义多行区域
  > grid-template-areas: 'a b c'
  >                      'd e f'
  >                      'g h i';
  >
  > // 多个单元格合并成一个区域
  > // 9 个单元格分成 a、b、c 三个区域
  > rid-template-areas: 'a a a'
  >                     'b b b'
  >                     'c c c';
  >
  > ```

- grid-auto-flow: row (放置顺序)

  > - row：先行后列
  > - column：先列后行
  > - row dense：先行后列，尽可能填满
  > - column dense：先列后行，尽可能填满

- justify-items: start (设置单元格内容的水平位置)

  > - start：对齐左单元格的起始边缘
  > - end：对齐右单元格的结束边缘
  > - center：单元格内部居中
  > - stretch：拉伸，占满单元格的整个宽度（默认值）

- align-items: start (设置单元格内容的垂直位置)

  > - start：对齐上单元格的起始边缘
  > - end：对齐下单元格的结束边缘
  > - center：单元格内部居中
  > - stretch：拉伸，占满单元格的整个宽度（默认值）

- place-items: align-items justify-item：合并简写形式

- justify-content: start (整个内容区域在容器里面的水平位置)

  > - start：对齐容器的左起始边框
  > - end：对齐容器的右结束边框
  > - center：容器内部居中
  > - stretch：项目大小没有指定时，拉伸占据整个网格容器
  > - space-around：每个项目两侧的间隔相等，项目之间的间隔比项目与容器边框的间隔大一倍
  > - space-between：项目与项目的间隔相等，项目与容器边框之间没有间隔
  > - space-evenly：项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔

- align-content: start (整个内容区域的垂直位置）

  > - start：对齐容器的上起始边框
  > - end：对齐容器的下结束边框
  > - center：容器内部居中
  > - stretch：同 justify-content
  > - space-around：同 justify-content
  > - space-between：同 justify-content
  > - space-evenly：同 justify-content

- place-content: align-content justify-content：合并简写形式
- grid-auto-columns: 50px (设置浏览器自动创建的多余网格的列宽)
- grid-auto-rows: 50px (设置浏览器自动创建的多余网格的行高)
- grid-template：grid-template-columns、grid-template-rows、grid-template-areas (合并简写形式)
- grid：(全部属性的合并简写形式)

#### 项目属性

容器内部采用网格定位的子元素，称为"项目"（item）。

- grid-column\* (指定项目位置，指定项目的左右边框，分别定位在哪根竖直网格线)

  > - grid-column-start: 2 (左边框所在的垂直网格线)
  > - grid-column-end: 4 (右边框所在的垂直网格线)
  > - grid-column: 1 / 2 (grid-column-start 和 grid-column-end 的合并简写形式)

- grid-row\* (指定项目位置，指定项目的上下边框，分别定位在哪根水片网格线)

  > - grid-row-start: 2 (上边框所在的水平网格线)
  > - grid-row-end: 4 (下边框所在的水平网格线)
  > - grid-row: 1 / 2 (grid-row-start 属性和 grid-row-end 的合并简写形式)

- grid-area: e (指定项目放在哪一个区域)

- justify-self: start (设置单元格内容的水平位置，跟 justify-items 属性的用法完全一致，但只作用于单个项目)

  > - start：对齐单元格的起始边缘
  > - end：对齐单元格的结束边缘
  > - center：单元格内部居中
  > - stretch：拉伸，占满单元格的整个宽度（默认值）

- align-self: start (设置单元格内容的垂直位置，跟 align-items 属性的用法完全一致，也是只作用于单个项目)

  > - start：对齐单元格的起始边缘
  > - end：对齐单元格的结束边缘
  > - center：单元格内部居中
  > - stretch：拉伸，占满单元格的整个宽度（默认值）

- place-self: justify-self align-self (合并简写形式)
