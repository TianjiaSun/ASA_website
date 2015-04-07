$(document).ready(function() {

  $("#start_page").hide();
  $("#what_page").hide();
  $("#store_page").hide();
    $("#top_bar_id").show();
    $("#sign_header_id").show();

  $("#index_bn").click(function() {
    $("#index_page").show();
    $("#start_page").hide();
    $("#what_page").hide();
    $("#store_page").hide();
    $("#top_bar_id").show();
    $("#sign_header_id").show();
  });

  $("#what_bn").click(function() {
    $("#index_page").hide();
    $("#start_page").hide();
    $("#what_page").show();
    $("#store_page").hide();
    $("#top_bar_id").show();
    $("#sign_header_id").show();
  });

  $("#start_bn").click(function() {
    $("#index_page").hide();
    $("#start_page").show();
    $("#what_page").hide();
    $("#store_page").hide();
    $("#top_bar_id").hide();
    $("#sign_header_id").hide();
  });

  $("#store_bn").click(function() {
    $("#index_page").hide();
    $("#start_page").hide();
    $("#what_page").hide();
    $("#store_page").show();
    $("#top_bar_id").show();
    $("#sign_header_id").show();
  });
  
})
