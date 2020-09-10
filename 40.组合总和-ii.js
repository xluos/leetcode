/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = []
  const mp = {}
  candidates.sort((a, b) => a - b)
  function getAnswer ({
    sum,
    tempResult,
    index
  }) {
    if (sum === target) {
      if (!mp[tempResult.join('')]) {
        mp[tempResult.join('')] = true
        result.push([...tempResult])
        return
      }
        
    }
    for(let i = index; i < candidates.length; i++) {
      // if (i>0 && candidates[i] === candidates[i-1]) {
      //   continue
      // }
      if (sum + candidates[i] > target) {
        continue
      }
      getAnswer({
        sum: sum + candidates[i],
        tempResult: [...tempResult, candidates[i]],
        index: i+1
      })
    }
  }
  getAnswer({sum: 0, tempResult: [], index: 0})
  return result
};
// @lc code=end

