function isPalindrome(word) {
  // Convert the word to lowercase and remove all non-alphanumeric characters
  word = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Loop through the characters in the word, comparing the first and last characters
  // and moving inward until the middle is reached
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/* 
  Add your pseudocode here
  - convert word to lowercase and remove all non-alphanumeric characters
  - loop through the characters in the word, comparing the first and last characters
    - if they are not the same, return false
  - if the loop completes without returning false, return true
*/

/*
  Add written explanation of your solution here
  The function first cleans the input word by converting it to lowercase and removing all non-alphanumeric characters. It then loops through the characters in the word, comparing the first and last characters and moving inward until the middle is reached. If any characters do not match, the function returns false. If the loop completes without returning false, the word is a palindrome and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("abba"));
  console.log("=>", isPalindrome("A man, a plan, a canal, Panama!"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("ab"));
  console.log("=>", isPalindrome("hello world"));
}

module.exports = isPalindrome;
