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

    const transformedArr = []

    letters.forEach((char, index) => {
      let upperChar = char.toUpperCase();
      let extraChars = char.toLowerCase().repeat(index);
      transformedArr.push(upperChar+extraChars)   
    })

    return transformedArr.join('-')
}