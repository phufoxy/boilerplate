$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var opacity = 0;
        if (scroll < 100) {
            opacity = scroll ;
            $("#b-page-header").css('background-color', 'rgba(75, 193, 210, ' + opacity + ')');
        } else {
            opacity = 1;
            $("#b-page-header").css('background-color', 'rgba(75, 193, 210, ' + opacity + ')')
        }
    })
});

