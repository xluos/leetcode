/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (!k) return []
  let result = []
  function getNum ({ start, z, tempResult }) {
    if (!z) {
      result.push([...tempResult])
      return
    }
    for(let i = start; i <= n; i++) {
      getNum({
        start: i + 1,
        z: z - 1,
        tempResult: [...tempResult, i]
      })
    }
  }
  getNum({
    start: 1,
    z: k,
    tempResult: []
  })
  return result
};
// @lc code=end

// console.log(combine(4,0));
