$(function() {
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