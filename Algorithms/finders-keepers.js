/* code by ramya  https://www.freecodecamp.com/ramyakatakam */


function findElement(arr, func) {
  var a=arr.filter(func);
  return a[0];
}

//findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) ;