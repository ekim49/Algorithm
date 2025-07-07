function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        const profit = price - minPrice;
        if (price < minPrice) {
            minPrice = price;
        } else {
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};