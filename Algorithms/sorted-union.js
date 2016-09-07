/* code by ramya  https://www.freecodecamp.com/ramyakatakam */


function uniteUnique(arr) {
  var a=[];
  for(i=0;i<arguments.length;i++)
    {
      a.push(arguments[i]);
    }
  var c=[];
  var b=a.reduce(function(prev,cur){ return prev.concat(cur);});
  b.filter(function(val){if(c.indexOf(val)==-1)
    return c.push(val);});
  return c;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
