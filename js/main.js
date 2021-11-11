$(window).load(function () {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали',
        after_label: 'Со скинали'
    });
    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')
    });
    
    $('.menu-button').on('click', function() {
        console.log( $('.menu-button'));
        $('.menu').toggleClass('menu_active');
    });

    
    $('.select_checked').on('click', function() {
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function() {
        var value=$(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });

    $("a[href^='#']").click(function (){
        var _href=$(this).attr("href");
        $("html, body").animate({scrollBottom: $(_href).offset().bottom -200+ "px"});
        return false;
    });

    $('input[type="tel"]').mask("+7 (999) 999-99-99");
});

//gsap

//navbar
var navbarTl = gsap.timeline({duration: 0.3});
navbarTl.fromTo(".menu-button", {x: -100, opacity: 0}, {x: 0, opacity: 1})
    .fromTo(".logo", {y: -200, opacity: 0}, {y: 0, rotationX: 360, opacity: 1}, "-=0.2")
    .fromTo(".navbar__mobile", {y: -200, opacity: 0}, {y: 0, rotationX: 360, opacity: 1})
    .fromTo(".navbar__landline", {y: -200, opacity: 0}, {y: 0, rotationX: 360, opacity: 1})
    .fromTo(".button-o", {x: 100, opacity: 0}, {x: 0, opacity: 1});

//hero
var heroTl = gsap.timeline({duration: 0.2});
heroTl.fromTo(".hero", {opacity: 0, scale: 1.2}, { opacity: 1, scale: 1, ease: "circ.out"})
heroTl.fromTo(".hero__title", {opacity: 0, scale: 1.2, x: -20, y: -20}, { opacity: 1, scale: 1,  x: 0, y: 0, ease: "power2.out"})
heroTl.fromTo(".hero__subtitle", {opacity: 0, scale: 1.2, x: -20,}, { opacity: 1, scale: 1, x: 0, ease: "power2.out"})
heroTl.fromTo(".hero__button", {opacity: 0, scale: 1.2}, { opacity: 1, scale: 1, ease: "power2.out"})
heroTl.fromTo("#offer1", {opacity: 0, y: 100}, { opacity: 1, y: 0})

//features
gsap.utils.toArray(".features-block__item").forEach((item, index ) => {
    let featuresTl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "top 20%",
            end: "top 20px",
            toggleActions: "restart none reverse none",
            // markers: true,
            // scrub: true
            pin: true,
            pinSpacing: false,
        },
        duration: 0.9
    });

    featuresTl
    .to(item, {x: 100, rotationY: 360,})
    .to(item, {x: 0, })
    item.animation = featuresTl;
})

//catalog
gsap.utils.toArray(".catalog__card").forEach((item, index ) => {
    let featuresTl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "top 10%",
            end: "top 50px",
            toggleActions: "restart none reverse none",
            scrub: true,
        },
        duration: 2
    });

    featuresTl
    .to(item, { opacity: 1})
    .to(item, { opacity: 0})
    item.animation = featuresTl;
})
//blog
gsap.to(".blog-card", { opacity: 0, x: -10, y: -10, duration: 0});
gsap.utils.toArray(".blog-card").forEach((item, index ) => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".blog__title",
            start: "top 50%",
        },
        duration: index / 2
    });

    tl.to(item, { opacity: 1,  x: 0, y: 0})
      item.animation = tl;
})

//price



//reviews
gsap.to(".reviews-slider__item", { scale: 0.5, duration: 0});
$(".reviews-slider__item").mouseenter(function(){
    $(".reviews-slider__item").each(function (index, box){
        let tl = new TimelineLite();
        tl.
          to(box, 0.1, {
            duration: 1,
            scale: 1,
            ease: "linear",
        })
        box.animation = tl;
      })
  })
$(".reviews-slider__item").mouseleave(function(){
    gsap.to(".reviews-slider__item", { scale: 0.6, duration: 1, ease: "linear",});
})


//offer
let offerTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".of-tl",
        // markers: true,
        start : 'top 80% ',
        end: 'bottom center',
    },
});

offerTl
    .from(".of-subtl", {opacity:0, x: -100})
    .to(".of-subtl", {opacity:1, x: 0, duration: 0.1})
    .from( ".row__inp", {opacity:0, y: -10})
    .to( ".row__inp", {opacity:1, y: 0,  duration: 0.1})
    .from( ".row__info", {opacity:0, y: -10})
    .to( ".row__info", {opacity:1, y: 0,  duration: 0.1})

//steps ??
gsap.to(".of", {
    scrollTrigger: {
        trigger: ".of",
        start: "top top",
        end: "+=150px",
        pinSpacing: false,
        pin: true,
        // markers: true,
    },
});

//factory
let factoryTl = gsap.timeline({
 
    scrollTrigger: {
        trigger: ".factory",
        // markers: true,
        start : 'top 50% ',
        end: 'bottom center',
    },
    duration: 0.5
  });
  
  factoryTl
  .from("#factory__title", { opacity:0, x: -100})
  .to("#factory__title", {opacity: 1, x: 0})
  .from(".factory-block__image", { opacity:0, x: -100})
  .to(".factory-block__image", {opacity: 1, x: 0})
  .from(".factory-block__text", { opacity:0, x: 100})
  .to(".factory-block__text", {opacity: 1, x: 0})
