$(document).ready(function() {
    $(document).on("submit", "#formvalues", function(e){
        //var data = $(this).serialize() + "& action=generate-string";
        var data = $(this).serialize();
        var url = "https://ellypost.com/courses/453/ajax-lab/actions.php";
        console.log(data);
        e.preventDefault();

        $.post(url, data)
            .done(function(response){
                try {
                    var result = JSON.parse(response);
                    $("#response").html(result.value);
                } catch(e) {
                    console.error(e);
                    $("#response").text(e);
                }
            })
            .fail(function(err){
                console.error(err);
                $("#response").text(err);
            });
    });
});
