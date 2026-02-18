import assert from 'assert';
/**
 * Function that checks if the given string is palindrome or not
 * @param str The string to check
 * @returns true if the string is palindrome, false otherwise
 */
const isPalindrome = (str: string): boolean => {
  const chars = str.split('').reverse().join('');
  if (chars === str) {
    return true;
  } else {
    return false;
  }
};

let str = '';
console.log(str, isPalindrome(str));
str = 'h';
console.log(str, isPalindrome(str));
str = 'hi';
console.log(str, isPalindrome(str));
str = '    ';
console.log(str, isPalindrome(str));
str = 'abcd';
console.log(str, isPalindrome(str));
str = 'aaaaaaaaaaa';
console.log(str, isPalindrome(str));
str = 'racecar';
console.log(str, isPalindrome(str));
str = 'gadag';
console.log(str, isPalindrome(str));
str = '11211';
console.log(str, isPalindrome(str));
str = 'madam';
console.log(str, isPalindrome(str));

assert.equal(str, 'madam1', 'Pass');
