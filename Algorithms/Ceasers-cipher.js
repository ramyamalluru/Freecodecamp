/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function rot13(str) { 
  
 var b=[];
  for(i=0;i<str.length;i++)
    {
      
    if((str.charCodeAt(i)>=78)&&(str.charCodeAt(i)<=90))
  
 b.push(String.fromCharCode(str.charCodeAt(i) -13));
      else if((str.charCodeAt(i)>=32)&&(str.charCodeAt(i)<=64))
        b.push(String.fromCharCode(str.charCodeAt(i)));
      else
        b.push(String.fromCharCode(str.charCodeAt(i) +13));
    }
  return b.join("");
  
}


rot13("SERR PBQR PNZC");
