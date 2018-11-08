/**
 * 判断要查询的数组是否至少有一个元素包含在目标数组中
 * @param {*} targetarr 目标数组
 * @param {*} arr 需要查询的数组
 */
export const hasOneOf = (targetarr, arr) => {
    return targetarr.some(item => arr.indexOf(item) > -1)
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
    return Array.from(new Set([...arr1, ...arr2]))
  }
  