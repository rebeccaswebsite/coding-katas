/* 
Task

John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that makes this string uppercase gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result
between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
*/

// Create helper function to change format of each individual name
function transformName(name) {
    nameArr = name.toUpperCase().split(":")
    // Split each name into an array of first and second names, removing the ":" character on split & making all letters
    // upper case
    return [nameArr[0], nameArr[1]] = [nameArr[1], nameArr[0]].join(", ")
    // Use destructuring to swap the first and second name arround in the array, join back into a string with a comma and
    // space separating each element. Return this transformed string. 
}
  
function sortInvites(list) {
    const names = list.split(";")
    // Split the list of names into an array, to iterate through
    const newNames = []
    // Initiate empy array for the transformed names to be added to
    for (let ele of names) {
        newNames.push(`(${transformName(ele)})`)
        // Iterate through names array and for each name, run the transformName function on it. Surround this string with 
        // brackets using interpolation and add this complete name to the newNames array.
    }

    return newNames.sort().join("")
    // Use array sort method to sort newNames array alphabetically and then join this array into a string. Return this string.
}