/* code by ramya  https://www.freecodecamp.com/ramyakatakam */


function spinalCase(str) {
  
  
  var p=str.replace(/([a-z])([A-Z])/g,'$1 $2');

  var s=p.replace(/\s/g,'-').replace(/_/g,'-');
  
  var l=s.toLowerCase();
  return l;
}

spinalCase('ThisIsSpinalTap');
//spinalCase("Teletubbies say Ehe");