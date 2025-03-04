function canCompleteCircuit(gas: number[], cost: number[]): number {
    // Greedy 
    // time O(n) | space O(1)
    // total sum of gas < total sum of cost -> return -1

    let totalGas = 0;
    let totalCost = 0;
    let startIdx = 0;
    let tank = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];

        tank += gas[i] - cost[i];

        // move the startIdx, initialize tank
        if (tank < 0) {
            startIdx = i + 1;
            tank = 0;
        }
    }

    return totalGas >= totalCost ? startIdx : -1;
};