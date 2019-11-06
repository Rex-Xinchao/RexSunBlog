容器属性
--------------------------
采用网格布局的区域，称为"容器"（container）。

### display
+ display: grid (块级元素)
+ display: inline-grid (行内元素)
::: tip Tips
设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。
:::

### grid-template-columns/grid-template-rows
+ grid-template-columns (定义每一列列宽)
+ grid-template-rows (定义每一行行高)
```
// 绝对单位
grid-template-columns: 100px 100px 100px

// 百分比
grid-template-columns: 33.33% 33.33% 33.33%

// repeat-简化重复的值，同上
grid-template-columns：repeat(3, 33.33%)

//auto-fill：单元格大小是固定的，容器大小不确定，自动填充
grid-template-columns：repeat(auto-fill, 100px)

// fr：两列的宽度分别为1fr和2fr，就表示后者是前者的两倍
// 可以与绝对长度的单位结合使用, 150px 1fr 2fr = 150px 75px 150px
grid-template-columns：150px 1fr 2fr;

// minmax：函数产生一个长度范围，表示长度就在这个范围之中
grid-template-columns：1fr 1fr minmax(100px, 1fr)

// auto的宽度等于该列单元格的最大宽度
// 除非单元格内容设置了min-width，且这个值大于最大宽度
grid-template-columns: 100px auto 100px

// 设置网格线名称
// 多个名称设置[fifth-line row-5]
grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4]
```
    
### grid-gap
+ grid-row-gap: 20px (属性设置行与行的间隔(行间距))
+ grid-column-gap: 20px (属性设置列与列的间隔(列间距))
+ grid-gap: 20px 20px (简写形式)
::: tip Tips
grid-前缀可以去除
::: 

### grid-template-areas
+ grid-template-areas: 'a b c' (定义区域)
```
// 定义多行区域
grid-template-areas: 'a b c'
                     'd e f'
                     'g h i';

// 多个单元格合并成一个区域
// 9个单元格分成a、b、c三个区域
rid-template-areas: 'a a a'
                    'b b b'
                    'c c c';
```

### grid-auto-flow
+ grid-auto-flow: row (放置顺序)
    >+ row：先行后列
    >+ column：先列后行
    >+ row dense：先行后列，尽可能填满
    >+ column dense：先列后行，尽可能填满

### justify-items/align-items/place-items
+ justify-items: start (设置单元格内容的水平位置)
    >+ start：对齐左单元格的起始边缘
    >+ end：对齐右单元格的结束边缘
    >+ center：单元格内部居中
    >+ stretch：拉伸，占满单元格的整个宽度（默认值）
+ align-items: start (设置单元格内容的垂直位置)
    >+ start：对齐上单元格的起始边缘
    >+ end：对齐下单元格的结束边缘
    >+ center：单元格内部居中
    >+ stretch：拉伸，占满单元格的整个宽度（默认值）
+ place-items: align-items justify-item：合并简写形式 

### justify-content/align-content/place-content
+ justify-content: start (整个内容区域在容器里面的水平位置)
    >+ start：对齐容器的左起始边框
    >+ end：对齐容器的右结束边框
    >+ center：容器内部居中
    >+ stretch：项目大小没有指定时，拉伸占据整个网格容器
    >+ space-around：每个项目两侧的间隔相等，项目之间的间隔比项目与容器边框的间隔大一倍
    >+ space-between：项目与项目的间隔相等，项目与容器边框之间没有间隔
    >+ space-evenly：项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔
+ align-content: start (整个内容区域的垂直位置）
    >+ start：对齐容器的上起始边框
    >+ end：对齐容器的下结束边框
    >+ center：容器内部居中
    >+ stretch：同justify-content
    >+ space-around：同justify-content
    >+ space-between：同justify-content
    >+ space-evenly：同justify-content
+ place-content: align-content justify-content：合并简写形式

### grid-auto-columns/grid-auto-rows
+ grid-auto-columns: 50px (设置浏览器自动创建的多余网格的列宽)
+ grid-auto-rows: 50px (设置浏览器自动创建的多余网格的行高)

### grid-template/grid：
+ grid-template
    >+ grid-template-columns、grid-template-rows、grid-template-areas (合并简写形式)
+ grid
    >+ grid-template-rows、grid-template-columns、grid-template-areas、grid-auto-rows、grid-auto-columns、grid-auto-flow (合并简写形式)

项目属性
--------------------------
容器内部采用网格定位的子元素，称为"项目"（item）。

### grid-column/grid-row
+ grid-column* (指定项目位置，指定项目的左右边框，分别定位在哪根竖直网格线)
    >+ grid-column-start: 2 (左边框所在的垂直网格线)
    >+ grid-column-end: 4 (右边框所在的垂直网格线)
    >+ grid-column: 1 / 2 (grid-column-start和grid-column-end的合并简写形式)
+ grid-row* (指定项目位置，指定项目的上下边框，分别定位在哪根水片网格线)
    >+ grid-row-start: 2 (上边框所在的水平网格线)
    >+ grid-row-end: 4 (下边框所在的水平网格线)
    >+ grid-row: 1 / 2 (grid-row-start属性和grid-row-end的合并简写形式)

### grid-area
grid-area: e (指定项目放在哪一个区域)

### justify-self/align-self/place-self
+ justify-self: start (设置单元格内容的水平位置，跟justify-items属性的用法完全一致，但只作用于单个项目)
    >+ start：对齐单元格的起始边缘
    >+ end：对齐单元格的结束边缘
    >+ center：单元格内部居中
    >+ stretch：拉伸，占满单元格的整个宽度（默认值）
+ align-self: start (设置单元格内容的垂直位置，跟align-items属性的用法完全一致，也是只作用于单个项目)
    >+ start：对齐单元格的起始边缘
    >+ end：对齐单元格的结束边缘
    >+ center：单元格内部居中
    >+ stretch：拉伸，占满单元格的整个宽度（默认值）
+ place-self: justify-self align-self (合并简写形式)