$(document).ready(function() {
    $(".accordian-title").click(function(){
        $(this).parent('.accordian').toggleClass('open');
        // $(".accordian").siblings().hasClass("open").remove;
    }); 

});

  