/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minPrice = 100000;
    for(let i=0; i<prices.length; i++){
        if(prices[i]<minPrice){
            minPrice = prices[i];
        }else if(profit < prices[i]-minPrice){
            profit = prices[i]-minPrice
        }
    }
    return profit;
};

maxProfit([7,1,5,3,6,4])