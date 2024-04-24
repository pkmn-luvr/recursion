/**
 * RECURSION - A function that executes itself inside it's own function body
 * 
 * Loops vs. Recursion:
 * - Loops iterate through operations using constructs like 'for' or 'while'
 * - Recursion handles repetition through self-calls, simplifying code that manages complex structures
 * 
 * Loops/Recursion are interchangeable
 * 
 * Choosing between a Loop or Recursion is dependent on the data type...
 * 
 *  - Loops are good for simple iterations over arrays or numbers where the 
 *    structure of the iteration is linear
 * 
 *  - Recursion is good for traversing through complex data setructures,
 *    as it simplifies the code significantly because it naturally follows
 *    the hierarchical structure of the data type
 *    
 * 
 * The choice between loops and recursion depends on the requirements of the task
 * 
 */


/** product: calculate the product of an array of numbers. */
function product(nums) {
  return nums.reduce((acc, num) => acc * num, 1);
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  return words.reduce((max, word) => Math.max(max, word.length), 0);
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 2) {
    result += str[i];
  }
  return result;
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  let cleaned = str.replace(/\W/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val) {
  return arr.indexOf(val);
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  return str.split('').reverse().join('');
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') strings.push(obj[key]);
    else if (typeof obj[key] === 'object') strings.push(...gatherStrings(obj[key]));
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] < val) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
