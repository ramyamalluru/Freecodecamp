/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function palindrome(str) {
  
 
  var st3=str.toLowerCase();
 var str1=st3.replace(/[^a-z0-9]/gi,"");
 var str2=str1.split("").reverse().join("");
  
  if(str1==str2)
 return true;
  else
    return false;
}



palindrome("eye");