var player;
var aiplayer;



//array of players in positions
var imp = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];


var working = false;

function exitcheck(imp) {

    var fill = true;


    //check columns
    for (var i = 0; i <= 2; i++) {
        if (imp[i] !== 'e' && imp[i] == imp[i + 3] && imp[i + 3] == imp[i + 6]) {

            return imp[i] + "won";
        }
    }
    //check rows
    for (var i = 0; i <= 8; i = i + 3) {
        if (imp[i] !== 'e' && imp[i] == imp[i + 1] && imp[i + 1] == imp[i + 2]) {
            alert(imp[i] + "won");

            return imp[i] + "won";
        }

    }
    //check diagnols
    for (var i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
        if (imp[i] !== 'e' && imp[i] == imp[i + j] && imp[i + j] == imp[i + 2 * j]) {

            return imp[i] + "won";
        }
    }

    for (var i = 0; i <= 8; i++) {
        if (imp[i] == 'e')
            fill = false;
    }
    if (fill) {
        return "draw";
    }


    return null;


}

function resetGame() {
    imp = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];

    working = false;

    updateMove();
}


function updateMove() {
    for (i = 0; i < 9; i++) {

        $('#' + i).text(imp[i] == aiplayer ? aiplayer : imp[i] == player ? player : "");
    }


    var winner = exitcheck(imp);



    if (winner === aiplayer + 'won' || winner === player + 'won' || winner === 'draw') {
        $('#swinner').text(winner === aiplayer + 'won' ? "aiplayer won" : winner === player + 'won' ? 'you won' : winner === 'draw' ? 'Tie' : '');
        $('#myModal1').modal('show');

    }




}




function recurseMinimax(imp, ai) {
    //impNodes++;
    var winner = exitcheck(imp);
    if (winner != null) {
        if (winner === aiplayer + 'won')
        // AI wins
            return [1, imp];
        else if (winner === player + 'won')
        // opponent wins
            return [-1, imp];
        else if (winner === 'draw')
        // Tie
            return [0, imp];

    } else {
        // Next states
        var nextValue = null;
        var nextImp = null;

        for (var i = 0; i < 9; i++) {

            if (imp[i] === 'e') {
                if (ai === true)


                    imp[i] = aiplayer;
                else if (ai === false)
                    imp[i] = player;


                var value = recurseMinimax(imp, !ai)[0];
                if ((ai && (nextValue == null || value > nextValue)) || (!ai && (nextValue == null || value < nextValue))) {
                    nextImp = imp.map(function(ele) {
                        return ele;
                    });
                    nextValue = value;
                }
                imp[i] = 'e';

            }


        }

        return [nextValue, nextImp];
    }
}

function makeMove() {
    imp = minmaxMove(imp);


    working = false;
    updateMove();

}

function minmaxMove(imp) {

    return recurseMinimax(imp, true)[1];
}




$(document).ready(function() {


    $('.square').click(function() {

        var a = $(this).attr('name');



        if (!working) {

            imp[a] = player;
            working = true;
            updateMove();
            makeMove();

        }

    });

});

$(window).load(function() {
    $('#myModal').modal('show');
    $('.player').click(function() {
        player = $(this).val();

        aiplayer = (player == 'X') ? 'O' : 'X';


    });

});


$('#reset').click(function() {
    imp = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];

    working = false;

    updateMove();
});