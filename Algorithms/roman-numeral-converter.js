/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function convertToRoman(num) {
  var result='',
  roman=['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
  decimals=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for(i=0;i<decimals.length;i++)
    {
      while(num>=decimals[i])
        {
        result+=roman[i];
        num-=decimals[i];
        }
      
    }
 return result;
}

convertToRoman(36);