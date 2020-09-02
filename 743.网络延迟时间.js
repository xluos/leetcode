  /**
   * @param {number[][]} times
   * @param {number} N
   * @param {number} K
   * @return {number}
   *  N 的范围在 [1, 100] 之间。
   *  K 的范围在 [1, N] 之间。
   *  times 的长度在 [1, 6000] 之间。
   *  所有的边 times[i] = (u, v, w) 都有 1 <= u, v <= N 且 0 <= w <= 100
   *  来源：力扣（LeetCode）
   *  链接：https://leetcode-cn.com/problems/network-delay-time
   *  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
   */
  var networkDelayTime = function(times, N, K) {
    const map = createMatrix(times, N)
    const vis = []
    const dis = []
    for(let i = 1; i <= N; i++) {
      dis[i] = map[K][i]
    }
    dis[K] = 0
    vis[K] = true
    for(let i = 1; i <= N; i++) {
      let min = Infinity
      let p = -1
      for(let j = 1; j <= N; j++) {
        if (!vis[j] && dis[j] < min) {
          min = dis[j]
          p = j
        }
      }
      if (p === -1) {
        continue
      }
      vis[p] = true
      for(let j = 1; j <= N; j++) {
        if (!vis[j] && dis[j] > dis[p] + map[p][j]) {
          dis[j] = dis[p] + map[p][j]
        }
      }
    }
    let max = 0
    for(let i = 1; i <= N; i++) {
      if (dis[i] > max) {
        max = dis[i]
      }
    }
    return max === Infinity ? -1 : max
  };

  function createMatrix (times, N) {
    const matrix = Array.from({length: N+1}, _ => Array(N+1).fill(Infinity))
    for (const [u, v, w] of times) {
      matrix[u][v] = w
    }
    return matrix
  }


  console.log(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2))