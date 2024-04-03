//! Regular expression pattern to match any lowercase vowel (a, e, i, o, u)
let pattern = /[aeiou]/;
let pattern2 = /[aeiou]/i; //* case in-sensitive 

//! Example string
let testString = 'hello';

//! Iterate through each character in the string
for (let i = 0; i < testString.length; i++) {
    // Check if the current character matches the pattern
    if (pattern.test(testString[i])) {        //TODO important part
        console.log(`${testString[i]} is a lowercase vowel`);
    } else {
        console.log(`${testString[i]} is not a lowercase vowel`);
    }
}