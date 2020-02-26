$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault();
        var target = $(this).attr("href");

        // smooth scroll
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            // location.hash = target;
        });

        return false;
    });
});

// change active class
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('ul li.active').removeClass('active');
            $('ul li').eq(i).addClass('active');
        }
    });
}).scroll();