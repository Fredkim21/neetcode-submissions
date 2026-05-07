class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // lowercase + remove spaces + remove all non-alphanumerics
        // two for loops, where you have first and last move to the middle and check if they are they same
        let word = s.toLowerCase().replace(/[^a-z0-9]/g, '');

        let left = 0;
        let right = word.length -1;

        while (left < right) {
            if (word[left] !== word[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
