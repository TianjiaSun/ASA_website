$(document).ready(function() {

  $("#start_page").hide();
  $("#what_page").hide();
  $("#store_page").hide();

  $("#index_bn").click(function() {
    $("#index_page").show();
    $("#start_page").hide();
    $("#what_page").hide();
    $("#store_page").hide();
  });

  $("#what_bn").click(function() {
    $("#index_page").hide();
    $("#start_page").hide();
    $("#what_page").show();
    $("#store_page").hide();
  });

  $("#start_bn").click(function() {
    $("#index_page").hide();
    $("#start_page").show();
    $("#what_page").hide();
    $("#store_page").hide();
  });

  $("#store_bn").click(function() {
    $("#index_page").hide();
    $("#start_page").hide();
    $("#what_page").hide();
    $("#store_page").show();
  });
  
})
