/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

const reverseString = (str) => {
    // let reversedString = "";
    // for(let i= str.length-1;i>=0;i--){
    //     reversedString = reversedString.concat(str[i]);
    // }
    // return reversedString;

    // strArray= str.split("");
    // strArray.reverse();
    // return strArray.join("");

    return strArray= str.split("").reduce((accumulator,current)=> current + accumulator);

};

module.exports = reverseString;
