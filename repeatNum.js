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

