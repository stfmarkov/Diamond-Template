
//*****************HEADER MENU*****************
function openCart(){
    $('ul.cart').fadeToggle(300);
}
function closeCart(){
    $('ul.cart').fadeOut(300);
}
function closeUser(){
    $('.userBtn .headerBtnClicked').fadeOut(300);
}
function openUser(){
    $('.userBtn .headerBtnClicked').fadeToggle(300);
}
function closeMobile(){
    $('header ul.mobile').slideUp(300);
}

function openSearch(){
    $('form').fadeToggle(300);
}
function closeSearch(){
    $('form').fadeOut(300);
}

$('.cartBtn').click(function(){
    openCart();
    closeUser();
    closeMobile();
    closeSearch();
});
$('.userBtn').click(function(){
    openUser();
    closeCart();
    closeMobile();
    closeSearch();
});
$('.searchBtn').click(function(){
    openSearch();
    closeCart();
    closeUser();
    closeMobile();
});
$('.mobileMenuIcon').click(function(){
    $('header ul.mobile').slideToggle(300);
    $('header ul.smallMenu').toggleClass('active');
    closeCart();
    closeUser();
    closeSearch();
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

    $menuCheck = false;
    $('.dropMenu li.selected').click(function(){
        //Checks if there is open menu
        if($menuCheck === true){
            //find elements with class active and and closes them, which make it impossible to open more the one menu
            $('.activated').slideUp(300).removeClass('activated');
            $menuCheck = false;
        }else{
            //open a drop menu depending which button is clicked
            $(this).parents().eq(1).find('ul').not('.extended').slideToggle(300).addClass('activated');
            $menuCheck = true;
        }
    });


    //changing the "selected" item
    $('.dropMenu li').not('.selected').click(function(){
        $menuSelector = $(this).parents().eq(1).index();
        $('.dropMenu:nth-of-type(' + $menuSelector + ') .extended li.selected').removeClass('selected');
        $liSelected = $(this).index() + 1;
        $('.dropMenu:nth-of-type(' + $menuSelector + ') .extended li:nth-of-type(' + $liSelected + ')').addClass('selected');
        $(this).parents().eq(1).find('ul').not('.extended').slideToggle(300);
    });

    //leaving only one the chosen category in mobile


//*****************PRODUCT COLLECTION COLLAPSE*****************

/*
$('.dropMenu li').not('.selected').click(function(){
    $('.dropMenu .extended li.selected').removeClass('selected');
    $liSelected = $(this).index() + 1;
    $('.dropMenu .extended li:nth-of-type(' + $liSelected + ')').addClass('selected');
    $(this).parents().eq(1).find('ul').not('.extended').slideToggle(300);
});
*/