function solution(phone_number) {
    // 
    const frontNumber = '*'.repeat(phone_number.length - 4);
    const backNumber = phone_number.slice(-4);
    return frontNumber + backNumber;
}