/* code by ramya  https://www.freecodecamp.com/ramyakatakam */


function sumPrimes(num) {
  var count=0,j=1,i,k;
  var a=[];
  for(i=2;i<=num;i++)
    {
      if(isPrime(i))
        count +=i;
    }
  function isPrime(i)
  {
    for(j=2;j<i;j++)
      {
        if(i%j===0)
          return false;
        
      }
    a.push(i);
    return true;
    
  }
      
       
       
 
  return count;
}

//sumPrimes(10);
sumPrimes(977);