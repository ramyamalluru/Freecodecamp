/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function reverseString(str) {
  var arr=str.split("");
  arr.reverse();
  var str1=arr.join("");
  return str1;
  
}

reverseString("hello");
