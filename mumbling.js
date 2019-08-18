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
    let letters = word.split('')
    // Split word into an array to iterate over
    
    letters.forEach((char, index) =>
    console.log(`${index}:${char}`
    ))
}