
// global selectors
var fabUp = $('#fab.up'),
    expand = $('.expand'),
    swap = $('.swap');


// back to top fab
    fabUp.click(function scroll(){
    	$('body').animate({scrollTop : 0}, 800);
      $(this).blur();
    });

// dropdown feautures
    expand.click(function(){
      $(this).toggleClass('less').parent().next().toggle();
    });
    swap.click(function(){
      $(this).toggleClass('rtl');
    });


//code feautures
$(function(){

var codePseudo = $('code.lang-pseudo'),
    codeC = $('code.c'),
    pre = $('pre');

    if ( codePseudo.width < pre.width ) {

      codePseudo.css('display','block');
      alert('done.pseudo');

    }

    if ( codeC.width < pre.width ) {

      codeC.css('display','block');
      alert('done.c');

    }

// eliminate fucking 'before' hint about language
// if ( pre.find(codePseudo).length != 0 ) {
//   pre.css("padding","0px");
// }

});


// matrix awesome colorings
    $('#DP').click(function() {
      $('.DP').toggleClass('DPbg');
    });

    $('#DS').click(function() {
      $('.DS').toggleClass('DSbg');
    });

    $('#beforeDP').click(function() {
      $('.beforeDP').toggleClass('beforeDPbg');
    });

    $('#afterDP').click(function() {
      $('.afterDP').toggleClass('afterDPbg');
    });

    $('#beforeDS').click(function() {
      $('.beforeDS').toggleClass('beforeDSbg');
    });

    $('#afterDS').click(function() {
      $('.afterDS').toggleClass('afterDSbg');
    });





// cool scroll animation
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
       || location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
            
        }
    });





/*




// set full length of each submenu based on li elements
var smoverflowNumber = $('.smoverflow').length;  // get total number of submenu bars
for (var i=1; i<=smoverflowNumber; i++) {

  var submenuLiWidth = 0;

  $(".smoverflow:nth-of-type(" + i + ") .submenu li").each(function() {
      submenuLiWidth = submenuLiWidth + $(this).outerWidth();
  });

  $(".smoverflow:nth-of-type(" + i + ") .submenu").css("width", 1+submenuLiWidth);
};




// begin overflow full width

$(document).scroll(function() {

var tabOverflow = $('.tab-overflow'),  // tab overflow selector
    smoverflow = $('.smoverflow'),    // submenu overflow selector
    tabOverflowWidth = $('.Article-body').width(),  // new overflow width after fixed position
    tabOverflowBottom = tabOverflow.offset().top + $('.tab-overflow').height() - smoverflow.height();  // bottom position of offset where 'smoverflow' disapears

var smoverflow,
    smoverflowPosTop;

  for (var i=1; i<=smoverflowNumber; i++) {

  var smoverflow = $('.smoverflow:nth-of-type(1)'),
      smoverflowPosTop = smoverflow.offset().top;

    if (smoverflowPosTop < $(document).scrollTop()) {
      smoverflow.css("position" , "fixed");
      tabOverflow.css("padding-top" , "48px");
    } else if(smoverflowPosTop > $(document).scrollTop()) {
      smoverflow.css("position" , "initial");
      tabOverflow.css("padding-top" , "0");
    };

    if (tabOverflowBottom > $(document).scrollTop()) {
      smoverflow.css("position" , "initial");
      tabOverflow.css("padding-top" , "0");
    };

  };


});














/*




// offset
$( "*", document.body ).click(function( event ) {
  var offset = $( this ).offset();
  event.stopPropagation();
  alert(this.tagName +
    " coords ( " + offset.left + ", " + offset.top + " )" );
});




*/