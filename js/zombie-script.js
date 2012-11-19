$(document).ready(function() {
    $("div.zone").hover(function(e) {
       $("div.zone").removeClass("full");             
       $(this).removeClass("zone").addClass("full");          
    }, function (e) {
        $(this).removeClass("full").addClass("zone");  
    });
    
});