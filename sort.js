/** 
 * author:SuperMrBean
 * description:排序算法 
 * time:2019-07-02
 */

/**
 * 冒泡算法
 * @params：Number[]
 * @returns: Number[] 
 */
function bubbleSort(arr){
  let type = Object.prototype.toString.call(arr).slice(8,-1)
  if(type === 'Array'){
    let len = arr.length
    for(let i =0;i<len-1;i++){
      for(let j=0;j<len-i-1;j++){
        if(arr[j]>arr[j+1]){  //判断前一元素是否比后一元素大
          let temp = arr[j] //两元素交换位置
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
      }
    }
    return arr
  }else{
    console.log('参数只能为数组')
  }
}
bubbleSort([1,2,3,4,6,73,2,3,1,1,1,2,3,4,5,7,87,5,5,3,2,1,])

/**
 * 选择排序
 * @params：Number[]
 * @returns: Number[] 
 */

function selectionSort(arr) {
  let type = Object.prototype.toString.call(arr).slice(8,-1)
  if(type === 'Array'){
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
      minIndex = i;// 设置最小数的索引
      for (var j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {     // 对比最小索引右边的数是否比最小索引的数小
          minIndex = j;                 // 将最小数的索引保存
        }
      }
      temp = arr[i];  //交换两个数
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr;
  }else{
    console.log('参数只能为数组')
  }
}
selectionSort([1,2,3,4,6,73,2,3,1,1,1,2,3,4,5,7,87,5,5,3,2,1,])