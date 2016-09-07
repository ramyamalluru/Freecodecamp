/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function myReplace(str, before, after) {
   var index=str.indexOf(before);
  
  var s=str.charAt(index);
  if(s==s.toUpperCase())
    {
    var after1=after.charAt(0).toUpperCase(); 
   var after2=after.slice(1);
  var after3=after1.concat(after2);
 var str1=str.replace(before,after3);
 return str1;
    }
  else
  var str1=str.replace(before,after); 
  return str1;
}

//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("Let us go to the store", "store", "mall");