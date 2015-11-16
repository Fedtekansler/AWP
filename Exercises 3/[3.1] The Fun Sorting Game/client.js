// Attach event listener to all columns with a number
var cols = document.querySelectorAll('.block .number-field');
[].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', dragstart, false);
    col.addEventListener('dragleave', dragend, false);
});

var dropables = document.querySelectorAll('.block.active');
[].forEach.call(dropables, function(dropable) {
    dropable.addEventListener('drop', drop, false);
    dropable.addEventListener('dragover', dragover, false);
});

// TODO SET CLASS TO BLOCK FOR DESTINATION TILE

function dragend(event) {
    // TODO SET CLASS TO BLOCK ACTIVE FOR MOVED TILE
    event.className = "block active";
}

function dragover(event) {
    event.preventDefault();
}

function dragstart(event) {
    event.dataTransfer.setData("div", event.target.id);
}

function drop(event) {
    event.preventDefault(event);
    var data = event.dataTransfer.getData("div");
    event.target.appendChild(document.getElementById(data));
}

