$(function() {

    $(".block").draggable({
        revert: "invalid",
        helper: "clone",
        stop: function(event, ui) {
            $(this)[0].className = "block active";
            event.target.childNodes[3].remove();
        }
    });

    $(".block.active").draggable("disable");

    $(".block.active").droppable({
       drop: function(event, ui) {
           $(this)[0].className = "block";
           $(this).append(ui.helper.find(".number-field"));
       }
    });
});
