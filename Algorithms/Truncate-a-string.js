/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function truncateString(str, num) {
  
   if(num<3)
     return str.substr(0,num)+"...";
  else if(num<str.length)
  return str.substr(0,num-3)+"...";
  
   else
    return str.substr(0);
 
}

//truncateString("A-tisket a-tasket A green and yellow basket","A-tisket a-tasket A green and yellow basket".length );
truncateString("A-", 1);