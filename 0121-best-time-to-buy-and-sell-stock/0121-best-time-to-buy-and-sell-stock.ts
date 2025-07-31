function maxProfit(prices: number[]): number {
    // sliding window
    // let buy = 0;
    // let sell = 1;
    // let maxProfit = 0;

    // while (sell < prices.length) {
    //     if (prices[buy] < prices[sell]) {
    //         const profit = prices[sell] - prices[buy];
    //         maxProfit = Math.max(maxProfit, profit)
    //     } else {
    //         buy = sell;
    //     }
    //     sell += 1;
    // }    
    // return maxProfit;

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // update minPrice if price is smaller
        } else { // price >= minPrice -> time to sell?
            const profit = price - minPrice;
            maxProfit = Math.max(profit, maxProfit);
        }
    }

    return maxProfit;
};