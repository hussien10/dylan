$(window).on("load",function () {
    // loading-screen
    $('.loading-page').fadeOut(500);
    $("body").css("overflow","auto")

    // mobile toggle button
    $(".mob-toggle").on("click", () => {
        $(".t-two").toggleClass("midle-bar").delay(250)
        $(".t-one").toggleClass("top-bar")
        $(".t-three").toggleClass("bottom-bar")
        $(".mob-nav").slideToggle(500)
    })

    // mobile navbar
    $(".li-info").on("click", function () {
        $(this).parent().children(".custom-dropdown").slideToggle(500)
    })

    // feedback swiper
    var swiper = new Swiper('.feedback-swiper', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
    });

    // services taps
    $(".service-tap").on("click", function () {
        var data_id = $(this).attr("id")
        $(".service-tap").removeClass("active-tap")
        $(this).addClass("active-tap")
        $(".service-info").fadeOut(0)
        $(`.service-info[data-id=${data_id}]`).fadeIn(500)
    })

    // posts swiper
    var swiper = new Swiper('.posts-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }
    });
    //   clients swiper
    var swiper = new Swiper('.clients-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 40,
            },
        }
    });

    // banner slider animation
    var myCarousel = $('#carouselExampleIndicators')
    var items = myCarousel.find(".carousel-item")
    
 function slideAnmi(){
   
        myCarousel.on('slid.bs.carousel', function () {
        
        
            if (items.eq(1).hasClass("active")) {
                $(".custom-nav").addClass("dark-nav")
                $(".custom-nav").find(".logo .desktop-logo").attr("src", "assets/images/logo/logo_dark.png")
                
            } else {
                $(".custom-nav").removeClass("dark-nav")
                $(".custom-nav").find(".logo .desktop-logo").attr("src", "assets/images/logo/logo_light.png")
                $('.sticky').find(".logo .desktop-logo").attr("src","assets/images/logo/logo_dark.png")
            }
        })
   }
   if ($(window).scrollTop()>500){
    if($(this).scrollTop() > 100){
        $('nav').addClass('sticky')
    } else{
        $('nav').removeClass('sticky')

    }
}
else{
    slideAnmi()
}
   
})
// scroll up
$(window).scroll(function(){
    if($(window).scrollTop()>500){
        $(".up").fadeIn(250)
    }
    else{
        $(".up").fadeOut(250)
    }
})
$(".up").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 250);
});
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('nav').addClass('sticky')
        $('nav .logo img').attr("src","assets/images/logo/logo_dark.png")
    } else{
        $('nav').removeClass('sticky')
    }
});

// search

$(".search").on("click",function(){
    $(".search-bar").fadeIn(250)
    $(".search-bar").css("display","flex")
    $("body").css("overflow","hidden")
})
$(".search-close").on("click",function(){
    $(".search-bar").fadeOut(250)
    $("body").css("overflow","auto")
})

// video

$(".watch-video").on("click",function(){
    $(".video-cont").fadeIn(250)
    $(".video-cont").css("display","flex")
    $("body").css("overflow","hidden")
})
$(".video-close").on("click",function(){
    $(".video-cont").fadeOut(250)
    $("body").css("overflow","auto")
})
