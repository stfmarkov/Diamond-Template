

$(document).ready(function(){
    //The main slider
    $('.mainSlider').slick({
        autoplay:true,
        fade:true,
        arrows:true,
        dots:true,
        nextArrow:'<i class="fa fa-angle-right sliderArrow arrowRight" aria-hidden="true"></i>',
        prevArrow:'<i class="fa fa-angle-left sliderArrow arrowLeft" aria-hidden="true"></i>'
    });
    //Main page small slider
    $('.productSlider').slick({
        autoplay:true,
        fade:true,
        arrows:true,
        dots:true,
        nextArrow:'<i class="fa fa-angle-right sliderArrow arrowRight" aria-hidden="true"></i>',
        prevArrow:'<i class="fa fa-angle-left sliderArrow arrowLeft" aria-hidden="true"></i>'
    });
    //Product page sliders
    $('.productModel').slick({
        fade:true,
        arrows:true,
        dots:true,
        nextArrow:'<i class="fa fa-angle-right sliderArrow arrowRight" aria-hidden="true"></i>',
        prevArrow:'<i class="fa fa-angle-left sliderArrow arrowLeft" aria-hidden="true"></i>'
    });
});