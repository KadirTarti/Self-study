let areAnagrams = function (str1, str2) {
    let cleanStr1 = str1.replace(/\s/g, '');
    let cleanStr2 = str2.replace(/\s/g, '');


    let sorted1 = cleanStr1.toLowerCase().split('').sort().join()
    let sorted2 = cleanStr2.toLowerCase().split('').sort().join()
    return sorted1 == sorted2;
}

console.log(areAnagrams("listen", "silent")); // Should print true
console.log(areAnagrams("triangle", "integral")); // Should print true
console.log(areAnagrams("debit card", "bad credit")); // Should print true

console.log(areAnagrams("Dormitory", "dirty room")); // Should print true
console.log(areAnagrams("The Morse Code", "Here come dots")); // Should print true
console.log(areAnagrams("Astronomer", "Moon starer")); // Should print true

console.log(areAnagrams("hello", "world")); // Should print false
console.log(areAnagrams("apple", "banana")); // Should print false
console.log(areAnagrams("hello", "holla")); // Should print false
console.log(areAnagrams("race", "racing")); // Should print false

