var canScroll = true;
var isMobile = false;
var lastScrollTop, delta;
var last, _element;
var min = true;
var songNum = 0;
var isChrome;
var pages = new Array();
var pglast = 0;
var slider_mod = 1;
var scrolltype = "none";
var isChromium = window.chrome,
    vendorName = window.navigator.vendor,
    isOpera = window.navigator.userAgent.indexOf("OPR") > -1,
    isIEedge = window.navigator.userAgent.indexOf("Edge") > -1;
var time = 0;
var init_height = $(window).height();
var last_height = init_height;
var current_height = init_height;
var set_height = init_height;
var htext = .9; //.325
var hpage = .8; //1.8
var fpa = 1;
var clientHeight = window.document.documentElement.clientHeight;
(function($) {
    'use strict';

    $(window).on("load", function() {
      detectDevice();
      if ( !isMobile ) {
        shiftBlocks('.text ul');
      } else {
        sizeCover();
      }
      assignIndexes();
      //
      $("#contentwrapper").removeClass("not_loaded");
      $("#contentwrapper").addClass("loaded");
      updateRocketPoints();
      assignFullpageIndexes();
      hideLayers();
      setClocks();
      //drawPath();
    });

    $("#landimg_mobile").ready(function() {
      $("#landimg_mobile").attr("src", "visuals/center8.jpg");
    });

    $(window).on("resize", function() {
      //resizeBlocks();
    });

    setInterval(function () {
       updateRocketPoints();
    }, 7000);

    setInterval(function () {
      //drawPath();
    }, 1000);

    $("#sourceTracker").on("load", function() {
      updateRocketPoints();
    });

    function hideLayers() {
      $(".ital").each(function(index, element) {
        //if ( lastScrollTop < $(element).offset().top ) {
          $(element).addClass("ital_out");
        //}
      });

      $(".image_ul").each(function(index, element) {
        if ( Math.random() < 0.3 ) {
          $(element).addClass("image_ul_out");
        }
      });
    }

    function sizeCover() {
      /*
      $("html").css('height',
      '' + ( $(window).height() * 1 ) + 'px');

      $("body").css('height',
      '' + ( $(window).height() * 1 ) + 'px');
      */

      $("landimg_mobile").css('height',
      '' + ( clientHeight * 1.3 ) + 'px');
      $("content0").css('height',
      '' + ( clientHeight * 1.3 ) + 'px');

      $("#content0").css('height', fpa * set_height * 1 + 'px');
      $("#content7").css('height', fpa * set_height * 1 + 'px');

    }

    function drawPath() {
      //var arr = [];
      $(".text ul").each(function(index, element) {
        //arr.push( $(element).offset().top );
        //console.log( $(element).offset().top );
        jQuery('<div/>', {
          "class": 'pin_abs'
        })
        .css("transform", "translate(" + ( $(window).width() - ( $(element).offset().left / 2. ) ) + "px, " + ( $(element).offset().top ) + "px)")
        .appendTo("body");

        //$("body").add(
        //  $("div").addClass("pin_abs").css("transform", "translate(" + ( $(element).offset().left + 120 ) + "px, " + ( $(element).offset().top ) + "px)"));
      });
      //arr = arr.reverse();
      //for (int g = arrl.length() - 1; g != 0; --g)
      //$("body").add("div").addClass("pin").css("transform")

      var arr = [];
      var i = 0;
      $('.pin_abs').each(function()
      {
              arr[i++] = $(this);
      });

      $("#canvhold").width( $("body").width() )
      $("#canvhold").height( $("body").height() )


      /*
      $("#canv").width( $("body").width() )
      $("#canv").height( $("body").height() )

      var c=document.getElementById("canv");
      var ctx=c.getContext("2d");
      ctx.canvas.height = $("body").width();
      ctx.canvas.width = $("body").height();
      */


      for (var g = 0; g < arr.length - 2; ++g) {

        var c=document.getElementById("canv");
        var ctx=c.getContext("2d");

        ctx.beginPath();
        ctx.lineWidth="15";
        ctx.strokeStyle="red";
        ctx.moveTo($(arr[g]).offset().left, $(arr[g]).offset().top);
        ctx.lineTo($(arr[g + 1]).offset().left, $(arr[g + 1]).offset().top);
        ctx.stroke();
      }

    }

    function shiftBlocks(id) {
      var offset = 0;
      $(id).each(function(index, element) {
        offset = Math.random()-.5;
        $(element).css('transform', 'translateX(' + Math.floor(offset * 20) + '%)');
        if ($(element).offset().left < 0) {
          $(element).css('transform', 'translateX(0)');

        }
      });
    }

    function assignIndexes() {
      var num = 0; //pages

      $('.fullpage').each(function(index, element) {
          pages.push($('.fullpage')[index].id);
          //$(element).css('height', hpage * set_height * 1 + 'px');
          pglast++;
      });
    }

    function detectDevice() {
      // device detection
      if (/Mobi/.test(navigator.userAgent) || $(window).width() < 761) {
          // mobile!
          isMobile = true;
          //alert('Please use a desktop computer to optimally view this website.');
      }
      if (isChromium !== null &&
          isChromium !== undefined &&
          vendorName === "Google Inc." &&
          isOpera == false &&
          isIEedge == false) {
          isChrome = true;
      } else {
          isChrome = false;
          //alert('Please use google chrome to optimally view this page.');
      }
      //dev det
    }

    function setClocks() {
      //year filling
      var date = new Date();
      var thisYear = date.getFullYear();
      //console.log(thisYear);

      $('.startYear').each(function(index, element) {
          var timeDiff = thisYear - parseInt(element.innerHTML);
          var lexicon = 'year';
          if (timeDiff == 0) {
              timeDiff = 1;
          }
          if (timeDiff > 1) {
              lexicon += 's';
          }
          element.innerHTML = timeDiff + ' ' + lexicon;
      });
    }


    $(window).on("load", function() { //make sure everything is loaded


         //'.text li'

        /*
        var url = URL.createObjectURL(this.files[0]);
var img = new Image;

img.onload = function() {
    alert(img.width);
};

img.src = url;
        var img, url;
        $('.bi').each(function(index, element) {
          img = new Image();
          url = URL.createObjectURL(element.src);
          img.src = //add image file size reader...
          //if aspect ration is certain number, add certain css class
          //based on three classes, format images
            $(element).css('transform', 'translateX(' + Math.floor((Math.random()-.5) * 25) + '%)');
        });*/

        --pglast;
        $('.text').each(function(index, element) {
            //$(element).css('height', htext * set_height * 1 + 'px');
        });
        $("#content0").css('height', fpa * set_height * 1 + 'px');
        $("#content" + pglast).css('height', (fpa) * set_height * 1 + 'px');
        if (isMobile) {
            $('#landimg').css('filter', 'brightness(1)');
        }

        $('.text').each(function(index, element) {
            $(element).addClass('jumpin');
        });
        //
        //alert(set_height + ', ' + pages.length);


        //scrolling

        var pg = 0;

        lastScrollTop = 0, delta = $(window).innerHeight() * .02;
        var scroll = 0;
        $(window).scroll(_.throttle(function(event) {

            var phv = hpage * current_height;

            if (scrolltype == "override") {
                event.preventDefault();
                return;
            }

            if (!canScroll) { //lock mode
                var $elemen = pages[pg];
                //alert('#' + $elemen);
                var px = ($('#' + $elemen).offset().top);
                //anim
                $('html').animate({
                    scrollTop: '' + px + 'px'
                }, {
                    easing: 'swing',
                    duration: 100,
                    complete: function() {
                        lastScrollTop = $(this).scrollTop();
                    }
                });
            }


            /**
          if(!isMobile){
          var factor = ($('html').scrollTop()%$('#content0').height())/$('#content0').height();
          console.log($('html').scrollTop() + ', ' + factor + ', ' + 1*((100-factor)/100))
		      $('#landimg').css('filter', 'brightness(' + 1.2*((.7 + factor)/1.7) + ')');
        }
        **/

            var st = $(this).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta) return;

            if (st > lastScrollTop) {
                // downscroll code
                //events
                if (st > $(window).height() * .1 && lastScrollTop < $(window).height() * .1) {
                    menuBanner();
                }
                //!events
                if (scrolltype != "up") {
                    scrolltype = "down";
                    pg = Math.floor(st / phv);
                    var $elemen = pages[pg];
                    //var px = ($('#' + $elemen).offset().top);
                    //anim
                    //!anim
                }
            } else {
                // upscroll code
                //events
                if (st < $(window).height() * .1 && lastScrollTop > $(window).height() * .1) {
                    menuLanding();
                }
                //!events
                if (scrolltype != "down") {
                    scrolltype = "up";
                    pg = Math.floor(st / phv);
                    var $elemen = pages[pg];
                    //var px = ($('#' + $elemen).offset().top);
                    //anim
                    //!anim
                }
            }

            check_if_in_view();

            //console.log(lastScrollTop + ', ' + st);
            lastScrollTop = st;
            scrolltype = "none";
            //console.log('update');

        }, 50));

      //if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
      //window.onmousewheel = document.onmousewheel = wheel;

        //end scrolling function

        //sliders init

        $('.ba-slider').each(function() {
            var cur = $(this);
            // Adjust the slider
            var width = (cur.width() * slider_mod) + 'px';
            cur.find('.resize img').css('width', width);
            // Bind dragging events
            drags(cur.find('.handle'), cur.find('.resize'), cur);
        });

        //end slider init code

        $('.oval_wide, .oval_tall').on('click', function(e, i) {
            $(this).toggleClass('oval_off');
            return false;
        });

        $('.dma').on('click', function(e, i) {
            //console.log($(this).attr("data"));
            var target = $($(this).attr("data")).offset().top;
            if ( !( $($(this).attr("data")).hasClass("contentLast") ) ) {
              target -= ($(window).height() * .005);
            }
            $('html').animate({
                scrollTop: '' + target + 'px'
            }, {
                easing: 'swing',
                duration: 500,
                complete: function() {
                    lastScrollTop = target;
                    check_if_in_view();
                }
            });

        });

        /*
        if ($('#content0').css('background-color') == 'rgb(0, 0, 255)') {
            $('#content0').css('background-color', 'rgba(0, 0, 0, 0)')
                .css('background-image', 'url(\'img/center8.jpg\')');
            $('#fullimg').attr('src', 'img/center8.jpg');
        }
        */

        $(window).resize(_.debounce(function() {
            current_height = $(window).height();
            if (Math.abs(last_height - current_height) > 90) {
                last_height = current_height;
                set_height = current_height;

                //resize sliders
                $('.ba-slider').each(function() {
                    var cur = $(this);
                    var width = (cur.width() * slider_mod) + 'px';
                    cur.find('.resize img').css('width', width);
                });
                //
                $('.fullpage').each(function(index, element) {
                    //$(element).css('height', hpage * set_height * 1 + 'px');
                });
                //$("#content0").css('height', fpa * set_height * 1 + 'px'); //////might be causing mobile issue
                //$("#content7").css('height', (fpa) * set_height * 1 + 'px');
                $('.text').each(function(index, element) {
                    //$(element).css('height', htext * set_height * 1 + 'px');
                });

                //

            }
        }), 1000);
        //


        //jquery end tags
    });
})(jQuery); //end of load reqs

