$(document).ready(function (){

$(".js--section-about").waypoint(function (direction){
    if(direction == "down") {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
}, {
    offset: "60px"
});

$(".js--scroll-down").click(function (){
    $("html, body").animate({
        scrollTop: $(".about").offset().top
    }, 1000);
})

$('a[href*="#"]')



})