/* Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
  let subStr = '';
  let result = '';
  for (let i = 0; i < s.length; i++) {
    subStr += s[i];
    if (subStr[subStr.length - 1] === s[i + 1]) {
      subStr = s[i + 1];
    }
    if (result.length < subStr.length) {
      result = subStr;
    }
  }
};
