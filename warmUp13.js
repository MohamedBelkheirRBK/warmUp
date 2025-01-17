/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
    */
function toNumerical(roman){
	var sum = 0;
	var romanNum = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	}
	roman = roman.split('');
	for(var i in roman){
		if(roman[i] === 'I'&&roman[i+1]!== 'I')
			sum--;
		else
		sum+=romanNum[roman[i]];
	}
	return sum;

}




/*
    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/
function toCamelCase(string){
	if(typeof string !== "string" || string ===  "")
		return "";
	string = string.split(/[-_]/g);
	var firstWord = string.splice(0, 1);
	for (var word in string){
		string[word] = string[word][0].toUpperCase() + string[word].slice(1);
	}
	firstWord.push(...string);
	return firstWord.join('');
}


/*
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

function filterList(array){
	return array.filter(function(n){
		return typeof n === "number";
	})
}

