/** 
 * author:SuperMrBean
 * description:函数柯里化
 * time:2019-07-22
 */

/**
 * 两数互换
 * @params：Array
 * @returns: Array 
 */

let sum = function (a,b,c,d){
  return a+b+c+d
}

function curry (fn, currArgs) {
  return function() {
      let args = [].slice.call(arguments);

      // 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接
      if (currArgs !== undefined) {
          args = args.concat(currArgs);
      }

      // 递归调用
      if (args.length < fn.length) {
          return curry(fn, args);
      }

      // 递归出口
      return fn.apply(null, args);
  }
}

