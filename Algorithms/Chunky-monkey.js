/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function chunkArrayInGroups(arr, size) {
  
  var ar=[];
  var a=[];
  for(i=0;i<arr.length;i=i+size)
    
 a.push(arr.slice(i,i+size));
    
  return a;
    
      
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
