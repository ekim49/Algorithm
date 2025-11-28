function solution(k, dungeons) {
    let maxCount = 0;
    const visited = Array(dungeons.length).fill(false);
    
    function dfs(energy, count) {
        // update maxCount
        maxCount = Math.max(maxCount, count);
        
        for (let i = 0; i < dungeons.length; i++) {
            const [required, cost] = dungeons[i];
            // explore if possible
            if (!visited[i] && energy >= required) {
                visited[i] = true;
                dfs(energy - cost, count + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    return maxCount;
}