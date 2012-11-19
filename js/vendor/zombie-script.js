$(document).ready(function() {
    $("div.zone").hover(function(e) {
        $("div.zone").hide();
        console.log(this);
        console.log(e.target);
console.log(e.target.class);
    });
});