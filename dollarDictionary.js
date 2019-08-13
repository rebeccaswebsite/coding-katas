/*
Task 

Create a method that takes a string and an object (dictionary), and replaces every key 
in the dictionary pre and suffixed with a dollar sign, with the corresponding value from
the Dictionary.

Tests

input : “”, dict empty
output:“”

input : “\$temp\$“, dict [“temp”, “temporary”]
output: “temporary”

input : “\$temp\$ here comes the name \$name\$“dict [“temp”, “temporary”] [“name”, 
“John Doe”]
output : “temporary here comes the name John Doe”
*/

function dictionaryReplacer(string, object) {
    if (string == "" || object == {} ) {
        return ""
    }
    else {
    const wordArray = string.split("\$")
    // split(). splits a string into an array of strings using a specified separator string
    const newWord = wordArray[1]
    return `${object[newWord]}`
    }
}