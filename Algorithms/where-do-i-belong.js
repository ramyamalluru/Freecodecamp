/* code by ramya  https://www.freecodecamp.com/ramyakatakam */



function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var l = arr.sort(function(cur, pre) {
        return cur - pre;
    });
    for (i = 0; i < l.length; i++) {
        if (num == l[i])
            return i;
        else if (num < l[i])
            return i;



    }

    return i;
}

//getIndexToIns
//([10, 20, 30, 40, 50], 30); 
//getIndexToIns([5, 3, 20, 3], 5);
getIndexToIns([2, 5, 10], 15);