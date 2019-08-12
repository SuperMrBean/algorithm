/** 
 * author:SuperMrBean
 * description:查找字符串或者数组中出现次数最多的字符
 * time:2019-08-12
 */

/**
 * 出现最多字符
 * @params：Array | Srting
 * @returns: {maxEle,count} 
 */
function countMax(target){
  let type = Object.prototype.toString.call(target).slice(8,-1)
  let obj = {}
  let maxEle = null
  let count = 0
  if(type === 'Array'){
    target.forEach(i => {
      if(obj[i]){
        obj[i]++
      }else{
        obj[i] = 1
      }
    });
    for(let g in obj){
      if(obj[g]>count){
        count = obj[g]
        maxEle = g
      }
    }
    return {maxEle,count}
  }else if(type === 'String'){
    target = target.split("")
    target.forEach(i => {
      if(obj[i]){
        obj[i]++
      }else{
        obj[i] = 1
      }
    });
    for(let g in obj){
      if(obj[g]>count){
        count = obj[g]
        maxEle = g
      }
    }
    return {maxEle,count}
  }else{
    console.log('请输入数组或字符串')
  }
}
