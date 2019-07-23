/** 
 * author:SuperMrBean
 * description:常用函数
 * time:2019-07-23
 */

/**
 * 函数防抖
 * @params：Function
 * @returns: Function 
 */

function debounce(fn,wait){
  let timer;
  return function (){
    let args = arguments
    let context = this
    if(timer){
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(()=>{
      fn.apply(context,args)
    },wait)
  }
}

let fn = function (){
  console.log(123)
}

setInterval(debounce(fn,500),1000) // 第一次在1500ms后触发，之后每1000ms触发一次

setInterval(debounce(fn,2000),1000) // 不会触发一次（我把函数防抖看出技能读条，如果读条没完成就用技能，便会失败而且重新读条）

/**
 * 函数节流
 * @params：Function
 * @returns: Function 
 */

function throttle(fn, wait) {
  var previous = 0
  var timer = null
  return function () {
      var context = this
      var args = arguments
      if (!previous) {
          previous = Date.now()
          fn.apply(context, args)
      } else if (Date.now() - previous <= wait) {
          if (timer) {
              // console.log(timer)
              clearTimeout(timer)
              timer = null
          }
          // console.log(timer)
          timer = setTimeout(function () {
              // console.log(timer)
              previous = Date.now()
              fn.apply(context, args)
          }, wait)
      } else {
          previous = Date.now()
          fn.apply(context, args)
      }
  }
}

let fn2 = function (){
  console.log(456)
}

setInterval(throttle(fn2,1000),100)