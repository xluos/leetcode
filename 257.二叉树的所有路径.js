/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const result = []
  function dfs ({
    node,
    path
  }) {
    if (!node) {
      return
    }
    if (path) {
      path += '->' + node.val
    } else {
      path = node.val
    }
    if(!node.left && !node.right) {
      result.push(`${path}`)
      return
    }
    node.left && dfs({node: node.left, path })
    node.right && dfs({node: node.right, path})
  }
  dfs({node: root, path: ''})
  return result
};
// @lc code=end

