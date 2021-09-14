$(document).ready(function(){
    $("#menu").click(function(){
        $(this).toggleClass("fa-times");
        $(".navbar").toggleClass("nav-toggle");

    });
   
    $("#login").click(function(){
     $(".login-form").addClass("pop-up");
    });
    $(".fa-times").click(function(){
        $(".login-form").removeClass("pop-up");
       });
       $(window).on('scroll load',function(){
        $("#menu").removeClass("fa-times");
        $(".navbar").removeClass("nav-toggle");
        $(".login-form").removeClass("pop-up");
    });
})