/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const vis = [true]
  let count = 1
  const query = [0]
  while(query.length) {
    const index = query.shift()
    const len = rooms[index].length
    for(let j = 0; j < len; j++) {
      if (!vis[rooms[index][j]]) {
        count++
        vis[rooms[index][j]] = true
        query.push(rooms[index][j])
      }
    }
  }
  return count === rooms.length
};
// @lc code=end

// canVisitAllRooms([[2],[],[1]])

