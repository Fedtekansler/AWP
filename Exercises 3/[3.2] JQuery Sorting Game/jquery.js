$(function() {
    setupTiles();
    handleDragAndDrop();
});

function handleDragAndDrop() {
    $(".block").draggable({
        revert: "invalid",
        helper: "clone",
        stop: function(event, ui) {
            if ($(".active").length == 0) {
                $(this).find(".number-field").remove();
                $(this).closest("div").addClass("active");
                if (checkWinCondition()) {
                    var gamecount = parseInt($("#gamecount").text());
                    if (gamecount == 0) {
                        localStorage.setItem("gamecount", 0);
                    }
                    localStorage.setItem("gamecount", parseInt(localStorage.getItem("gamecount")) + 1);
                    resetTiles();
                }
                handleDragAndDrop();
            }
        }
    });

    $(".active").draggable("disable");

    $(".active").droppable({
        drop: function(event, ui) {
            $(".active").append(ui.helper.find(".number-field"));
            $(this).draggable("enable");
            $(".active").removeClass("active");
            $(this).droppable("destroy");
        }
    });
}

function checkWinCondition() {
    var check = -1;
    var boolean = true;
    $(".block .number-field").each(function() {
        var current = parseInt($(this).text());
        if (check >= current) {
            boolean = false;
        }
        check = current;
    });
    return boolean;
}

function setupTiles() {
    var gamecount = localStorage.getItem("gamecount");
    if (gamecount !== NaN) {
        $("#gamecount").text(gamecount);
    }
    $(".block .number-field").each(function() {
        var number = Math.floor((Math.random() * 100) + 1);
        $(this).text(number);
    });
}

function resetTiles() {
    var last = $("#last");
    var currentActive = $(".active");

    if (last[0] !== currentActive[0]) {
        currentActive.append(last[0].childNodes[3]);
    }

    last[0].className = "block edge active";
    currentActive[0].className = "block";
    setupTiles();
}