/* global.js */
window.onload = function() {
lazyimg();
darkmode_head();
darkmode();
avatar();
etc();
pop();
lazyload();
popwin();
lightbox();
gototop();
};
function lazyimg() {
/*! lazysizes - v5.3.2 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
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
