

$(document).ready(function(){
    //The main slider
    $('.mainSlider').slick({
        autoplay:true,
        fade:true,
        arrows:true,
        dots:true,
        nextArrow:'<div class="sliderArrow arrowRight" aria-hidden="true"></div>',
        prevArrow:'<div class="sliderArrow arrowLeft" aria-hidden="true"></div>'
    });
    //Main page small slider
    $('.productSlider').slick({
        autoplay:true,
        fade:true,
        arrows:true,
        dots:true,
        nextArrow:'<div class="sliderArrow arrowRight" aria-hidden="true"></div>',
        prevArrow:'<div class="sliderArrow arrowLeft" aria-hidden="true"></div>'
    });
    //Product page sliders
    $('.productModel').slick({
        fade:true,
        arrows:true,
        dots:true,
        nextArrow:'<div class="sliderArrow arrowRight" aria-hidden="true"></div>',
        prevArrow:'<div class="sliderArrow arrowLeft" aria-hidden="true"></div>'
    });
});