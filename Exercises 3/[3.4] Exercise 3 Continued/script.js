$(function() {
    loadSuppliesAjax("sample.json");

    $("#remove").click(function() {
        $("tbody").empty();
    });

    $("#new").click(function() {
        //create new row
        $("tbody").append("<tr><td></td><td></td><td></td></tr>");
        editRow();
    });

    editRow();

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

function editRow() {
    $("td").click(function(){
        //edit cell
        var currentCell = $(this);
        $(this).html("<input type='textarea' id='cell'>");
        $("#cell").focus();
        $("#cell").focusout(function() {
            currentCell.html($("#cell").val());
        });
    });
}

function addSupplies(suppliesJson){
	for(var i in suppliesJson){
		var supply = suppliesJson[i];
		$("tbody").append("<tr><td>"+supply.item+"</td><td>"+supply.location+"</td><td>"+supply.units+"</td></tr>");
	}
}

function loadSuppliesAjax(mapPath) {
	$("tbody").empty();
    var mapJson = jQuery.getJSON( mapPath, null, addSupplies);
}