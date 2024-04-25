function longestSubstring(s) {
    let maxLength = 0;      
    let start = 0;
    const charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }

        charIndexMap[currentChar] = end;

        const currentLength = end - start + 1;

        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

module.exports = { longestSubstring };





