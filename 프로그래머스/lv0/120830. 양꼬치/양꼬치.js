function solution(n, k) {
    let freeDrink = 0;
    if (n >= 10) freeDrink = Math.floor(n / 10);
    
    const costFood = n * 12000;
    const costDrink = k * 2000;
    const costFreeDrink = freeDrink * 2000;
    
    return costFood + costDrink - costFreeDrink;
}