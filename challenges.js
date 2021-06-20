// set of answers to various different coding challanges

// find the derivitive of the function f(x)=m^b for some integral values of m and b
function derivitive(b, m){
    return b * m ** (b - 1);
}

// Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
	return arr[0];
}

// Create a function that takes two numbers as arguments and return their sum.
function addition(a, b) {
	return a + b
}

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
  
/* Create a function that takes a number as an argument.
Add up all the numbers from 1 to the number you passed to the function. */
  function addUp(num) {
    return (num * (num + 1))/2;
}

// Take string of uppercase and lowercase chars and return string with only the lowercase chars
function detectWord(str) {
	var word
	for(i=0;i<=str.length;i++){
		if (str.charAt(i).toLowerCase() == str.charAt(i)){
			word += str.charAt(i)
		}
	}
	return word.slice(9);
}

//compares sum of even and odd digits in a string and outputs which is greater
function evenOrOdd(str){
    var even = 0
    var odd = 0
    for(i=0; i<str.length; i++){
        if(parseInt(str.charAt(i)) % 2 == 0){
            even += parseInt(str.charAt(i));
        }
        else{
            odd += parseInt(str.charAt(i));
        }
    }
    if(odd < even){
        return "Even is greater than Odd";
    }
    else if(odd > even){
        return "Odd is greater than Even"
    }
    else{
        return "Even and Odd are the same"
    }
}

//splits 1st array in half and inserts array 2 in batween
function tuckIn(arr1, arr2) {
	for(i = 0; i <= arr1.length / 2 -1; i++){
        arr2.unshift(arr1[i]);
    }
    for(x = arr1.length/2; x< arr1.length; x++){
        arr2.push(arr1[x]);
    }
    return arr2;
}
