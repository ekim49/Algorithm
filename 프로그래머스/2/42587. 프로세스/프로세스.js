function solution(priorities, location) {
    const queue = priorities.map((priority, idx) => ({ priority, idx}));
    
    let order = 0;
    while (queue.length) {
        const current = queue.shift();
        const hasHigher = queue.some((el) => el.priority > current.priority);
        
        if (hasHigher) {
            queue.push(current);
        } else {
            order++;
            if (current.idx === location) return order;
        }
    }
}