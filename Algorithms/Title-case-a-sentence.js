/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function titleCase(str) {
  var str1=str.toLowerCase();
  var arr=str1.split(" ");
  
 for(i=0;i<arr.length;i++)
   {
     arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
   }
 var str2=arr.join(" ");
  return str2;
}

titleCase("I'm a little tea pot");
