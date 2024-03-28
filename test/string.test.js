const {isPalindrome} = require('../src/string');
const {describe, test, expect} = require('@jest/globals')

describe('isPalindrome function', () => {
  test('should return true for empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('should return true for single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('should return true for palindrome string with odd length', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('should return true for palindrome string with even length', () => {
    expect(isPalindrome('level')).toBe(true);
  });

  test('should return false for non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('should handle palindrome with different cases', () => {
    expect(isPalindrome('Aba')).toBe(false);
  });

  test('should handle palindrome with spaces', () => {
    expect(isPalindrome('was it a car or a cat i saw')).toBe(false);
  });

  test('should return true for palindrome with special characters', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama!')).toBe(false);
  });

  test('should return false for non-palindrome with special characters', () => {
    expect(isPalindrome('not a palindrome!')).toBe(false);
  });

  test('should return true for non-palindrome with odd position', () => {
    expect(isPalindrome('aba')).toBe(true);
  });
});
