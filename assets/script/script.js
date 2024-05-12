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
        991: {
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
        991: {
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
        var $input = $(this).siblings('input'); // Get the sibling input element
        if ($input.attr('type') === 'password') {
            $input.attr('type', 'text'); // Change type to 'text' if it's 'password'
        } else {
            $input.attr('type', 'password'); // Change type to 'password' if it's 'text' or other
        }
    });

    $('.eye-visible1').click(function(){
        $('.eye-visible1').toggle();
        var $input = $(this).siblings('input'); // Get the sibling input element
        if ($input.attr('type') === 'password') {
            $input.attr('type', 'text'); // Change type to 'text' if it's 'password'
        } else {
            $input.attr('type', 'password'); // Change type to 'password' if it's 'text' or other
        }
    });

    $('.eye-visible2').click(function(){
        $('.eye-visible2').toggle();
        var $input = $(this).siblings('input'); // Get the sibling input element
        if ($input.attr('type') === 'password') {
            $input.attr('type', 'text'); // Change type to 'text' if it's 'password'
        } else {
            $input.attr('type', 'password'); // Change type to 'password' if it's 'text' or other
        }
    });

    $('.eye-visible3').click(function(){
        $('.eye-visible3').toggle();
        var $input = $(this).siblings('input'); // Get the sibling input element
        if ($input.attr('type') === 'password') {
            $input.attr('type', 'text'); // Change type to 'text' if it's 'password'
        } else {
            $input.attr('type', 'password'); // Change type to 'password' if it's 'text' or other
        }
    });

    $('.eye-visible4').click(function(){
        $('.eye-visible4').toggle();
        var $input = $(this).siblings('input'); // Get the sibling input element
        if ($input.attr('type') === 'password') {
            $input.attr('type', 'text'); // Change type to 'text' if it's 'password'
        } else {
            $input.attr('type', 'password'); // Change type to 'password' if it's 'text' or other
        }
    });

    $('.eye-visible5').click(function(){
        $('.eye-visible5').toggle();
        var $input = $(this).siblings('input'); // Get the sibling input element
        if ($input.attr('type') === 'password') {
            $input.attr('type', 'text'); // Change type to 'text' if it's 'password'
        } else {
            $input.attr('type', 'password'); // Change type to 'password' if it's 'text' or other
        }
    });

});