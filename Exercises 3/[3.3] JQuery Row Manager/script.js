$(function() {
    $("#remove").click(function() {
        $("tbody").empty();
    });
    // ...

    //3.4
    $("#new").click(function() {
        //create new row
        $("tbody").append("<tr><td></td><td></td><td></td></tr>");
    });

    $("td").click(function(){
        //edit cell
    });

    $("#hide").change(function() {
        if (this.checked) {
            $("thead tr td").last().hide();
            $("tbody td:nth-child(3)").hide();
        } else {
            $("thead tr td").last().show();
            $("tbody td:nth-child(3)").show();
        }
    });
});
