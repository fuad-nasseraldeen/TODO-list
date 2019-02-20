$(function(){

    $(".btn-intro").click(function() {
        $('html, body').animate({
            scrollTop: $("#todo").offset().top
        }, 1000);
    });

});