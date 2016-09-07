/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function repeatStringNumTimes(str, num) {
  
  if(num>0)
  return str.repeat(num);
  else
    return "";
}

repeatStringNumTimes("abc", 3);
