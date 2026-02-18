// import assert from 'assert';

function assert(invariant: boolean, message: string): void {
  if (invariant == false) {
    throw new Error(`assertion: ${message} failed`);
  }
}

/**
 * Function that checks if the given string is palindrome or not
 * @param str The string to check
 * @returns true if the string is palindrome, false otherwise
 */

function assertEqual(actual: number[], expected: number[], message: string) {
  if (actual.length === 0 && expected.length === 0)
    if (actual.length !== expected.length) {
      return false;
    }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      throw new Error(`assertion: ${message} failed`);
    }
  }
}
// const isPalindrome = (str: string): boolean => {
//   const chars = str.split('').reverse().join('');
//   if (chars === str) {
//     return true;
//   } else {
//     return false;
//   }
// };
const isPalindrome = (str: string): boolean => {
  //compare i character with that of n-1+1 th char in the string , untill we scan half of the string.
  //if any comparision fails we return false as it is not a palindrome,
  const length = str.length;
  for (let i = 0; i < length / 2; i++) {
    if (str[i] != str[length - i - 1]) {
      return false;
    }
  }
  return true;
};

let str = "";

str = "h";
assert(isPalindrome(str) == true, "A single char is a palindrome");
//this is the assert based testing it it remain silent if error cccur but will throw error when it finds
// console.log(str, isPalindrome(str));
str = "hi";
// console.log(str, isPalindrome(str));
assert(isPalindrome(str) == false, "It is not a palindrome");

str = "    ";
// console.log(str, isPalindrome(str));
assert(isPalindrome(str) == true, "It is a palindrome");

str = "abcd";
// console.log(str, isPalindrome(str));
assert(isPalindrome(str) == false, "It is not a palindrome");

str = "aaaaaaaaaaa";
// console.log(str, isPalindrome(str));
assert(isPalindrome(str) == true, "It is a palindrome");

str = "racecar";
// console.log(str, isPalindrome(str));
assert(isPalindrome(str) == true, "It is a palindrome");

str = "gadag";
// console.log(str, isPalindrome(str));
assert(isPalindrome(str) == true, "It is a palindrome");

str = "11211";
// console.log(str, isPalindrome(str));
assert(isPalindrome(str) == true, "It is a palindrome");

str = "madam";
// console.log(str, isPalindrome(str));
assert(isPalindrome(str) == true, "It is a palindrome");

// assert.equal(str, 'madam1', 'Pass');

/**
 * filters odd numbers in a given array of numbers
 *
 */
const filterOdd = (numbers: number[]): number[] => {
  return [];
};

let numbers1: number[] = [];

assertEqual(filterOdd(numbers1), [], "Filtering empty array");

numbers1 = [1, 2, 3, 4, 5];
