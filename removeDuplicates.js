/* 
Task

Your task is to remove all duplicate words from a string, leaving only single (first) 
words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

*/

function removeDuplicates(str) {
    const words = str.split(" ")
    // Split string to be iterated over
    const newWords = []
    // Create empty array for single words to be added to

    words.forEach(function(word){
        if (!newWords.includes(word)) {
        // Iterate through words and check to see if the word has already been recorded
        // in the newWords array
        // This ensures each word is only added to the array once
          newWords.push(word)
        // If it's not in the newWords array already, then the word is added
        }
    });
  
    return newWords.join(", ")
    // Return the array of the single words, joined with a comma and space as a string
}