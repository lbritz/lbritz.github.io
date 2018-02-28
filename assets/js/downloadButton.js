$(".download-btn").hover(function(){
    $(".app").toggleClass("visible");
});
$(".app").hover(function() {
    $(".app").addClass("visible")
}, function() {
    $(".app").removeClass("visible")
})