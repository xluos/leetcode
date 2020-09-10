/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  function getAnswer ({
    sum,
    tempResult,
    index
  }) {
    if (sum === target) {
      result.push([...tempResult])
      return
    }
    for(let i = index; i < candidates.length; i++) {
      if (sum + candidates[i] > target) {
        continue
      }
      getAnswer({
        sum: sum + candidates[i],
        tempResult: [...tempResult, candidates[i]],
        index: i
      })
    }
  }
  getAnswer({sum: 0, tempResult: [], index: 0})
  return result
};
// @lc code=end

