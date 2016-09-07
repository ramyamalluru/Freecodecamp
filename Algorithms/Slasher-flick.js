/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function slasher(arr, howMany) {
  
  var a=[];
 a =arr.slice(howMany,arr.length);
  return a;
}

slasher([1, 2, 3], 2);
