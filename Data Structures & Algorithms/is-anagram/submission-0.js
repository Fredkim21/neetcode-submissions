class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // first letter of s = last letter of t, if so, go to next
        // do this until full length
        // first check length, if not equal, return false
        if (s.length !== t.length) return false;

        const count = {};

        for (let i = 0; i < s.length; i++) {
            count[s[i]] = (count[s[i]] || 0) + 1;
            count[t[i]] = (count[t[i]] || 0) - 1;
        }
        
        for (const char in count) {
            if (count[char] !== 0) return false;
        }
        
        return true;

    }
}
