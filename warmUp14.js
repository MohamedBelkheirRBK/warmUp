/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/


//iterate over the prices, twice, find the most profitable deal by comparing each element to everything else after its position in the array


var maxProfit = function(prices) {
	var maxProfit = 0; //default profit is 0
  for(var i in prices){ //outer loop, holds the stock we plan to buy
  	for(var price2 of prices.slice(i)) //inner loop, loops through all the items after the stock we plan to buy
  		if(price2-prices[i]>maxProfit) //if the current deal is better than our current best deal, switch the deals
  			maxProfit = price2-prices[i];
  }

  return maxProfit //return our profits
};
