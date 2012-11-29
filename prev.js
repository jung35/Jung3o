var m_width = Math.floor($(window).width() * .80);
var m_height = Math.floor($(window).height() * .80);

$('.preview img').click(function() {
    showimg(this);
});

$("#imgpreview .imgprev").click(function(event) {
    event.stopPropagation();
    showimg($(".preview img[src='"+$(this).attr("title")+"']"));
});

$("#imgpreview .imgnext").click(function(event) {
    event.stopPropagation();
    showimg($(".preview img[src='"+$(this).attr("title")+"']"));
});

$("#imgpreview").click(function() {
    $(this).hide();
});

function showimg(thisimg) {
    var prev = $(thisimg).prev('img').attr('src');
    var next = $(thisimg).next('img').attr('src');

    console.log(thisimg);

    var src = new Image();
    src.src = $(thisimg).attr("src");
    var width = src.width;
    var height = src.height;

    var ratio = 1;

    if (m_width < width && m_height < height) {
        if(width > height) {
            ratio = m_height/height;
        } else if (height > width) {
            ratio = m_width/width;
        }
    }

    var n_width = Math.ceil(width * ratio);
    var n_height = Math.ceil(height * ratio);

    $("#imgpreview img").attr("src",$(thisimg).attr("src"));
    $("#imgpreview img").attr("width",n_width);
    $("#imgpreview img").attr("height",n_height);
    var l_marg = -1*Math.ceil($("#imgpreview img").width()/2);
    var t_marg = -1*Math.ceil($("#imgpreview img").height()/2);
    $("#imgpreview img").css("margin-left",l_marg);
    $("#imgpreview img").css("margin-top",t_marg);

    if(prev) {
        $(".imgprev").css("display","inline-block").attr("title",prev);
    } else {
        $(".imgprev").hide();
    }

    if(next) {
        $(".imgnext").css("display","inline-block").attr("title",next);
    } else {
        $(".imgnext").hide();
    }

    $("#imgpreview").show();
}