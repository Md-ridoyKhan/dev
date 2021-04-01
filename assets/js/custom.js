// javaScript window scrolling function 
const header = document.querySelector(".header");
window.onscroll = ()=>{
    this.scrollY > 20 ?
    header.classList.add("sticky"):
    header.classList.remove("sticky");
}



// jquery
$(document).ready(function(){



    // slicknav menu call
    $('.nav-menu').slicknav({
        prependTo: '#mobileMenu',
        duration: 700
    });
   

    // magnificPopup 
    $('.expandVideo').magnificPopup({
        type: 'iframe'
        // other options...
    });

    // fun counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // owlCarousel 
    $('.our-owl-item').owlCarousel({
        loop:true,
        margin:20,
        autoplay: true,
        smartSpeed: 1000,
        nav: false,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
        }
    })

    // portfolio index item 
    // $('.port-list').click(function(){
    //     const value = $(this).attr('data-filter');
    //     if (value == 'all'){
    //         $('.port-card-box').show('1000');
    //     }
    //     else{
    //         $('.port-card-box').not('.'+value).hide('1000');
    //         $('.port-card-box').filter('.'+value).show('1000');
    //     }
    // });
    // $('.port-list').click(function(){
    //     $(this).addClass('active').siblings().removeClass('active');
    // });

    // '#' no jumping to top of page 
    // #solution- 1: (plain)
    // <a href="#!">....</a>
    // #solution- 2: (javascript)
    // <a href="javascript:void(0);">....</a>
    // #solution- 1: (jQuery)
    // <a href="#" class="no-Jumping">....</a> ---call html---
    // $('a.no-Jumping').click(function(r){
    //     r.preventDefault();
    // });
    // $('a').click(function(r){
    //     r.preventDefault();
    // });


    // ourCarousel  area here 
    // $('.ourCaro-content').owlCarousel({
    //     loop:true,
    //     autoplay: true,
    //     margin:20,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         700:{
    //             items:2
    //         },
    //         1000:{
    //             items:3,
    //         }
    //     }
    // });

    // testmonials Carousel area here 
    // $('.testCarousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     nav:false,
    //     responsive:{
    //         0:{
    //             items:1
    //         }
    //     }
    // });



});


