/** 
 * author:SuperMrBean
 * description:不借助临时变量，进行两个整数的交换 
 * time:2019-07-09
 */

/**
 * 两数互换
 * @params：Number
 * @returns: Number[] 
 */
function swap(a,b){
  a = a - b;
  b = b + a;
  a = b - a;
  return [a,b]
}
swap(10,30)


