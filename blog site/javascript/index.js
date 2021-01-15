const responsive = {
    320:{
        items:1
    },

    400:{
        items:1
    },

    0:{
        items:1
    },

    760:{
        items:2
    },

    960:{
        items:3
    }

}

$(document).ready(function(){

    $nav =$('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    //owl-corousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
   });

   //click to scroll top
   $('.move-up span').click(() => {
    $('html,body').animate({
        scrollTop: 0,
    }, 2000);
   })


});