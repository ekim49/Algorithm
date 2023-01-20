function solution(money) {
    const countAmericano = Math.floor(money / 5500);
    const change = money - countAmericano * 5500;
    
    return [countAmericano, change];
}