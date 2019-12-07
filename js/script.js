//venobox part start

$(document).ready(function () {
    $('.venobox').venobox({
        infinigall: true,
        spinner: false,
        numeratio: true,
        overlayClose: true,
    });
});

//venobox part end

$("#snow").fallingSnow({
    stopOnClick: true,
    stopElement: $('#snow'),
    speedAdjust: 4,
    thicknessAdjust: 1.3,
    drift: 100,
    opacity: true,
});

//snow js end
//nav js start

$(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll > 50) {
        $('.main-manu').addClass('manu_bg');
    } else {
        $('.main-manu').removeClass('manu_bg');
    }

    if (scroll > 200) {
        $(".back").css("display", "block");
    } else {
        $(".back").css("display", "none");
    }
});

//nsv js end
//qcontroller start

$(document).ready(function () {

    $(".example").qController();

});

//qcontroller part end
//discount slider start

$('.discount-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    arrows: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }

  ]
});

//discount slider end
//count down start

$('#example').countdown({
    date: '12/24/2020 23:59:59'
}, function () {
    alert('Merry Christmas!');
});

//count down end
//customers slider part start

$('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    arrows: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
    },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }

  ]
});

// customers slider part end
//counter part start

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//counter part end
