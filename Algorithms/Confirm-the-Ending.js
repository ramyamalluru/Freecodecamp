/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function confirmEnding(str, target) {
  
  var str1=str.substr(str.length-target.length);
  if(str1==target)
  return true;
  else
    return false;
}

confirmEnding("Bastian", "n");
