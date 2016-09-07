/* code by ramya  https://www.freecodecamp.com/ramyakatakam */




$('#btn1').click(function(){
  var quotes=[ "You can do anything, but not everything.","Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.","The richest man is not he who has the most, but he who needs the least."];
  var quotea=["—David Allen","—Antoine de Saint-Exupéry","—Unknown Author"];
  var r=Math.floor(Math.random()*quotes.length);
  $("#quote").text(quotes[r]);
  console.log(quotes[r]);
  $("#author").text(quotea[r]);


}) ;
  