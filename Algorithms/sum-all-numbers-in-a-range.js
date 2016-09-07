/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function sumAll(arr) {
  var a=arr.sort(function(a,b){return a-b;});
 var b=[];
  var min=a[0];
  var max=a[1];
  for(i=min;i<=max;i++)
    {
var c=i;      b.push(i);
    }
 var sum=b.reduce(function(a,b){return a+b;});
  return sum;
  
}

sumAll([1, 4]);
