// add header and footer

$(function () {

    // Load head
    $("#head").load("components/head.html");

    // Load header
    $("#header").load("components/header.html");

    // Load footer
    $("#footer").load("components/footer.html");

});

// carousel script start

$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    items: 4,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        }
    }
})

$('#insta-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
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


$(function () {
    
    $('.menu-item-has-children').click(function () {
        $(this).toggleClass('open');
        $(this).children('ul').toggle();
    });

    $('.eye-visible').click(function(){
        $('.eye-visible').toggle();
    });

    $('.eye-visible1').click(function(){
        $('.eye-visible1').toggle();
    });

});