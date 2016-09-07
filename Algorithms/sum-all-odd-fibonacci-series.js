/* code by ramya  https://www.freecodecamp.com/ramyakatakam */


function sumFibs(num) {
  var f1=1,f2=1,f3=1;
  var result=[1,1];
  var odd=[];
  var sum=0;
 
  while(f3<=num)
  { 
  
    result.push(f3);
    f3=f1+f2;
     f1=f2;
    f2=f3;
    console.log(f3);
    }
  for(i=1;i<result.length;i++)
    {
      if((result[i]%2)!=0)
       sum=sum+result[i];
    }
  
  return sum;
}

sumFibs(1000);
