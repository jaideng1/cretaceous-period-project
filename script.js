
var useCookies = false;

function doCookies(b) {
  useCookies = b;
  if (useCookies) {
    setCookie("allowcookies","true",31)
  } else {
    setCookie("allowcookies","true",5)
  }
}

function setup() {
  let showMessage = true;
  if (document.cookie.length > 1) {
    let doAllowCookies = getCookie("allowcookies");
    if (doAllowCookies != "") {
      if (doAllowCookies == "true") {
        showMessage = false;
        useCookies = true;
      } else if (doAllowCookies == "false") {
        useCookies = false;
      }
    }
  }
  if (showMessage) {
    $("#cookieAlert").modal('show');
  }
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";";
  document.cookie = expires + ";"
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

let shownMovieTitle = false;
let charOfMT = ["C","R","E","T","A","C","É","M","O","N"];
let aoMT = "";

$(window).on(‘resize scroll’, function() {
  if ($("#movieTitle").isInViewport() && !shownMovieTitle) {
    setTimeout(function() {
      shownMovieTitle = true;
      for (let i = 0; i < charOfMT.length; i++) {
        aoMT = chatOfMT[i];
        setTimeout(function() {
          $("#movieTitle").text += aoMT;
        }, i*50);
        
      }
      
    }, 750)
  }
});

// function deleteAllCookies() {
//   var cookies = document.cookie.split(";");
//   document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 GMT;";
//   console.log("Cookies are now set to: " + document.cookie)
// }
