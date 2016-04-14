
//*****************HEADER MENU*****************
$('.cartBtn').click(function(){
    $('ul.cart').fadeToggle(300);
    $('.userBtn .headerBtnClicked').fadeOut(300);
});
$('.userBtn').click(function(){
    $('.userBtn .headerBtnClicked').fadeToggle(300);
    $('ul.cart').fadeOut(300);
});

$('.mobileMenuIcon').click(function(){
    $('header ul.mobile').slideToggle(300);
    $('header ul.smallMenu').toggleClass('active');
    $('.userBtn .headerBtnClicked, ul.cart').slideUp(300);
});


//*****************HOME PRODUCTS NAV*****************
$('.mobileNav').click(function(){
    $('.homeNav ul').slideToggle();
    $('.homeNav i').toggleClass('away');
});


//*****************CART PRODUCTS NUMBER*****************

var $cartProducts = ($('.cart>li').length)/2;
$('li.cartBtn>span').text($cartProducts);



//*****************PRODUCTS MENU*****************

//slide on click

    $('.dropMenu li.selected').click(function(){
        $(this).parents().eq(1).find('ul').not('.extended').slideToggle(300);
    });


    //changing the "selected" item
    $('.dropMenu li').not('.selected').click(function(){
        $menuSelector = $(this).parents().eq(1).index();
        console.log($menuSelector);
        $('.dropMenu:nth-of-type(' + $menuSelector + ') .extended li.selected').removeClass('selected');
        $liSelected = $(this).index() + 1;
        $('.dropMenu:nth-of-type(' + $menuSelector + ') .extended li:nth-of-type(' + $liSelected + ')').addClass('selected');
        $(this).parents().eq(1).find('ul').not('.extended').slideToggle(300);
    });

//*****************PRODUCT COLLECTION COLLAPSE*****************

/*
$('.dropMenu li').not('.selected').click(function(){
    $('.dropMenu .extended li.selected').removeClass('selected');
    $liSelected = $(this).index() + 1;
    $('.dropMenu .extended li:nth-of-type(' + $liSelected + ')').addClass('selected');
    $(this).parents().eq(1).find('ul').not('.extended').slideToggle(300);
});
*/