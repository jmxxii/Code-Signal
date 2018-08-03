/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/



function allLongestStrings(arr) {
  var arrLen = [];
  for (var i = 0;i<arr.length;i++){
    arrLen.push(arr[i].length);
    }
  var maxNum = Math.max(...arrLen);
  var result = arr.filter(el => {
    if(el.length === maxNum){
      return el;
    }
  })
  return result;
}