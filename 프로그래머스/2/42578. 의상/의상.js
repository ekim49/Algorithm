function solution(clothes) {
    // type별 count
    const map = new Map();
    
    for (let [name, type] of clothes) {
        map.set(type, (map.get(type) || 0) + 1);
    }
    
    let combinations = 1;
    for (const count of map.values()) {
        combinations *= (count + 1); // type별 안입는 케이스 추가
    }
    
    // 아무것도 안입는 케이스 제외
    return combinations - 1;
}