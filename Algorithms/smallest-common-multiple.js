/* code by ramya  https://www.freecodecamp.com/ramyakatakam */


function smallestCommons(arr) {
  var range=[],counter=1,pass,found=0,i;
  arr.sort(function(a,b){return a-b;});
  
  for(i=Math.min(...arr);i<=Math.max(...arr);i++)
    range.push(i);
  function lcm(a,b)
  {
    return (Math.abs(a*b)/gcd(a,b));
  }
  function gcd(a,b)
  {var temp;
    while(b!=0)
      {
        temp=b;
        b=a%b;
        a=temp;
      }
   return a;
  }
  
  return range.reduce(function(a,b){return lcm(a,b);});

}


//smallestCommons([1,5]);
smallestCommons([1, 13]);