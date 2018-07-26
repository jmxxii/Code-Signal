/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
  var res = [];
  for (var i = 0; i < inputArray.length; i++){
    var sumArr = inputArray[i] * inputArray[i - 1];
    res.push(sumArr);
  }
  var result = res.slice(1);
  return Math.max(...result);
}




