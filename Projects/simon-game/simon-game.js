var raudio = $("audio")[0];
var gaudio = $("audio")[1];
var yaudio = $("audio")[2];
var baudio = $("audio")[3];
var beep = $("audio")[4];
var ai = [1, 2, 3, 4];
var sbutton = "off";
var player = [];
var aiplayer = [];
var count = 0;

var working = false;
var strict = "no";

function light(li)

{
    if (working === true && sbutton == 'on') {

        setTimeout(function() {
            li.removeClass('lit');
        }, 1000);
    }
}


//green division click function

$('#q1').click(function() {
    if (working === true && sbutton == 'on') {

        gaudio.play();
        var li = $(this).addClass('lit');

        player.push(1);

        light(li);

        check();

    }
});
//red division click function
$('#q2').click(function() {

    if (working === true && sbutton == 'on') {
        raudio.play();
        var li = $(this).addClass('lit');
        player.push(2);

        light(li);

        check();
    }

});
//yellow division click function
$('#q3').click(function() {
    if (working === true && sbutton == 'on') {
        yaudio.play();
        var li = $(this).addClass('lit');
        player.push(3);

        light(li);

        check();
    }

});
//blue division click function
$('#q4').click(function() {
    if (working === true && sbutton == 'on') {
        baudio.play();
        var li = $(this).addClass('lit');
        player.push(4);

        light(li);

        check();
    }

});



function computersTurn() {
    if (working === true && sbutton == 'on') {

        player = [];

        count++;
        if (count > 20) {
            $("#winner").text("YOU WON! Click start to Restart the game");

        } else {
            var random = Math.floor((Math.random() * 4) + 1);
            console.log('ran is' + random);
            console.log('ai is' + aiplayer[aiplayer.length - 1]);
            while (random === aiplayer[aiplayer.length - 1]) {
                random = Math.floor((Math.random() * 4) + 1);
            }

            aiplayer.push(random);

            setTimeout(aiplayerPlay, 2000);




        }
    }

}
//check the players button presses
function check() {
    if (working === true && sbutton == 'on') {


        
        for (i = 0; i < player.length; i++) {

            if (player[i] !== aiplayer[i]) {
                $("audio")[4].play();
                $(".input").text('!!');

                if (strict == "no") {



                    player = [];

                    setTimeout(aiplayerPlay, 4000);
                } else if (strict == "yes") {


                    setTimeout(restart, 4000);
                }


            }


        }
        if (player.length == aiplayer.length && player[i] == aiplayer[i]) {


            computersTurn();
        }

    }
}


//series of random numbers computers play
function aiplayerPlay() {
    if (working === true && sbutton == 'on') {

        $(".input").text(count);
        for (var k = 0; k < aiplayer.length; k++) {
            setTimeout(function(k) {
                return function() {
                    if (working === true && sbutton == 'on') {

                        var li = $('#q' + aiplayer[k]).addClass('lit');


                        $("audio")[aiplayer[k] - 1].play();
                        light(li);
                    }
                };
            }(k), 1000 * (k));
        }



    }


}



//on-off toggle
$('.switch').click(function() {
    if (sbutton == 'off') {
        $("#off").css("visibility", "hidden");
        $("#on").css("visibility", "visible");
        sbutton = 'on';
        $(".input").text("--");

    } else if (sbutton == 'on') {
        $("#off").css("visibility", "visible");
        $("#on").css("visibility", "hidden");
        sbutton = 'off';
        strict = 'no';
        aiplayer = [];
        player = [];

        $(".input").text("");
        $("#winner").text("");
        $('#strict').text("");

    }
});
//start click
$('.startbutton').click(function() {

    restart();

});


function restart() {
    $("#winner").text("");
    $(".input").text('--');
    working = true;
    count = 0;
    aiplayer = [];
    player = [];


    computersTurn();

}
//strict button on-off
$('.strictbutton').click(function() {
    if (strict == "no") {

        if (sbutton == "on") {
            strict = "yes";
            alert("strict mode is on");
            $("#strict").text("strict mode is on");
        }
    } else if (strict == "yes") {

        if (sbutton == "on") {
            strict = "no";
            alert("strict mode is off");
            $("#strict").text("");
        }
    }
});

$(document).ready(function() {
    $(".input").text('');


});