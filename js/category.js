window.addEventListener("load",function(){
    new Swiper('.category-left .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });
    new Swiper('.category-right .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });


},false)
