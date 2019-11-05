// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .


// solved this by first cutting the string into an array manually, identifying word endings by the empty space
// and using an index counter outside of the loop to keep track

//afterwards join the array back manually by looping through it, in reverse, and adding the element + " "
//we stop before reaching the first element, so that we can add it in the end without an empty space
function reverseString(string){
	var word = '';
	var result = [];
	var index = 0;
	for(var i = 0; i < string.length; i++){
		if(string[i]===' '){
			result[index]=word;
			word = '';
			index++;
		}else
		word+= string[i]
		if(i === string.length-1)
		result[index]=word
	}

	var reversedString = ''
	for(var i = result.length-1; i>0; i--){
		reversedString += result[i] + " ";
	}
	return reversedString+result[0]
}