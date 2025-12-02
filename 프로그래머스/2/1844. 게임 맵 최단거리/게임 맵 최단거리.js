function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    // edge case - unreachable cases
    if (maps[0, 0] === 0 || maps[n - 1][m - 1] === 0) return -1;
    
    // directions (down, up, right, left)
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const queue = [];
    queue.push([0, 0]);
    
    const dist = Array.from({ length: n }, () => Array(m).fill(0));
    dist[0][0] = 1;
    
    // while queue is not empty
    while (queue.length > 0) {
        // deque
        const [x, y] = queue.shift();
        // if destination is reached -> return distance
        if (x === n - 1 && y === m - 1) return dist[x][y];
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (
                // checking if its in the range
                nx >= 0 && nx < n && ny >= 0 && ny < m &&
                // checking if neighbor is adjacent
                maps[nx][ny] === 1 && 
                // checking if its not visited yet
                dist[nx][ny] === 0) {
                dist[nx][ny] = dist[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    
    return -1;
}