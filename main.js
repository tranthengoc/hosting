window.onload = function() {
appfloat();
darkmode_head();
darkmode();
avatar();
etc();
pop();
lazyload();
lazyimg();
popwin();
lightbox();
gototop();
toc();
};
function toc() {
 var content = document.querySelector('.post-body')
    var headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6, h7')
    var headingMap = {}

    Array.prototype.forEach.call(headings, function (heading) {
        var id = heading.id ? heading.id : heading.textContent.trim().toLowerCase()
                   .split(' ').join('-').replace(/[\!\@\#\$\%\^\&\*\(\):]/ig, '')
        headingMap[id] = !isNaN(headingMap[id]) ? ++headingMap[id] : 0
        if (headingMap[id]) {
          heading.id = id + '-' + headingMap[id]
        } else {
          heading.id = id
        }
      })

    tocbot.init({
      tocSelector: '.min-toc',
      contentSelector: '.post-body',  <!--여기 -->
      headingSelector:'h1, h2, h3',
      hasInnerContainers: false
    });

    $(document).ready(function(){
      $('.min-toc').addClass('loading');
      $('.min-toc').removeClass('loading');
    });
}
function darkmode_head() {
           if (localStorage.getItem("darkmode") == 1) {
                document.getElementsByTagName('html')[0].setAttribute('class','dark');
            }
   setTimeout(function(){
                var $theme_color = getComputedStyle(document.head).getPropertyValue('--white');
                document.querySelector('[name="apple-mobile-web-app-status-bar-style"]').setAttribute( 'content', $theme_color );
                document.querySelector('[name="msapplication-navbutton-color"]').setAttribute( 'content', $theme_color );
                document.querySelector('[name="theme-color"]').setAttribute( 'content', $theme_color );
   }, 1);
        }
darkmode_head();
function darkmode() {
if (localStorage.getItem("darkmode") == 1) {
$('a[href="#darkmode"] i').toggle();
}
$('a[href="#darkmode"]').on('click', function(e) {
e.preventDefault();
$("html").toggleClass("dark");
$('i', this).toggle();
if (localStorage.getItem("darkmode") == 1) {
localStorage.setItem("darkmode", 0);
} else {
localStorage.setItem("darkmode", 1);
}
darkmode_head();
});
}
function avatar() {
   $(document).ready(function() {
    $(".comments .avatar-image-container").find("img").each(function(a, t) {
    (t = $(t)).attr({
    src: t.attr("src").replace("/s35" , "/s100")
    })
    })
    });
}
function lazyimg() {
$(".post-content .post-body img").each(function() {	$(this).attr("src", $(this).attr("src").replace("http://", "https://"));	$(this).addClass("lazyload");        $(this).attr("data-src",$(this).attr("src"));        $(this).removeAttr("src");    	});
$("iframe").each(function() {		$(this).addClass("lazyload"); 
  });
}
function popwin() {
$(document).on('click', '[target="_popwin"]', function(e) {
e.stopPropagation();
e.preventDefault();
var url = $(this).attr('href'),
width = $(this).attr('data-popwin-width'),
height = $(this).attr('data-popwin-height');
var w = 960;
if (width) {
w = width;
}
var h = 540;
if (height) {
h = height;
}
var left = Number((screen.width / 2) - (w / 2)),
tops = Number((screen.height / 2) - (h / 2)),
popupWindow = window.open(url, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
popupWindow.focus();
});
}
function etc() {
$(window).on('beforeunload', function() {
$('body').addClass('loading');
setTimeout(function() {
$('body').removeClass('loading');
}, 2000);
});
$(window).on('scroll', function() {
if ($(window).scrollTop() > 0) {
$('#header').addClass('shadow');
} else {
$('#header').removeClass('shadow');
}
});
if ($('[data-related]').length) {
$('[data-related]').each(function() {
var $related = $(this);
var $url = $(this).attr('data-related');
$related.addClass('loading');
$related.load($url + ' .is_loop', function() {
var $loop = $(this).html();
$related.html($loop);
var $article_id = $related.closest('article').attr('id');
if ($article_id) {
if ($related.find('article#' + $article_id).length) {
$related.find('article#' + $article_id).remove();
} else {
$related.find('article:last-of-type').remove();
}
}
lazyload();
$related.removeClass('loading');
});
});
}
$('#pop-share .copy button').on('click', function(e) {
var $this = $(this);
$this.siblings('input').select();
document.execCommand('copy');
$this.text('Copied!');
setTimeout(function() {
$this.text('Copy');
}, 2000);
});
$(document).on('click', '.loadmore-btn', function(e) {
e.preventDefault();
let nextLink = $(this).attr('href');
let loadmoreBtn = $('#blog-pager .loadmore-btn');
let loadmore_txt = $('#blog-pager .loadmore-btn').text();
if (nextLink) {
$.ajax({
url: nextLink,
beforeSend: function() {
loadmoreBtn.addClass('loading');
},
complete: function() {
loadmoreBtn.removeClass('loading');
},
success: function(html) {
let rslt = $(html).find('.is_loop').html();
let nextPage = $(html).find('.loadmore-btn').attr('href');
$('.is_loop').append(rslt);
loadmoreBtn.show();
lazyload();
if (nextPage) {
loadmoreBtn.attr('href', nextPage);
} else {
loadmoreBtn.fadeOut();
}
}
});
}
});
var olderLink_text = $('a.blog-pager-older-link').text();
var olderLink = $('a.blog-pager-older-link').attr('href');
$('a.blog-pager-older-link').load(olderLink + ' article h1', function() {
var olderLinkTitle = $('a.blog-pager-older-link').text();
$('a.blog-pager-older-link').html('<figure class="loading"></figure><div class="flex left"><div class="wrap"><b>' + olderLink_text + '</b><h3>' + olderLinkTitle + '</h3></div></div>');
$('a.blog-pager-older-link > figure').load(olderLink + ' article .post-body img:first-of-type', function() {
var img = $(this).html();
var src = img.split('src="')[1];
var url = src.split('"')[0];
var resize = url.split('=')[0] + '=w100-h100-c';
$('a.blog-pager-older-link > figure').html('<img src="' + resize + '"/>').removeClass('loading');
});
});
var newerLink_text = $('a.blog-pager-newer-link').text();
var newerLink = $('a.blog-pager-newer-link').attr('href');
$('a.blog-pager-newer-link').load(newerLink + ' article h1', function() {
var newerLinkTitle = $('a.blog-pager-newer-link').text();
$('a.blog-pager-newer-link').html('<figure class="loading"></figure><div class="flex right"><div class="wrap"><b>' + newerLink_text + '</b><h3>' + newerLinkTitle + '</h3></div></div>');
$('a.blog-pager-newer-link > figure').load(newerLink + ' article .post-body img:first-of-type', function() {
var img = $(this).html();
var src = img.split('src="')[1];
var url = src.split('"')[0];
var resize = url.split('=')[0] + '=w100-h100-c';
$('a.blog-pager-newer-link > figure').html('<img src="' + resize + '"/>').removeClass('loading');
});
});
}
function pop() {
if ($('[target=pop-video]').length) {
$pop_video_html = '\
<div id="pop-video" data-pop-title="Video" data-pop-width="960">\
<div class="video">\
<iframe allowfullscreen="true"></iframe>\
</div>\
</div>\
';
$($pop_video_html).appendTo('body');
}
$('[id*="pop-"]:not(".pop-loaded")').each(function() {
var $this = $(this),
$id = $this.attr('id'),
$pop_title = $this.attr('data-pop-title'),
$pop_width = $this.attr('data-pop-width'),
$pop_height = $this.attr('data-pop-height');
$this.wrap('<div class="pop"></div>');
$this.wrap('<div class="pop-wrap"></div>');
$this.addClass('pop-content pop-loaded');
var header = '\
<header class="pop-header">\
<div class="pop-title">\
<h3>\
' + $pop_title + '\
</h3>\
</div>\
<div class="pop-close">\
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>\
</div>\
</header>\
';
$this.closest('.pop-wrap').prepend(header);
if ($pop_width) {
$this.closest('.pop-wrap').css('width', $pop_width);
}
});
$('.pop-close').on('click', function() {
$(this).closest('.pop').removeClass('open');
$('body').removeClass('pop-open');
if ($('[id=pop-video] iframe').length) {
$('[id=pop-video] iframe').attr('src', '');
}
});
$(document).on('click', '[target*="pop-"]', function(e) {
e.preventDefault();
var $this = $(this),
pop_id = $this.attr('target'),
pop_title = ($this.attr('data-pop-title') ? $this.attr('data-pop-title') : $('#' + pop_id).attr('data-pop-title')),
pop_width = $this.attr('data-pop-width'),
pop_height = $this.attr('data-pop-height');
$this.closest('.pop').removeClass('open');
$('body').removeClass('pop-open');
if ($('#' + pop_id).length) {
$('body').addClass('pop-open');
$('#' + pop_id).closest('.pop').addClass('open');
if ($this.closest('.pop-content').length) {
$back_id = $this.closest('.pop-content').attr('id');
pop_title = '<a target="' + $back_id + '"><i class="pop-back"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg></i></a>' + pop_title;
}
if (pop_title) {
$('#' + pop_id).closest('.pop').find('.pop-title h3').html(pop_title);
}
$('[data-src]').each(function() {
var data_src = $(this).attr('data-src');
$(this).attr('src', data_src).removeAttr('data-src');
});
}
/* custom */
if (pop_id == 'pop-video') {
$href = $(this).attr('href');
var youtube_id = $href.split('/')[3];
if ($href.indexOf('https://www.youtube.com/watch?v=') >= 0) {
youtube_id = get_url_parameter('v', $href);
}
$('[id=pop-video] iframe').attr('src', 'https://www.youtube.com/embed/' + youtube_id + '?autoplay=1&showinfo=0');
}
});
$(document).on('click', '.pop.open', function() {
$(this).find('.pop-close').trigger('click');
});
$(document).on('click', '.pop-wrap', function(e) {
e.stopPropagation();
});
}
function lightbox() {
if ($('.lightbox-auto').length) {
$('.lightbox-auto').each(function() {
$('img', this).closest('a').each(function() {
$(this).addClass('lightbox');
})
});
}
if ($('.lightbox').length) {
var $html = '\
<div id="lightbox">\
<figure></figure>\
</div>\
';
$('body').append($html);
$(document).on('click', '.lightbox', function(e) {
e.preventDefault();
var $href = $(this).attr('href');
$('#lightbox').addClass('open');
$('#lightbox figure').addClass('loading');
$('#lightbox figure').html('<img src="' + $href + '"/>');
$('#lightbox figure img').on('load', function() {
$('#lightbox figure').removeClass('loading');
$(this).addClass('open');
});
});
$(document).on('click', '#lightbox', function(e) {
$('#lightbox').removeClass('open');
$('#lightbox img').remove();
});
$(window).on('scroll', function() {
$('#lightbox').removeClass('open');
$('#lightbox img').remove();
});
}
}
function lazyload() {
$('[data-bg]').each(function() {
var $this = $(this);
var url = $this.attr('data-bg');
$this.css('background-image', 'url(' + url + ')').removeAttr('data-bg');
});
$('[data-src]:not([lazy="true"])').each(function() {
var $this = $(this);
var window_height = $(window).height();
var scroll_top = $(window).scrollTop();
var window_bottom = scroll_top + window_height;
var $this_top = $this.offset().top;
$this.attr('data-offset-top', $this_top);
var url = $this.attr('data-src');
url = url.replace('1.bp.blogspot.com','lh3.googleusercontent.com');
url = url.replace('2.bp.blogspot.com','lh3.googleusercontent.com');
url = url.replace('3.bp.blogspot.com','lh3.googleusercontent.com');
url = url.replace('4.bp.blogspot.com','lh3.googleusercontent.com');
var tag_name = $this.prop('tagName').toLowerCase();
if ($this_top <= window_bottom) {
if (tag_name == 'img') {
$this.attr('src', url).removeAttr('data-src');
$this.attr('lazy','true');
// $this.attr('src', url).on('load', function() {
//     $this.removeAttr('data-src');
// });
} else if (tag_name == 'iframe') {
$this.attr('src', url).removeAttr('data-src');
$this.attr('lazy','true');
}
}
});
$(window).on('scroll', function() {
var window_height = $(window).height();
var scroll_top = $(window).scrollTop();
var window_bottom = scroll_top + window_height;
$('[data-src]:not([lazy="true"])').each(function() {
var $this = $(this);
var window_height = $(window).height();
var $this_top = $this.offset().top;
var url = $this.attr('data-src');
url = url.replace('1.bp.blogspot.com','lh3.googleusercontent.com');
url = url.replace('2.bp.blogspot.com','lh3.googleusercontent.com');
url = url.replace('3.bp.blogspot.com','lh3.googleusercontent.com');
url = url.replace('4.bp.blogspot.com','lh3.googleusercontent.com');
var tag_name = $this.prop('tagName').toLowerCase();
if ($this_top <= window_bottom) {
if (tag_name == 'img') {
$this.attr('src', url).removeAttr('data-src');
$this.attr('lazy','true');
// $this.attr('src', url).on('load', function() {
//     $this.removeAttr('data-src');
// });
} else if (tag_name == 'iframe') {
$this.attr('src', url).removeAttr('data-src');
$this.attr('lazy','true');
}
}
});
});
}
function gototop() {
  $("a[href='#top']").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
  });
}
function appfloat() {
var configMain = {elementFAB: document.querySelector("#app-float")};
window.addEventListener("scroll", function() {
        if (configMain.elementFAB && window.pageYOffset >= 150) {
            configMain.elementFAB.classList.add("visible")
        } else {
            configMain.elementFAB.classList.remove("visible")
        };
    });
}
