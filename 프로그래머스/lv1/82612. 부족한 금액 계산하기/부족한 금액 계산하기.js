function solution(price, money, count) {
    let total = 0;
    for (let i = 0; i <= count; i++) {
        total += price * i;
    }
    if ((money - total) > 0) {
        return 0;
    } else {
        return total - money;
    }
}