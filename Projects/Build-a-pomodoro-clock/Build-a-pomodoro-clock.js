var running = false;
var period = "sessiontime";
var totalseconds = session;
var interval;
var audio = $("audio")[0];

$(document).ready(function() {
    //variables initializations and declarations
    var brk = $('#break').text() * 60;
    var session = $('#session').text() * 60;

    //setInterval function for every 1 sec
    var interval = setInterval(function() {
        if (running === true) {
            if (totalseconds === 0) {
                audio.play();
            } 
            if (totalseconds < 0) {
                if (period === "sessiontime") {
                    totalseconds = brk;
                    period = "breaktime";
                } else if (period === "breaktime") {
                    totalseconds = session;
                    period = "sessiontime";
                }
            }
            $("#info").html(period);
           // console.log(period);
            var mts = ("0" + parseInt(totalseconds / 60)).slice(-2);
            $('#minutes').html(mts);

            var sec = ("0" + parseInt(totalseconds % 60)).slice(-2);
            $('#seconds').html(sec);
            
            totalseconds--;
        }
    }, 1000);
});


$('#splus').click(function() {
    if (running === false) {
        session = parseInt(session / 60);
        session++;
        $('#session').text(session);
        session = $('#session').text() * 60;
    }
});
$('#sminus').click(function() {
    if (running === false && session > 0) {
        session = parseInt(session / 60);
        session--;
        $('#session').text(session);
        session = $('#session').text() * 60;
    }
});
$('#bplus').click(function() {
    if (running === false) {
        brk = parseInt(brk / 60);
        brk++;
        $('#break').text(brk);
        brk = $('#break').text() * 60;
    }
});
$('#bminus').click(function() {
    if (running === false && brk > 0) {
        brk = parseInt(brk / 60);
        brk--;
        $('#break').text(brk);
        brk = $('#break').text() * 60;
    }
});

//start /pause/reset functions
$('#startbutton').click(function() {
    if (running !== true) {
        period = "sessiontime";
        running = true;
        totalseconds = $('#session').text() * 60;
        $('#stopbutton').text("pause");
        $("#info").html(period);
        setTimeout(interval, 1000);
    }
});
$('#stopbutton').click(function() {
    if (running === true) {
        running = false;
        $('#stopbutton').text("continue");
    } else {
        running = true;
        $('#stopbutton').text("pause");
        setTimeout(interval, 1000);
    }
});


$('#reset').click(function() {
    running = false;
    $('#break').text(5);
    $('#session').text(25);
    $('#minutes').html("25");
    $('#seconds').html("00");
    totalseconds = 25 * 60;
    period = "sessiontime";
    session = 25 * 60;
    brk = 5 * 60;
});