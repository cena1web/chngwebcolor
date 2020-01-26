$('.color-box').click(function() {
  var idColor = $(this).css("background-color");
  var iddColor = $(this).css("color");
  var idddColor = $(this).css("border-color");
  var iddddColor = $(this).css("fill");
  var ibColor = $(this).hover("color");

  $(".top-bar-social #social a, .ticker .title, .ticker .post-tag, .lowerbar h2, .cloud-label-widget-content .label-count,.item .post-footer .share-box .post-labels .label-title,.comments .comments-content .icon.blog-author, .FollowByEmail .follow-by-email-inner .follow-by-email-submit, .contact-close, .contact-form-button-submit, #scroll, .pagenav .current, headbanger").css("background-color", idColor);
  $(".menu-tab li.active a, .switchom, .post-author, #fa-fa-calendar-o, #fa-fa-heart-o,.ticker .title .fa,.contsho h3 span,.index .post-labels a, .archive .post-labels a,.jugas_footer_copyright a,#fa-fa-comment, .entry-content a, .post-title, .b-color").css("color", iddColor)
$( ".menu-tab li a" ).click(function() {
  $( ".menu-tab li a" ).css("color", iddColor);
  $( ".menu-tab li.active a" ).css("color", "#48494d");});
$( "#menu ul > li > a, #navo-main a, .ticker .tyard-title a, .PopularPosts ul li a, .popup-link, .bottom-bar-social #social a.facebook, .bottom-bar-social #social a.twitter, .bottom-bar-social #social a.youtube, .bottom-bar-social #social a.instagram, .bottom-bar-social #social a.linkedin, .bottom-bar-social #social a.tumblr, .bottom-bar-social #social a.pinterest,#post-pager .blog-pager-older-link, #post-pager .blog-pager-newer-link, .comments .comments-content .user a, .BlogArchive #ArchiveList ul li a, .post-count" ).mouseover(function() {
  $( "#menu ul > li > a:hover, #navo-main a:hover, .ticker .tyard-title a:hover, .PopularPosts ul li a:hover, .popup-link:hover, .bottom-bar-social ul#social a:hover,#post-pager .blog-pager-older-link:hover, #post-pager .blog-pager-newer-link:hover, .comments .comments-content .user a:hover, .BlogArchive #ArchiveList ul li a:hover, .post-count:hover" ).css("color", iddColor);});
$("#menu ul > li > a, #navo-main a, .ticker .tyard-title a, .PopularPosts ul li a, #post-pager .blog-pager-older-link, #post-pager .blog-pager-newer-link").mouseout(function(){
  $("#menu ul > li > a, #navo-main a, .ticker .tyard-title a, .PopularPosts ul li a, #post-pager .blog-pager-older-link, #post-pager .blog-pager-newer-link").css("color", "#48494d");});;
$(".popup-link, .comments .comments-content .user a, .BlogArchive #ArchiveList ul li a, .post-count").mouseout(function(){
  $(".popup-link, .comments .comments-content .user a, .BlogArchive #ArchiveList ul li a, .post-count").css("color", "#000");});;
$(".bottom-bar-social #social a.facebook").mouseout(function(){
  $(".bottom-bar-social #social a.facebook").css("color", "#3b5998");});;
$(".bottom-bar-social #social a.twitter").mouseout(function(){
  $(".bottom-bar-social #social a.twitter").css("color", "#00aced");});;
$(".bottom-bar-social #social a.youtube").mouseout(function(){
  $(".bottom-bar-social #social a.youtube").css("color", "#cd201f");});;
$(".bottom-bar-social #social a.instagram").mouseout(function(){
  $(".bottom-bar-social #social a.instagram").css("color", "#c13584");});;
$(".bottom-bar-social #social a.linkedin").mouseout(function(){
  $(".bottom-bar-social #social a.linkedin").css("color", "#0077b5");});;
$(".bottom-bar-social #social a.tumblr").mouseout(function(){
  $(".bottom-bar-social #social a.tumblr").css("color", "#35465c");});;
$(".bottom-bar-social #social a.pinterest").mouseout(function(){
  $(".bottom-bar-social #social a.pinterest").css("color", "#bd081c");});;
 
$( ".cloud-label-widget-content .label-size, #scroll, .pagenav a" ).mouseover(function() {
  $( ".cloud-label-widget-content .label-size:hover, .pagenav a:hover" ).css("background-color", idColor);
  $( ".cloud-label-widget-content .label-size:hover span, #scroll:hover" ).css("background-color", "#48494d");});
$(".cloud-label-widget-content .label-size, #scroll, .pagenav a").mouseout(function(){
  $(".cloud-label-widget-content .label-size").css("background-color", "#f5f5f5");
  $(".pagenav a").css("background-color", "#48494d");
  $(".cloud-label-widget-content .label-size span, #scroll").css("background-color", idColor);});;

$( ".entry-content a" ).mouseover(function() { $( ".entry-content a:hover" ).css("color", "#dd2f2f");});
$(".entry-content a").mouseout(function(){ $(".entry-content a").css("color", idColor);});;

$( ".status-msg-wrap a" ).mouseover(function() { $( ".status-msg-wrap a:hover" ).css("color", idColor);});
$(".status-msg-wrap a").mouseout(function(){ $(".status-msg-wrap a").css("color", "#000");});;

$( ".top-bar-social #social a" ).mouseover(function() {
  $( ".top-bar-social #social a.facebook:hover" ).css("background-color", "#3b5998");
  $( ".top-bar-social #social a.twitter:hover" ).css("background-color", "#00aced");
  $( ".top-bar-social #social a.youtube:hover" ).css("background-color", "#cd201f");
  $( ".top-bar-social #social a.instagram:hover" ).css("background-color", "#c13584");
  $( ".top-bar-social #social a.linkedin:hover" ).css("background-color", "#0077b5");
  $( ".top-bar-social #social a.tumblr:hover" ).css("background-color", "#35465c");
  $( ".top-bar-social #social a.pinterest:hover" ).css("background-color", "#bd081c");});
$(".top-bar-social #social a").mouseout(function(){ $(".top-bar-social #social a").css("background-color", idColor);});;

 $(".top-bar,.comments .comments-content .inline-thread .comment-block, .gg, #privcy").css("border-color", idddColor);  
  $(".g, .small").css("fill", iddddColor); });

$(".switchom").on("click", function(){
$(".switcher").toggleClass("open");
});
