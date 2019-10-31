/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 // function mysteryRange(str, rng){
 // 	str = str.split('');
 // 	var arr = [];
 // 	for(var i in str){
 // 		if(str[i]==='1'){
 // 			arr.push(str.splice(i, 2))
 // 		}else{
 // 			arr.push(str.splice(i, 1))
 // 		}
 // 	}
 // 	return arr;
 // } 	


 //  function mysteryRange(str, rng){
 // 	str = str.split('');
 // 	var arr = [];
 // 	while( str.length > 0){
 // 		if(str[0]==='1'){
 // 		    console.log(str, 'before if 1')
 // 			arr.push(Number(str.splice(0, 2).join('')))
 // 			console.log(str, 'after if 1')
 // 		}else{
 // 		    console.log(str, 'before if not')
 // 			arr.push(Number(str.splice(0, 1)))
 // 			console.log(str, 'after if not')
 // 		}
 // 	}
 // 	return arr;
 // } 	

//this was a hard one to crack
//my idea was basicaly this:
//split the string into an array
//while that array is bigger than the array we want
//we start concating the smallest numbers, starting from 1s to 2s to 3s, etc
//using splice, we can remove the two numbers we are concating, and then put the value of both of them into the spot we removed them from
//afterwords, we use map to turn all the strings into numbers
//finally, we sort the number by acending order, and we splice the innards of the array, leaving the first, smallest number, and the last, largest one
 function mysteryRange(str, rng){

 	var arr = str.split('');
    
 	for(var inc = 1; inc < 100; inc++){
 		if (arr.length <= rng)
 			break;
 			for(var i in arr){
 				 if (arr.length <= rng)
 					break;
 				if(Number(arr[i])===inc){

 					arr.splice(i, 2, (arr[Number(i)]+arr[Number(i)+1]))
 				}
 			}
 		
 	}
    arr = arr.map(function(n){
        return Number(n);
    })
    arr.sort(function(a,b){
        return a-b;
    })
    arr.splice(1, arr.length-2)
 	return arr;
 } 		




