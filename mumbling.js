/* 
Task

This time no story, no theory. 
The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

From https://www.codewars.com
*/

const accum = word => {
    const letters = word.split('')
    // Split word into array of characters

    const transformedArr = []
    // Define empty array to push new values into

    letters.forEach((char, index) => {
      let upperChar = char.toUpperCase();
      let extraChars = char.toLowerCase().repeat(index);
      // Loop through letter in letters array and for each one save a variable where the
      // letter is uppercase and another variable for the extra lowercase characters (there
      // should be the same number of these as the index the letter is in the letters array)
      transformedArr.push(upperChar+extraChars)   
      // Add these new strings into the transformedArr as one element
    })

    return transformedArr.join('-')
    // Return the transformedArr, joined to be a new string, each element separated by a 
    // dash
}