// toggle menu script start

$('.menu-item-has-children').click(function() {
    $(this).toggleClass('open');
    $(this).children('ul').toggle();
});

// toggle menu script end

// add header and footer

$(function () {
    // Load head
    $("#head").load("head.html");

    // Load header
    $("#header").load("header.html");

    // Load footer
    $("#footer").load("footer.html");
});

// carousel script start

$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    items: 4,
})

$('#insta-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    items: 1,
    autoHeight: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        }
    }
});

// carousel script end
