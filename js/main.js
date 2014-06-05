$(function() {

  var body = $('body');
  var isPhone = body.css('padding-bottom') === '1px';
  var isDesktop = body.css('margin-bottom') !== '1px';
  var notDesktop = body.css('margin-bottom') === '1px';


  var scrollBtn = $('a.scroll');

  var scroll = function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
        target = $(target);
    var position = target.offset().top - 30;

    $('html, body').animate({
      scrollTop: position
    }, 500);

  };

  scrollBtn.on('click', scroll);



  var showForm = $('a.invite-form');

  showForm.on('click', function(e) {
    e.preventDefault();

    $('div.form-wrap').toggleClass('show');
  });



  // setup request animation frame shim
  (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
  }());



  var onScreen = function() {
    var moons = $('div.moons');
    var stars = $('div.star');
    var star = $('div.star-2');
    var position = star.offset().top;
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();

    if ( scrollPosition >= (position - windowHeight) ) {
      stars.addClass('show');
      moons.addClass('show');
    }

  };


  var parallax = function() {
    var el1 = $('div.parallax-1');
    var el2 = $('div.parallax-2');
    var el3 = $('div.parallax-3');
    var scrollPosition = $(window).scrollTop();

    var el1Position = Math.floor((scrollPosition * 0.4));
    var el2Position = Math.floor((scrollPosition * 0.3));
    var el3Position = Math.floor((scrollPosition * 0.5));

    el1.css({
      'margin-top' : '-' + el1Position + 'px',
      '-webkit-transform' : 'rotate(' + (el1Position * 0.05) + 'deg)',
      '-ms-transform' : 'rotate(' + (el1Position * 0.05) + 'deg)',
      'transform' : 'rotate(' + (el1Position * 0.05) + 'deg)'
    });

    el2.css({
      'margin-top' : '-' + el2Position + 'px',
      '-webkit-transform' : 'rotate(' + (el2Position * 0.05) + 'deg)',
      '-ms-transform' : 'rotate(' + (el2Position * 0.05) + 'deg)',
      'transform' : 'rotate(' + (el2Position * 0.05) + 'deg)'
    });

    el3.css({
      'margin-top' : '-' + el3Position + 'px',
      '-webkit-transform' : 'rotate(' + (el3Position * 0.05) + 'deg)',
      '-ms-transform' : 'rotate(' + (el3Position * 0.05) + 'deg)',
      'transform' : 'rotate(' + (el3Position * 0.05) + 'deg)'
    });

  };




  if ( isDesktop ) {
    $(window).on('scroll', function() {
      window.requestAnimationFrame(onScreen);
      window.requestAnimationFrame(parallax);
    });
  }


});