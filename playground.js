const reverseInteger = (int) => {
    reverseIntString = int.toString().split("").reverse().join("");
    if(int < 0){
        reverseIntString = "-" + reverseIntString;
    }
    return parseInt(reverseIntString);
};

console.log(reverseInteger(-120));