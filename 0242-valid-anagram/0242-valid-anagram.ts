function isAnagram(s: string, t: string): boolean {
    // not an anagram if s, t has different length
    if (s.length !== t.length) return false;

    const count = {};

    // letter counts for s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // subtract characters using t
    for (let char of t) {
        // if char doesn't exist in the original string, return false
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
};