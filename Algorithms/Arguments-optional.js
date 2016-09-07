/* code by ramya  https://www.freecodecamp.com/ramyakatakam */


function addTogether(a) {
  var sum;
  
 
  
  if(arguments.length>1)
    {
      if(typeof arguments[0]!=='number'||typeof arguments[1]!=='number')
    {
      return undefined;
    }
      return arguments[0]+arguments[1];
    }
 
      else 
      {
        if(typeof a!=='number')
          return undefined;
        else
          {
        return function(b)
      {
          
        if(typeof b!=='number')
          return undefined;
        else
      return a+b;
      };
      }
      }
  
}

//addTogether(2,3);
addTogether(2, "3");