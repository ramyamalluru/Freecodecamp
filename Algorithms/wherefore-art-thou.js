/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function whatIsInAName(collection, source) {  
  var arr = [];
  var key = Object.keys(source);

  arr=collection.filter(function(obj){
    return key.every(function(key){
    
      return obj[key] === source[key];
    }
    );});
    
  
  return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", //last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });