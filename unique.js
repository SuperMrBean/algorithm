/** 
 * author:SuperMrBean
 * description:数组去重
 * time:2019-07-11
 */

/**
 * 两数互换
 * @params：Array
 * @returns: Array 
 */
function setUnique(array){
  let type = Object.prototype.toString.call(array).slice(8,-1)
  if(type === 'Array'){
    let target = new Set(array)
    return [...target]
  }else{
    console.log('请输入数组')
  }
}
setUnique([1,2,3,2,1,4,5,8,7,6,4,7,7,1,2,3,3,1,4])

function fromUnique(array){
  let type = Object.prototype.toString.call(array).slice(8,-1)
  if(type === 'Array'){
    let target = new Set(array)
    return Array.from(target)
  }else{
    console.log('请输入数组')
  }
}
fromUnique([1,2,3,2,1,4,5,8,7,6,4,7,7,1,2,3,3,1,4])
