function groupAnagrams(strs: string[]): string[][] {
    // time O(n * k log k)
    const map = new Map<string, Array<string>>();

    for (let str of strs) {
        // unique key for each str
        const sorted = str.split('').sort().join('');
       
        if (!map.has(sorted)) map.set(sorted, []);
        map.get(sorted).push(str);
    }

    // extract values only
    return Array.from(map.values());
};