// funcs

//slider funcs


// Update sliders on resize.
// Because we all do this: i.imgur.com/YkbaV.gif

function updateRocketPoints() {

  var inp = $("#sourceTracker");

  /*
  var url = "https://api.foldingathome.org/user/The_Rocket/stats"
  */
  var url = "https://api.foldingathome.org/user/The_Rocket"
  $.ajax({
        url: url,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json'
        },
        method: 'GET',
        dataType: 'jsonp',
        data: '',
        success: function( data ){
          if ( data.score == null ) {
            $("#pointsTracker").text( "Tracker currently unavailable..." );
          } else {
            $("#pointsTracker").text( data.score + " Points!" ).digits();
          }
          if ( data.wus == null ) {
            $("#wuTracker").text( "Tracker currently unavailable..." );
          } else {
            $("#wuTracker").text( data.wus + " Work Units!" );
          }
        },
        error: function( error ) {
          $("#pointsTracker").text( "Tracker currently unavailable..." );
          $("#wuTracker").text( "Tracker currently unavailable..." );
        }
      });

}

$.fn.digits = function(){
    return this.each(function(){
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
    })
}

function assignFullpageIndexes() {
  var x = 0;
  $('.fullpage').each(function() {
      var cur = $(this);
      cur.attr("id", "content" + x);
      ++x;
  });
}

