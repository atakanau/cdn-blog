//CSS Ready
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("//fonts.googleapis.com/css?family=Open+Sans:400italic,400,700");loadCSS("//fonts.googleapis.com/css?family=Roboto+Condensed:400,700");loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");loadCSS("https://atakanau.github.io/cdn-blog/css/style.css");
