/*
 * @lc app=leetcode.cn id=486 lang=javascript
 *
 * [486] 预测赢家
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  let start = 0
  let end = nums.length - 1
  let user = [0, 0]
  let sum = 0
  for(let i = 0; start < end; i++) {
    let grades = 0
    if (nums[start] < nums[end]) {
      grades = nums[end]
      end--
    } else if (nums[start] > nums[end]) {
      grades = nums[start]
      start++
    } else {
      // 两边相同考虑下一次结果，中间大于等于两个才有的选
      if (end - start > 2) {
        // 把下一个大的结果藏起来
        if (nums[start + 1] > nums[end - 1]) {
          grades = nums[end]
          end--
        } else {
          grades = nums[start]
          start++
        }
      } else {
        // 紧挨着就随便选一个
        grades = nums[start]
        start++
      }
    }
    sum += grades
    user[i%2] += grades
  }
  return user >= (sum / 2)
};
// @lc code=end

PredictTheWinner([1, 5, 233, 7])

