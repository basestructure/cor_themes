!function(e,$,a){function n(){var e=$(this),a=e.next("nav"),n="class";e.addClass($(a).attr("class")),$(a).attr("id")&&(n="id"),e.attr("id","mobile-"+$(a).attr(n))}function t(){var e=$("button[id^=mobile-]").attr("id");"undefined"!=typeof e&&(r(e),o(e),u(e))}function s(){var e=$(this);p(e,"aria-pressed"),p(e,"aria-expanded"),e.toggleClass("activated"),$("nav.nav-primary").slideToggle("fast"),$("nav.nav-secondary").slideToggle("fast")}function i(){var e=$(this),a=e.closest(".menu-item").siblings();p(e,"aria-pressed"),p(e,"aria-expanded"),e.toggleClass("activated"),e.next(".sub-menu").slideToggle("fast"),a.find("."+m).removeClass("activated").attr("aria-pressed","false"),a.find(".sub-menu").slideUp("fast")}function r(e){"function"==typeof $(".js-superfish").superfish&&("none"===d(e)?$(".js-superfish").superfish({delay:100,animation:{opacity:"show",height:"show"},dropShadows:!1}):$(".js-superfish").superfish("destroy"))}function o(e){var a="genesis-nav",n="mobile-genesis-nav";"none"===d(e)&&(a="mobile-genesis-nav",n="genesis-nav"),$('.genesis-skip-link a[href^="#'+a+'"]').each(function(){var e=$(this).attr("href");e=e.replace(a,n),$(this).attr("href",e)})}function u(e){"none"===d(e)&&($(".menu-toggle, .sub-menu-toggle").removeClass("activated").attr("aria-expanded",!1).attr("aria-pressed",!1),$("nav, .sub-menu").attr("style",""))}function d(a){var n=e.getElementById(a),t=window.getComputedStyle(n);return t.getPropertyValue("display")}function p(e,a){e.attr(a,function(e,a){return"false"===a})}$("body").addClass("js");var l={},f="menu-toggle",m="sub-menu-toggle";l.init=function(){var e={menu:$("<button />",{"class":f,"aria-expanded":!1,"aria-pressed":!1,role:"button"}).append(l.params.mainMenu),submenu:$("<button />",{"class":m,"aria-expanded":!1,"aria-pressed":!1,role:"button"}).append($("<span />",{"class":"screen-reader-text",text:l.params.subMenu}))};$(".nav-primary").before(e.menu),$("nav .sub-menu").before(e.submenu),$("."+f).each(n),$(window).on("resize.atmosphere",t).triggerHandler("resize.atmosphere"),$("."+f).on("click.atmosphere-mainbutton",s),$("."+m).on("click.atmosphere-subbutton",i)},$(e).ready(function(){l.params="undefined"==typeof AtmosphereL10n?"":AtmosphereL10n,"undefined"!=typeof l.params&&l.init()})}(document,jQuery);