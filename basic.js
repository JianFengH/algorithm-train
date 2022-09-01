// by DFS
function getElementById(node, id) {
  if (!node) return null;
  if (node.id === id) return node;
  for (let i = 0; i < node.childNodes.length; i++) {
    const found = getElementById(node.childNodes[i], id);
    if (found) return found;
  }
  return null;
}


function getElementById2(node, id) {
  while (node) {
    if (node.id === id) return node;
    node = nextElementByDFS(node);
  }
  return null;
}

function nextElementByDFS(node) {
  if (node.children.length) {
    return node.children[0];
  }
  if (node.nextElementSibling) {
    return node.nextElementSibling;
  }
  while (node.parentNode) {
    if (node.parentNode.nextElementSibling) {
      return node.parentNode.nextElementSibling;
    }
    node = node.parentNode;
  }
  return null;
}

// by BFS
function getElementById3(nodes, id) {
  if (nodes.length === 0) return null;
  const nextLevelNodes = [];
  for (let i = 0; i < nodes.length; i++) {
    const currNode = nodes[i];
    if (currNode.id === id) {
      return currNode;
    }
    if (currNode.children.length) {
      nextLevelNodes.push(...currNode.children);
    }
  }
  return getElementById3(nextLevelNodes, id);
}


function binarySearch(items, target) {
  items.sort((a, b) => a - b);
  let low = 0;
  let high = items.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const elem = items[mid];
    if (target > elem) {
      low = mid + 1;
    } else if (target < elem) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// dp[n] = dp[n−1] + dp[n−2]
let climbStairs = function (n) {
  let res = 1, n1 = 1, n2 = 1;
  for (let i = 2; i <= n; i++) {
    res = n1 + n2;
    n1 = n2;
    n2 = res;
  }
  return res;
}

// dp[i] = min(dp[i-2], dp[i-1]) + cost[i])
let minCostClimbingStairs = function (cost) {
  let n = cost.length,
    n1 = cost[0],
    n2 = cost[1];
  for (let i = 2; i < n; i++) {
    let tmp = n2;
    n2 = Math.min(n1, n2) + cost[i];
    n1 = tmp;
  }
  return Math.min(n1, n2);
};

// dp[n] = Math.max(dp[n−1]+nums[n], nums[n])
let maxSubArray = function (nums) {
  let max = nums[0], pre = 0;
  for (const num of nums) {
    if (pre > 0) {
      pre += num;
    } else {
      pre = num;
    }
    max = Math.max(max, pre);
  }
  return max;
}

// dp[i] = Math.max(dp[i-1], prices[i] - minprice);
let maxProfit = function (prices) {
  let max = 0, minprice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    minprice = Math.min(prices[i], minprice);
    max = Math.max(max, prices[i] - minprice);
  }
  return max;
}


let countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s.substring(i, j + 1))) {
        count++;
      }
    }
  }
  return count;
}

let isPalindrome = function (s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] != s[j]) return false;
    i++;
    j--;
  }
  return true;
}

let countSubstrings2 = function (s) {
  const len = s.length;
  let count = 0;
  const dp = new Array(len);

  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }
  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] == s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        count++;
      } else {
        dp[i][j] = false;
      }
    }
  }
  return count;
}

const longestPalindrome = (s) => {
  if (s.length < 2) return s;
  // res: 最长回文子串
  let res = s[0], dp = [];
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (j - i === 1 && s[i] === s[j]) {
        dp[i][j] = true;
      } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
      }
      // 获取当前最长回文子串
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }

  return res;
}

var minPathSum = function (grid) {
  let row = grid.length, col = grid[0].length;

  // calc boundary
  for (let i = 1; i < row; i++)
    // calc first col
    grid[i][0] += grid[i - 1][0];

  for (let j = 1; j < col; j++)
    // calc first row
    grid[0][j] += grid[0][j - 1];

  for (let i = 1; i < row; i++)
    for (let j = 1; j < col; j++)
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);

  return grid[row - 1][col - 1];
}

const findContentChildren = (g, s) => {
  if (!g.length || !s.length) return 0;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let gi = 0, si = 0;
  while (gi < g.length && si < s.length) {
    if (g[gi] <= s[si++]) gi++;
  }
  return gi;
}