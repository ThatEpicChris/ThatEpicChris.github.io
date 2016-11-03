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

var modal = document.getElementById('mobilemenucase');
var btn = document.getElementById("mobilemenu");
var quit = document.getElementsByClassName("mm-close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
quit.onclick = function() {
    modal.style.display = "none";
}
