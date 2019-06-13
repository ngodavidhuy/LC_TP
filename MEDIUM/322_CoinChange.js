/* 
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
*/

var coinChange = function(coins, amount) {
  let ways = Array.from(new Array(amount + 1), () => amount + 1);
  ways[0] = 0;

  for (let i = 1; i < ways.length; i++) {
    for (let j = coins.length - 1; j >= 0; j++) {
      let coin = coins[j];
      if (coin <= i) {
        ways[i] = Math.min(ways[i - coin] + 1, ways[i]);
      }
    }
  }

  return ways[ways.length - 1] === amount + 1 ? -1 : ways[ways.length - 1];
};

console.log(coinChange([1,2,5], 11));
console.log(coinChange([2], 3));