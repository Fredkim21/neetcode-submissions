class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if (s.length !== t.length) return false;

       const freq = new Map();

       for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1)
       }

       for (const char of t) {
        if (!freq.has(char) || freq.get(char) === 0) {
            return false;
        }
        
        freq.set(char, freq.get(char) - 1);

       }

       return true;
    }
}
