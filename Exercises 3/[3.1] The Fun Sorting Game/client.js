// Attach event listener to all columns with a number
var cols = document.querySelectorAll('.block .number-field');
[].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', dragstart, false);
});

var dropables = document.querySelectorAll('.block .dropable-area');
[].forEach.call(dropables, function(dropable) {
    dropable.addEventListener('drop', drop, false);
    dropable.addEventListener('dragover', dragover, false);
});

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

