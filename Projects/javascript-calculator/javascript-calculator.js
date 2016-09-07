$(document).ready(function() {
    var show = "";
    var a = "";
    var ip = "";
    var ans = "";

    $('.button').click(function() {

        var val = $(this).val();
        if (parseInt(val, 10) == val || val === '+' || val === '-' || val === '.' || val === '*' || val === '/' || val === '%') {

            show += val;

            $('.text').val(show);
        } else if ($(this).val() === 'Ac') {

            show = "";
            $('.text').val(show);
        } else if ($(this).val() === 'Ce') {

            show = show.slice(0, show.length - 1);
            $('.text').val(show);
        } else if ($(this).val() === '=') {
            a = eval(show);
            show = a;
            $('.text').val(a);
            /*clear=true;*/
        } else if ($(this).val() === 'And') {
            ans = show;
            $('.text').val(ans);

        }



    });
});