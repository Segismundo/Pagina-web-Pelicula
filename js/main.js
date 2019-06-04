$(document).ready(function(){
    $(".detail-section").addClass("d-none");
    $(".nav-pills .nav-link").click(function(event){
        event.preventDefault();
        var layerShow = $(this).attr("href");
        $(".nav-link").removeClass("active");
        $(this).addClass("active");

        $(".detail-section").addClass("d-none");
        $(layerShow).removeClass("d-none");
    });

});