//end slider funcs
function r(min, max) {
    var minNumber = min; // le minimum
    var maxNumber = max; // le maximum
    return Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
}
//

function menuBanner() {
  $('#dot_menu').removeClass('front_menu');
}

function menuLanding() {
  $('#dot_menu').addClass('front_menu');
}

function displayEl(on, _el) {
    if (on) {
        //console.log('+');
        _el.css('opacity', '1').css('transform', 'none');

    } else {
        //console.log('-');
        _el.css('opacity', '0').css('transform', 'translate(0, -5vh)');
    }
}

function check_if_in_view() {
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop() - (.25 * $(window).height());
    var window_bottom_position = (window_top_position + (window_height * 0.8));

    $('.jumpin').each(function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
          $element.removeClass('no-view');
        } else {
          $element.addClass('no-view');
          $element.removeClass('in-view');
        }
    });
    $('.jumpimg').each(function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position + 50 <= window_bottom_position)) {
            $element.addClass('in-view-fullimg');
        } else {
            $element.removeClass('in-view-fullimg');
        }
    });

    $('.ital').each(function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position + 50 <= window_bottom_position)) {
            $element.removeClass('ital_out');
        } else {
            //$element.addClass('ital_out');
        }
    });

    $('.image_ul').each(function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position + 50 <= window_bottom_position)) {
            $element.removeClass('image_ul_out');
        } else {
            //$element.addClass('ital_out');
        }
    });
}

function scroll(top, time) {
    $('html').animate({
        scrollTop: top
    }, {
        easing: 'swing',
        duration: time,
        complete: function() {

        }
    });
}
