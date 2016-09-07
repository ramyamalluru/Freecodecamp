/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function destroyer(arr) {
    // Remove all the values
    var l = [];
    for (i = 1; i < arguments.length; i++)
        l.push(arguments[i]);
    var f;


    //console.log(l);
    var a = arguments[0];

    var b = a.filter(function(val) {

        return l.indexOf(val) === -1;

    });

    return b;



}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3,4);
destroyer([3, 5, 1, 2, 2], 2, 3, 5, 6);