/* 
Task

Write a simple function (less than 160 characters) that returns a boolean indicating 
whether or not a string is a palindrome string. Palnidrom means the string will read 
the same from left to right or right to left. Example: level
*/

function palindrome(word) {
  if (
    word ===
    word
      .split("")
      .reverse()
      .join("")
  ) {
    return true
  } else {
    return false
  }
}
