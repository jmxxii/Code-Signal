/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
*/

function isLucky(n) {
    
    n = n.toString().split('');
    var firstHalf = [];
    var secondHalf = [];
        var lenArr = n.length / 2;
    for(var i = 0;i<lenArr;i++){
        firstHalf.push(Number(n[i]))
    }
    for(var i = lenArr;i<n.length;i++){
        secondHalf.push(Number(n[i]))
    }
    var firstSum = firstHalf.reduce((sum, el) => { return sum += Number(el) })
    var secondSum = secondHalf.reduce((sum, el) => { return sum += Number(el) })
    return firstSum === secondSum ? true : false;
}
