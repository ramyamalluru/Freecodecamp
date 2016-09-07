/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



  function translatePigLatin(str) {
  var vowels=['a','e','i','o','u'];
  var a=[];
  for(var i in vowels)
    {
  var index=str.indexOf(vowels[i]);
      a.push(index);
}

var p=a.filter(function(val){ return val>=0;});
var pos= Math.min.apply(Math,p);
  var str1=str.slice(0,pos);
var str2=str.slice(pos);
  if(pos>0)
    {

var final=str2.concat(str1+'ay');
    }
  else
    {
    var final=str2.concat(str1+'way');
    }
  
  return final;
}

//translatePigLatin("consonant");
//translatePigLatin("california");
translatePigLatin("algorithm");