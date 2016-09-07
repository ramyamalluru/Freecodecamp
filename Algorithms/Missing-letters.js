/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



  function fearNotLetter(str) {
  var alphabets="abcdefgheijklmnopqrstuvwxyz";
  var index=str.charCodeAt(0);
  var s="";
  for(i=index;i<index+str.length;i++)
     s+=String.fromCharCode(i);
  if(s==str)
    
  return undefined;
  else
    {
    for(j=0;j<alphabets.length;j++)
      {
      if(str.indexOf(alphabets[j]) == -1) 
      return alphabets[j];
      }
}
}
  


fearNotLetter("abce");
