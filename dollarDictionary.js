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
      // Check if the string or object is empty and if so return an empty string.
    else {

      const wordsArr = string.split(' ')
      // split sentence into an array of words

      const regex = /^\$\w+\$/;
      // Use regex to select parts of the string which we will need to change.
      // Regex for strings excludes backlash as it is a special character in a string 
      // because it's the escaping character; thus console.log('\\') would result in \.
      // So regex does not need to match backlashes.
      // ^\$ specifies that string must start with the character $ literally , \w+ 
      // matches any word character an unlimited number of times, and final \$ matches
      // the character $ literally.

      let newString = ""

      for (var i = 0; i < wordsArr.length; i++) { 
        if (newString == "" && wordsArr[i].match(regex)) {
        newString = string.replace(wordsArr[i], "hey");
        }
        if (newString != "" && wordsArr[i].match(regex)) {
        newString = newString.replace(wordsArr[i], "hey");
        }
      }
      // Iterate through array of words- if the array element matches the regex replace
      // with "hey" and assign the new string to the newString variable.
      // There are two conditions to make sure that multiple words can be replaced.
      // Otherwise, newString would get overwritten each time the loop went through. 
      return newString
      // Finally return the newString with replaced words.
  }
}

