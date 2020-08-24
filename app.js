//question No 1  Write a function called replaceWith that takes in a string, a character to replace and   
//a character to replace it with and returns the string with the replacements.Write tests 
//to make sure this is case sensitive

const replaceWith = function(string, cha1, cha2) {
 	let replaced = ''
 	for (let i = 0; i < string.length; i++){
 	    if (string[i] === cha1){
		  replaced += cha2
		  continue
	    }
	    replaced += string[i]
	}
	return replaced
 };
//  replaceWith('tahiru','t','y')// yahiru

//question No 2 Write a function called expand which takes an array and a number and returns a copy of the
//array with as many numbers as specified

 const expand = function(arr,val) {
	 let newArr = []
	 for (let i = 0; i < val; i++){
		  for (let j = 0; j < arr.length; j++){
	 newArr.push(arr[j])
	  }
   }
	 return newArr
 }
 
//  expand([1,2,3],3)//[,1,2,3,1,2,3,1,2,3]
//  expand(["foo", "test"],1)//['foo','test']

//question No 3 Write a function called acceptNumbersOnly which takes in any number of arguments 
//and returns true if all of them are numbers.Watch out for NaN - it is a typeof "number"!

 function acceptNumbersOnly() {
	var i = 0,
    len = arguments.length;
for (; i < len; i += 1) {
	    if (typeof(arguments[i]) !== 'number' || Number.isNaN(arguments[i])) {
		   return false
	    }
 }	return true
 }
//  acceptNumbersOnly( 2, 3, 4, NaN)

//question No 4 Write a function called mergeArrays which takes in two arrays and returns one array with 
//the values sorted

const mergeArrays =function (arr1, arr2){
    let newArr = arr1.concat(arr2)
    return newArr.sort()
}
mergeArrays([2,1],[3,4])

// question no 5 Write a function called mergeObjects which takes in two objects and return an object with
//the keys and values combined.If the second parameter has the same key - it should override first one.
//There is a built in function called Object.assign - research it, but do not use it, try to do this on 
//your own!
const mergeObjects = function (obj1,obj2) {
	let obj3 = {
	    ...obj1,
	    ...obj2
	}
	return obj3
 }
 console.log(mergeObjects({name:'Foo',num:33},{test:'thing',num:55})) 
