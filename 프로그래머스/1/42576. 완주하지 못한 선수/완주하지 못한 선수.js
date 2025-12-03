function solution(participant, completion) {
    // hash map
    // O(n) time / O(n) space
    const map = new Map();
    
    // iterate participant -> map[name]++
    participant.forEach(p => map.set(p, (map.get(p) || 0) + 1));
    // iterate completion -> map[name]--
    completion.forEach(c => map.set(c, map.get(c) - 1));
    
    // return key if value > 0
    for (const [key, value] of map) {
        if (value > 0) return key;
    }
}