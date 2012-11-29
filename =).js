$(".lnk").hover(function() {
    $(".selected").addClass("notselected");
    $(".selected").removeClass("selected");
},function() {
    $(".notselected").addClass("selected");
    $(".notselected").removeClass('notselected');
});

if ($.browser.webkit) {
    $(".topic").addClass('font-width_fix');
}

$("#cntct-list div").click(function() {
    var name = Base64.decode("SnVuZzNv");
    var email = Base64.decode("QHlhaG9vLmNvbQ==");
    if($(this).html() == 'E-Mail') {
        $(this).html("<a href='mailto:"+name+email+"'>"+name+email+"</a>");
    } else {
        if ($(this).attr("title")) {
            if ($(this).attr("title") != "skype:zzlawlzz?add") {
                var url = "http://"+$(this).attr("title")+name;
                $(this).html("<a target='_blank' href='"+url+"'>"+name+"</a>");
            } else {
                $(this).html("<a href='skype:zzlawlzz?add'>zzlawlzz</a>");
            }
        }
    }
});
$(".db-clickshow").slideUp("fast");
$(".db-clickshow").slideDown("fast");

$(".display-box").click( function() {
    var title = $(this).attr("title");
    $(".db-clickshow").slideUp("slow",function(){
        $(this).load("portfolio/"+title+"?"+ (new Date()).getTime(),function() {
            $(this).slideDown("slow");
        })
    });
    $(".db-hide").css("display","block");
});