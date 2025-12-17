function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);
    let bridgeWeight = 0;
    
    while (truck_weights.length || bridgeWeight > 0) {
        time++;
        
        const leftTruck = bridge.shift();
        bridgeWeight -= leftTruck;
        
        if (truck_weights.length > 0) {
            const nextTruck = truck_weights[0];
            
            if (bridgeWeight + nextTruck <= weight) {
                bridge.push(nextTruck);
                bridgeWeight += nextTruck;
                truck_weights.shift();
            } else {
                bridge.push(0);
            }
        }
        else {
            bridge.push(0);
        }
    }
    return time;
}