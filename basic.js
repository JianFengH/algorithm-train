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
function getElementByIdWithBFS(nodes, id) {
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

function getElementByIdWithBFS2(root, id){
  const queue = new Array();
  queue.push(root);
  while(queue.length) {
    const node = queue.shift();
    if(node.id === id) return node;
    for(const child of node.childNodes) queue.push(child);
  }
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

/**
 * dp[n] = Math.max(dp[n−1]+nums[n], nums[n])
 * max = Math.max(max, dp[n])
 * 
 * dp[0] = nums[0]
 * max = nums[0]
 * */
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

function maxSubArray2(nums) {
  let pre = nums[0], max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
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
  let count = 0;
  const dp = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(false);
  }
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        count++;
      }
    }
  }
  return count;
}

const longestPalindrome = (s) => {
  let longestStr = '';
  let dp = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(false);
  }
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (j - i <= 1 && s[i] === s[j]) {
        dp[i][j] = true;
      } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
      }
      if (dp[i][j] && j - i + 1 > longestStr.length) { // new longestStr
        longestStr = s.substring(i, j + 1);
      }
    }
  }
  return longestStr;
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

const generateParenthesis = (n) => {
  const res = [];
  const dfs = (path, left, right) => {
    if (left > n || left < right) return;
    if (left + right === 2 * n) {
      res.push(path);
      return;
    }
    dfs(path + '(', left + 1, right);
    dfs(path + ')', left, right + 1);
  }
  dfs('', 0, 0);
  return res;
}

function findPasswordStrength(pd) {
  const len = pd.length;
  let count = 0;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < len; j++) {
      if (j + i > len) break;
      const substr = pd.substring(j, j + i);
      count += getUniqueStrNumber(substr);
    }
  }
  return count;
}

function getUniqueStrNumber(str) {
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    set.add(str.substring(i, i + 1));
  }
  return set.size;
}

/**
 * dp[i] = dp[i-1] + (count: i combined with previous strings)
 * 
 * dp[0] = 1;
 */
function findPasswordStrength2(pd) {
  if (typeof pd !== 'string') return 0;

  let res = 1;
  for (let i = 1; i < pd.length; i++) {
    let count = 0;
    const set = new Set();
    for (let j = i; j >= 0; j--) {
      set.add(pd.substring(j, j + 1));
      count += set.size;
    }
    res += count;
  }
  return res;
}

function countDecreasingRatings(ratings) {
  const len = ratings.length;
  let count = 0;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < len; j++) {
      if (j + i > len) break;
      const sub = ratings.slice(j, j + i);
      if (isDecreasingConsecutively(sub)) {
        count++;
      }
    }
  }
  return count;
}

function isDecreasingConsecutively(sub) {
  for (let i = 0; i < sub.length - 1; i++) {
    if (sub[i + 1] !== sub[i] - 1) return false;
  }
  return true;
}

/**
 * str[i] + 1 !== str[i-1], dp[i] = dp[i-1] + 1;
 * str[i] + 1 === str[i-1], dp[i] = dp[i-1] + (X: back to find the time until str[j-1] !== str[j] + 1);
 * 
 * dp[0] = 1
 */
function countDecreasingRatings2(ratings) {
  const len = ratings.length;
  let res = 1;
  for (let i = 1; i < len; i++) {
    if (ratings[i] + 1 !== ratings[i - 1]) {
      res++;
    } else {
      res++;
      let j = i - 1;
      while (j >= 0) {
        if (ratings[j + 1] + 1 === ratings[j]) {
          res++;
          j--;
        } else {
          break;
        }
      }
    }
  }
  return res;
}

function countDecreasingRatings3(ratings) {
  let res = 1;
  let pre = 0;
  for (let i = 1; i < ratings.length; i++) {
    res++;
    if (ratings[i] + 1 === ratings[i - 1]) {
      pre++;
      res += pre;
    } else {
      pre = 0;
    }
  }
  return res;
}

function traverseTree(root) {
  const depth = root.depth;
  const levelNodes = [[root]];
  for (let i = 1; i < depth; i++) {
    const upLevelNodes = levelNodes[i - 1];
    const currLevelNodes = [];
    for (let j = 0; j < upLevelNodes.length; j++) {
      currLevelNodes.push(...upLevelNodes.children);
    }
    levelNodes.push(currLevelNodes);
  }
}

/**
 * dp[i] =  Math.max(dp[i-1], prices[i] - minprice)
 * 
 * dp[0] = 0
 */
function maxProfit2(prices) {
  let res = 0;
  let minprice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    res = Math.max(res, prices[i] - minprice);
    if (prices[i] < minprice) {
      minprice = prices[i];
    }
  }
  return res;
}

// O(2^N)
function makeSpecialStrings(str, idx, len) {
  if (idx === len) {
    console.log(str);
  } else {
    func(str + "a", idx + 1, len);
    func(str + "b", idx + 1, len);
  }
}
// console.log(func('', 0, 3));