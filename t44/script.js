/* Page Swap */

$("#thot-button,#mod-button,#fag-button,#odd-button,#no-button").click(function() { 
    var divToOpen = $(this).attr("id").replace("-button","");
    $("#thot,#mod,#fag,#odd,#no").hide();
    $("#"+divToOpen).show();
});


$(document).ready(function(){
  $(".check").click(function(){
      $(".hello").slideToggle();
      $(".content").slideToggle();
  });
});

