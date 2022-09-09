const maxCharacter = (str) => {
    const charMap = new Map();
    let maxCharacter = "";
    let maxCount = 0;
    for(const char of str){
        const count = charMap.get(char);
        charMap.set(char, count+1 || 1);
        if(maxCount < charMap.get(char)){
            maxCharacter = char;
            maxCount = charMap.get(char);
        }
    }
    return maxCharacter;

};

console.log(maxCharacter("foo 111123"));
