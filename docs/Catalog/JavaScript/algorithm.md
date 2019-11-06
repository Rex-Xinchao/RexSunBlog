选择排序
---------------------------
::: tip 工作原理:
+ 第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置。
+ 然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。
+ 以此类推，直到全部待排序的数据元素的个数为零。
+ 选择排序是不稳定的排序方法。
:::
```javascript
const selectSort = arr => {
  let minIndex = null;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i; j < arr.length - 1; j++) {
      (arr[minIndex] > arr[j]) && (minIndex = j)
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
};
let list = [10,7,9,11,22,33,4,2,0,1000];
selectSort(list) // [0, 2, 4, 7, 9, 10, 11, 22, 33, 1000]
```

冒泡排序
---------------------------
::: tip 工作原理:  
+ 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
+ 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
+ 针对所有的元素重复以上的步骤，除了最后一个。
+ 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
:::
```javascript
const BubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j > i; j--) {
        if(arr[j] < arr[j-1]){
           [arr[j], arr[j-1]] = [arr[j-1], arr[j]] // 交换位置
        }
      }
  }
  return arr
};
let list = [10,7,9,11,22,33,4,2,0,1000];
BubbleSort(list) // [0, 2, 4, 7, 9, 10, 11, 22, 33, 1000]
```

归并排序
---------------------------
::: tip 工作原理:
+ 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
+ 设定两个指针，最初位置分别为两个已经排序序列的起始位置
+ 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
+ 重复步骤3直到某一指针超出序列尾
+ 将另一序列剩下的所有元素直接复制到合并序列尾
:::
```javascript
const mergeSort = arr => {
  const length = arr.length;
  // 递归算法的停止条件，即为判断数组长度是否为1
  if (length === 1) {
    return arr
  } else {
    const mid = Math.floor(length / 2);
    const left = arr.slice(0,  mid);
    const right = arr.slice(mid, length);
    // 要将原始数组分割直至只有一个元素时，才开始归并
    return merge(mergeSort(left), mergeSort(right))
  }
};
const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // left,right 排序
  while( leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // 左右多余的项补上
  while (leftIndex < left.length) { 
          result.push(left[leftIndex]);
          leftIndex++;
      }
      while(rightIndex < right.length) {
          result.push(right[rightIndex]);
          rightIndex++;
      }
      return result;
};
let list = [10,7,9,11,22,33,4,2,0,1000];
mergeSort(list) // [0, 2, 4, 7, 9, 10, 11, 22, 33, 1000]
```

快速排序
---------------------------
::: tip 工作原理
+ 首先设定一个分界值，通过该分界值将数组分成左右两部分
+ 将大于或等于分界值的数据集中到数组右边，小于分界值的数据集中到数组的左边。此时，左边部分中各元素都小于或等于分界值，而右边部分中各元素都大于或等于分界值
+ 然后，左边和右边的数据可以独立排序。对于左侧的数组数据，又可以取一个分界值，将该部分数据分成左右两部分，同样在左边放置较小值，右边放置较大值。右侧的数组数据也可以做类似处理
+ 重复上述过程，可以看出，这是一个递归定义。通过递归将左侧部分排好序后，再递归排好右侧部分的顺序。当左、右两个部分各数据排序完成后，整个数组的排序也就完成
:::
```javascript
let quickSort = array => {
    if (array.length < 2) { 
      return array
    } else {
     let leftArray = [];
     let rightArray = [];
     let baseDigit = array[0];
     array.forEach(item => {
       if (item < baseDigit) {
         leftArray.push(item)
       } else if (item > baseDigit) {
         rightArray.push(item)
       }
     });
      return quickSort(leftArray).concat(baseDigit, quickSort(rightArray)) 
    }
};
let list = [10,7,9,11,22,33,4,2,0,1000];
quickSort(list) // [0, 2, 4, 7, 9, 10, 11, 22, 33, 1000]
```

插入排序
---------------------------
::: tip 基本思想
每步将一个待排序的记录，按其关键码值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。
:::
```javascript
const insertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let index = i - 1;
    while (index >= 0 && arr[index] > temp) {
      arr[index + 1] = arr[index];
      index--
    }
    arr[index + 1] = temp
  } 
  return arr
};
let list = [10,7,9,11,22,33,4,2,0,1000];
insertSort(list) // [0, 2, 4, 7, 9, 10, 11, 22, 33, 1000]
```

希尔排序
---------------------------
::: tip 基本思想
+ 希尔排序是基于插入排序的以下两点性质而提出改进方法的
+ 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率。
+ 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位。
:::
```javascript
const shellSort = arr => {
 let temp = null;
 let gap = 1;
 // 动态定义间隔序列
 while (gap < arr.length / 3) {
   gap = gap * 3 + 1;
 }
 for (gap; gap > 0; gap = Math.floor(gap / 3)) {
   for (let i = gap; i < arr.length; i++) {
     temp = arr[i];
     let j = i - gap;
     for (j; j >= 0 && arr[j] > temp; j -= gap) {
       arr[j + gap] = arr[j]
     }
     arr[j + gap] = temp
   }
 }
 return arr
};
let list = [10,7,9,11,22,33,4,2,0,1000];
shellSort(list) // [0, 2, 4, 7, 9, 10, 11, 22, 33, 1000]
```

递归函数
---------------------------
::: tip 条件  
一个含直接或间接调用本函数语句的函数被称之为递归函数，它必须满足以下两个条件：
+ 在每一次调用自己时，必须是（在某种意义上）更接近于解
+ 必须有一个终止处理或计算的准则
:::
```javascript
const showNumber = num => {
    num += 1;
    if (n === 10000) {
        return num
    } else {
       showNumber()
    }
};
showNumber(5)
```
