
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let left=0;
   let maxLen = 0;
   let set = new Set();
   for(let right = 0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right-left+1)
   }
   return maxLen;
};

lengthOfLongestSubstring("cadbzabcd")