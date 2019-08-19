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

function transformName(name) {
    nameArr = name.toUpperCase().split(":")
    return [nameArr[0], nameArr[1]] = [nameArr[1], nameArr[0]].join(", ")
}
  
function sortInvites(list) {
    const names = list.split(";")
  
    const newNames = []

    for (let ele of names) {
    newNames.push(`(${transformName(ele)})`)
    }

    return newNames.sort().join("")
}