function solution(players, callings) {
    const indexMap = new Map();
    players.forEach((player, index) => {
        indexMap.set(player, index);
    });
    
    for (const name of callings) {
        const currentIndex = indexMap.get(name);
        const frontIndex = currentIndex - 1;
        const frontPlayer = players[frontIndex];
        
        // swap
        players[frontIndex] = name;
        players[currentIndex] = frontPlayer;
        
        // update indices in indexMap
        indexMap.set(name, frontIndex);
        indexMap.set(frontPlayer, currentIndex);
    }
    return players;
}