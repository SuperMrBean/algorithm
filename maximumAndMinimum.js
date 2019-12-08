/** 
 * author:SuperMrBean
 * description:js获取数据最大值最小值
 * time:2019-12-08
 */
let arr = [,-2.5,-1,0,1,21,101.2,110.5]

/**
 * 排序法
 * @params：array
 * @returns: number
 */
function Maximum(target){
  let result = target.sort((a,b)=>{
    return a-b
  })
  let max = result[result.length-1]
  return max
}

function Minimum(target){
  let result = target.sort((a,b)=>{
    return a-b
  })
  let min = result[0]
  return min
}

/**
 * 使用 Math 中的 max/min 方法
 * @params：array
 * @returns: number
 */

function MathMax(target){
  let result = Math.max.apply(Math,target)
  return result
}

function MathMin(target){
  let result = Math.min.apply(Math,target)
  return result
}

/**
 * 使用es6扩展符
 * @params：array
 * @returns: number
 */

function ES6Max(target){
  let result = Math.max(...target)
  return result
}

function ES6Min(target){
  let result = Math.min(...target)
  return result
}

