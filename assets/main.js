$(function () {
    $(window).scroll(function () {
        var top_offset = $(window).scrollTop();
        
        if (top_offset == 0) {
            $('.navigation-base')
            .removeClass('nav-else');
        } else {
            $('.navigation-base').addClass('nav-else');
        }
    })
});