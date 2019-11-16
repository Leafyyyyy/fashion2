if ($('#back-to-top').length) {
    var scrollTrigger = 2500, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
        
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            
            scrollTop: 0
        }, 1000);
    });
}


$('.hamburger').click(function(){
    $(this).toggleClass("is-active");
});




$('.js-show-filter').click(function(){
    
    $('.show-filter').toggle();
    $('.panel-filter').fadeToggle();
    $('.panel-search').fadeOut();
});

$('.js-show-search').click(function(){
    $('.panel-search').fadeToggle();
    $('.panel-filter').fadeOut();
})

/* click heart */
$('.button-click').click(function(e){
   swal("Esprit Ruffle Shirt", "is added to wishlist !", "success");
  e.preventDefault();
  $(this).find('i').attr('class','fas fa-heart icon-heart2 dis-block trans-04 ab-t-l');
});



var $grid = $('.grid').isotope({
    itemSelector: '.isotope-item',
    stagger: 30
  });
  
  $('.filter-button-group').on( 'click', '.button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  

  /* quick view */

    $('.add').click(function () {
    if ($(this).prev().val() < 99) {
    $(this).prev().val(+$(this).prev().val() + 1);
    }
    });
    $('.sub').click(function () {
    if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
    });



        jQuery(document).ready(function($){

            $('.picture-small').on({
                'click': function(){
                    $('#change-image').attr('src','/images/data/cart-2.png').fadeIn();
                }
            });
      
            
            $('.yellow-button').on({
                'click': function(){
                    $('#change-image').attr('src','/images/data/cart-3.png').fadeIn();
                }
            });
            });




  /*  */


/* fanxy box */

$(document).ready(function() {
    /*
     *  Simple image gallery. Uses default settings
     */

    $('.fancybox').fancybox();
});


/* carousel */

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      margin: 10,
      nav: true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
            items:2
        },
        991: {
          items: 3
        },
        1000: {
          items: 4
        }
      }
    })
  })

    