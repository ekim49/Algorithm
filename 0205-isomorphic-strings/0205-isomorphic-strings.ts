function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // if charS is seen before
        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) return false;
        } 
        // if we're seeing charS for the first time
        else {
            if (mapTS.has(charT)) return false;
        }

        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
};