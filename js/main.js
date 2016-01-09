$(document).ready(function(){
    $("button").click(function(){
        $(this).addClass("animated pulse");
    });

    $("#new-quote").on("click", function() {

        $.getJSON("quotes.json", function(json) {

            console.log(json);
            var html;


        });

        $(".message").html(html);
    });
});