//Pager
$(document).ready(function(){var e=$("a.blog-pager-older-link").attr("href");$("a.blog-pager-older-link").load(e+" .post-title:first",function(){var e=$("a.blog-pager-older-link").text();$("a.blog-pager-older-link").text(e)});var r=$("a.blog-pager-newer-link").attr("href");$("a.blog-pager-newer-link").load(r+" .post-title:first",function(){var e=$("a.blog-pager-newer-link:first").text();$("a.blog-pager-newer-link").text(e)})});
//Related Post Thumb
$("ul#related-summary li img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w150-h120-c/"))});
//Spoiler
$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("normal")})});
// Pop up
var postEl=document.getElementsByClassName("social-popup"),postCount=postEl.length;for(i=0;i<postCount;i++)postEl[i].addEventListener("click",function(e){var t=this.getAttribute("href"),o=screen.width/2-250,s=screen.height/2-250;window.open(t,"popUpWindow","width=500,height=500,left="+o+",top="+s+",resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes")});
//Pre Auto Selection
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
