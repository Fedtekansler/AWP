// On load setup listeners
attachListeners();

// Container for source element.
var srcParent = "";

function dragover(event) {
    event.preventDefault();
}

function dragstart(event) {
    /*
     * Store the source element
     * If another element should be added to this one
     */
    srcParent = event.srcElement.parentNode;

    // Store the source number to be able to move it to another block.
    event.dataTransfer.setData("div", event.target.id);
}

function drop(event) {
    event.preventDefault(event);

    // Get the data about destination and element to insert.
    var data = event.dataTransfer.getData("div");
    var parent = event.target.parentNode;

    /* Should only move element if "Drop here" is displayed
     * Update classnames to display new "Drop here".
     * Update listeners 
     * Append the new element.
     */
    if (parent.className == "block active" || parent.className == "block edge active") {
        parent.className = "block";
        srcParent.className = "block active";
        attachListeners();

        parent.appendChild(document.getElementById(data));
    }
}

function attachListeners() {
    // Attach event listener to all columns with a number
    var cols = document.querySelectorAll('.block .number-field');
    [].forEach.call(cols, function(col) {
        col.addEventListener('dragstart', dragstart, false);
    });

    // Make the "Drop here" zones dropable.
    var dropables = document.querySelectorAll('.block.active');
    [].forEach.call(dropables, function(dropable) {
        dropable.addEventListener('drop', drop, false);
        dropable.addEventListener('dragover', dragover, false);
    });
}

