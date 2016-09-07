/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function factorialize(num) {
  var fact=1;
  while(num>0)
    {
  fact=fact*num;
      num--;
}
  return fact;
    
}

factorialize(5);
