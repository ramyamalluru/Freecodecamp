/* code by ramya  https://www.freecodecamp.com/ramyakatakam */


function convertHTML(str) {
  
  var r=str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;')
  
  ;
  
  return r;
}

//convertHTML("Dolce & Gabbana");
convertHTML("Sixty > twelve");