/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function findLongestWord(str) {
  var arr=str.split(" ");
  var l=arr[0].length;
  for(i=0;i<arr.length;i++)
    {
  
  if(arr[i].length>l)
    l=arr[i].length;
    }
  return l;
    
}

findLongestWord("The quick brown fox jumped over the lazy dog");
