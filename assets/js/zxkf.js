/* hoverIntent */
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);

function f_filterResults(a, b, c) {
  a = a ? a : 0;
  if (b && (!a || a > b)) a = b;
  return c && (!a || a > c) ? c : a
}

function f_scrollTop() {
  return f_filterResults(window.pageYOffset ? window.pageYOffset : 0, document.documentElement ? document.documentElement.scrollTop : 0, document.body ? document.body.scrollTop : 0)
};

function stick() {
  $('.zxkf').clearQueue().animate({
    top: f_scrollTop() + 100
  });
}
$(window).scroll(function () {
  stick();
});
$(document).ready(function () {
  $('.zxkf').hoverIntent({
    over: function () {
      $('.zxkf').animate({
        width: 133,
        left: $(window).width() - 133
      }, 200);
    },
    out: function () {
      $('.zxkf').animate({
        width: 33,
        left: $(window).width() - 33
      }, 200);
    },
    timeout: 500
  });
  $('.zxkf').show().css({
    'top': 100,
    'left': $(window).width() - 33,
    'width': 33,
    'position': 'absolute',
    'z-index': 9999
  });
  stick();
});
$(window).load(function () {
  $('.zxkf').show().css({
    'left': $(window).width() - 33
  });
});
$(window).resize(function () {
  $('.zxkf').show().css({
    'left': $(window).width() - 33,
    'width': 33,
    'position': 'absolute',
    'z-index': 9999
  });
  stick();
});
