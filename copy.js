/** 
 * author:SuperMrBean
 * description:js实现深拷贝
 * time:2019-07-11
 */

let obj1 = {
  a:1,
  b:'123',
  c:[1,2,3],
  d:{
    d1:1,
    d2:'123'
  }
}

/**
 * JSON拷贝
 * @params：any
 * @returns: any
 */
function JsonCopy(target){
  return JSON.parse(JSON.stringify(target))
}

/**
 * 递归拷贝拷贝
 * @params：any
 * @returns: any
 */

function recursiveCopy(target){
  let type = Object.prototype.toString.call(target).slice(8,-1)
  let result
  if(type === 'Array'){
    result = []
    for(let i = 0;i < target.length;i++){
      result.push(recursiveCopy(target[i]))
    }
  }else if(type === 'Object'){
    result = {}
    for(let i in target){
      result[i] = recursiveCopy(target[i])
    }
  }else{
    result = target
  }
  return result
}

/**
 * 递归拷贝拷贝(arguments.callee)
 * @params：any
 * @returns: any
 */

function argumentsCopy(target){
  let type = Object.prototype.toString.call(target).slice(8,-1)
  let result
  if(type === 'Array'){
    result = []
    for(let i = 0;i < target.length;i++){
      result.push(arguments.callee(target[i]))
    }
  }else if(type === 'Object'){
    result = {}
    for(let i in target){
      result[i] = arguments.callee(target[i])
    }
  }else{
    result = target
  }
  return result
}

