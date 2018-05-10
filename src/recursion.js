// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(num){
    if(num < 0){
        return null
    }
  if(num === 0){
    return 1
  }
  return num * factorial(--num)

};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(arr, a = 0) {
    if(arr.length < 1){
        return 0;
    }
    	if (a === arr.length-1){
    return arr[a]
  }
	return sum(arr, a+1) + arr[a];
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
    if(n < 0){
        return isEven(-n)
    }
    if(n === 0){
        return true
    }
    else if(n === 1){
        return false
    }
    return isEven(n - 2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if(n < 0){
        return n + 1 + sumBelow(n + 1)
    }
    if(n === 0){
        return n
    }
    return n - 1 + sumBelow(n - 1)
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(start_num, end_num) {
    if(start_num === end_num || start_num + 1 === end_num || start_num - 1 === end_num){
        return []
    }
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
    if(end_num < start_num){
        let list = range(start_num - 1, end_num)
        list.unshift(start_num - 1)
        return list;
    }
  else {
    let list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp){
    if(exp < 0){
        return exponent(base, ++exp) / base
    }
  if(exp === 0){
    return 1
  }
  return base * exponent(base, --exp)
}

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 1) {
            return true;
        } else if (n % 2 != 0 || n === 0) {
            return false;
        } else {
            return powerOfTwo(n / 2);
        }

};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if (string === "") {
        return "";
    } else {
        return reverse(string.substr(1)) + string.charAt(0);
    }
    
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    let str = string.replace(/\s/g, '').toLowerCase()
    var strLen = str.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    
    if (str[0] === str[strLen - 1]) {
        return palindrome( str.slice(1, strLen - 1) );
    }
    
    return false;
};


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if (x == 0 || y == 0) {
        return 0;
}

else if( y < 0 ) {
    return - x + multiply(x, y + 1);
}

else {
    return x + multiply(x, y - 1);
}
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
//if the char matches and there are no more after it its true, if there are more, call it again at the next index, return false if no matches
var compareStr = function(str1, str2, i = 0) {
 if(str1[i] === str2[i] && i === str1.length && i === str2.length){
     return true
 }
 else if(str1[i] === str2[i] && i < str1.length && i < str2.length){
     return compareStr(str1, str2, ++i)
 }
return false
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, i = 0, result = []){
    if(i === str.length){
        return result
    }
    result.push(str[i])
    return createArray(str, ++i, result)
};

// 17. Reverse the order of an array
var reverseArr = function (array, i = 0) {
    if(i === array.length){
        return array;
    }
    array.splice(i, 0, array.pop())
    return reverseArr(array, ++i)
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, i = 0, arr = []) {
    if(i === length){
        return arr;
    }
    arr.push(value)
    return buildList(value, length, ++i, arr)
    
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, i = 0, count = 0) {
    if(i === array.length){
        return count;
    }
    if(array[i] === value){
        count++
    }
    return countOccurrence(array, value, ++i, count)
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, i = 0, results = []) {
    if(i === array.length){
        return results;
    }
    results.push(callback(array[i], i, array));
    return rMap(array, callback, ++i, results)
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, i = 0) {
    if(n < 0){
        return null;
    }
    if (n == 1 || n == 2) return 1;

    return nthFibo(n - 1, ++i) + nthFibo(n - 2)
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, i = 0, results = []) {
    if(i === input.length){
        return results;
    }
    results.push(input[i].toUpperCase());
    return capitalizeWords(input, ++i, results)
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, i = 0, results = []) {
  if(i === array.length){
        return results;
    }
    results.push(array[i][0].toUpperCase() + array[i].slice(1));
    return capitalizeFirst(array, ++i, results)
};


// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}, i = 0) {
    if(i === str.length){
        return obj;
    }
    if(!obj[str[i]]){
        obj[str[i]] = 1
    }
    else{
        obj[str[i]] += 1
    }
    return letterTally(str, obj, ++i)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, i = 0, result = []) {
    if(i === list.length){
        return result;
    }
    if(list[i] !== list[i - 1]){
        result.push(list[i])
    }
    return compress(list, ++i, result)
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, i = 0, result = []) {
    if(i === array.length){
        return result;
    }
    if(array[i] !== array[i - 1]){
        result.push(array[i])
    }
    return minimizeZeroes(array, ++i, result)
    
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, i = 0, result = []) {
    if(i === array.length){
        return result;
    }
    if(i % 2 === 0){
        if(array[i] < 0){
            result.push(-array[i])
        }
        else{
            result.push(array[i])
        }
    }
    if(i % 2 === 1){
        if(array[i] < 0){
            result.push(array[i]);
        }
        else{
            result.push(-array[i])
        }
    }
    return alternateSign(array, ++i, result)
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
