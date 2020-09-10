/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let query = []
  let result = []
  query.push({node: root, z: 0})
  while(query.length) {
    const temp = query.shift()
    if (temp.node && temp.node.val !== undefined) {
      if (result[temp.z]) {
        result[temp.z].push(temp.node.val)
      } else {
        result[temp.z] = [temp.node.val]
      }
    }
    if (temp.node && temp.node.left) {
      query.push({node: temp.node.left, z: temp.z + 1})
    }
    if (temp.node && temp.node.right) {
      query.push({node: temp.node.right, z: temp.z + 1})
    }
  }
  return result.reverse()
};
// @lc code=end
