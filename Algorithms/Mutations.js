/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function mutation(arr) {
 var q=arr[1].toLowerCase();
  var b=q.split("");
  var r=arr[0].toLowerCase();
  var count=0;
  for(i=0;i<b.length;i++)
   {
 if(r.indexOf(b[i]) !==-1)
  count++;
}
  if(count==b.length)
    return true;
  
  else
 
  return false;
    
 
}

mutation(["Mary", "Army"]);
