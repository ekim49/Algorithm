function solution(plans) {
    // convert time to minutes
    plans = plans.map(([name, start, playtime]) => {
        const [h, m] = start.split(":").map(Number);
        return {
            name,
            start: h * 60 + m,
            time: Number(playtime)
        };
    })
    
    // sort by start time
    plans.sort((a, b) => a.start - b.start);
    
    const stack = [];
    const result = [];
    
    // handle plans
    for (let i = 0; i < plans.length; i++) {
        let current = plans[i];
        let nextStart = i < plans.length - 1 ? plans[i + 1].start : Infinity;
        let availableTime = nextStart - current.start;
        
        if (current.time <= availableTime) {
            // finish current task
            result.push(current.name);
            availableTime -= current.time;
            
            // resume paused task
            while (availableTime > 0 && stack.length) {
                let paused = stack.pop();
                if (paused.time <= availableTime) {
                    availableTime -= paused.time;
                    result.push(paused.name);
                } else {
                    paused.time -= availableTime;
                    stack.push(paused);
                    break;
                }
            }
        } else {
            current.time -= availableTime;
            stack.push(current)
        }
    }
    
    while (stack.length) {
        result.push(stack.pop().name);
    }
    return result;
}