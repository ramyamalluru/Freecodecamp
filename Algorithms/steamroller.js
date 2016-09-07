/* code by ramya  https://www.freecodecamp.com/ramyakatakam */


function steamrollArray(arr) {
  
  var b=[];
  for(var i=0;i<arr.length;i++)
    {
   if(Array.isArray(arr[i]))
      b= b.concat(steamrollArray(arr[i]));
    
    else
      b.push(arr[i]);
  
    }
   
   return b;
}

steamrollArray([1, [2], [3, [[4]]]]);
