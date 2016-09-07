/* code by ramya  https://www.freecodecamp.com/ramyakatakam */


function dropElements(arr, func) {
  // Drop them elements.
  len = arr.length;
  for(i = 0; i<len; i++)
  {
    if(func(arr[0])){
      return arr;
    }
    else{
      arr.shift();
    }
  }
 
 return []; 
  
}

dropElements([1,4,3], function(n) {return n < 3; });
