/* Task

You'll be given a two dimensional array (an array of arrays), each sub-array will only 
have two values. The first will be the value to repeat, the second will be the amount 
of times to repeat that value.Your function ​repeatNumbers​ should return a string with 
each of the given values repeated the appropriate number of times, each set of values 
separated by a comma. If there is only one set of values then you should omit the comma.

JS

var​ repeatNumbers = ​function​(data) { 
    // Put your solution here
};

console.​log​(​repeatNumbers​([[​1​, ​10​]])); 
console.​log​(​repeatNumbers​([[​1​, ​2​], [​2​, ​3​]])); 
console.​log​(​repeatNumbers​([[​10​, ​4​], [​34​, ​6​], [​92​, ​2​]]));

Expected Output
1111111111
11, 222
10101010, 343434343434, 9292
*/

const repeatNumbers = (data) => { 
    const numArray = []

    data.forEach(function(element) {
        for (var i = 0; i < element[1]; i++) {
            numArray.push(element[0])
        }
        numArray.push(", ")
    })
   return numArray.slice(0,-1).join('')
};

console.​log​(​repeatNumbers​([[​1​, ​10​]])); 
console.​log​(​repeatNumbers​([[​1​, ​2​], [​2​, ​3​]])); 
console.​log​(​repeatNumbers​([[​10​, ​4​], [​34​, ​6​], [​92​, ​2​]]));

