/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



  function pairElement(str) {
  var a=str.split('');
  var p=[];
 for(i=0;i<a.length;i=i+2)
   {
     if(a[i]=='G')
      a.splice(i+1,0,'C');
     if(a[i]=='C')
      a.splice(i+1,0,'G');
     if(a[i]=='A')
      a.splice(i+1,0,'T');
     if(a[i]=='T')
      a.splice(i+1,0,'A');
     
   }
  for(j=0;j<a.length;j=j+2)
    {
      p.push(a.slice(j,j+2));
    }
   
 
  return p;
}

pairElement("GCG");