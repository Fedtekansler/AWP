// On load setup listeners and tiles.
setupTiles();
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
        if (checkWinCondition()) {
            var gamecount = parseInt(document.getElementById("gamecount").innerHTML) + 1;
            if (gamecount == 1) {
                localStorage.setItem("gamecount", gamecount);
            } else {
                localStorage.setItem("gamecount", parseInt(localStorage.getItem("gamecount")) + 1);
            }
            resetTiles();
        }
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

// Return true if game has been won
function checkWinCondition() {
    var boolean = true;
    var numbers = document.querySelectorAll('.block .number-field');
    var check = -1;
    [].forEach.call(numbers, function(number) {
        if (check < parseInt(number.id)) {
            check = parseInt(number.id);
        } else {
            boolean = false;
        }
    });
    return boolean;
}

// Get the games count and setup tiles with random number from 0 - 100.
function setupTiles() {
    document.getElementById("gamecount").innerHTML = localStorage.getItem("gamecount");
    var tiles = document.querySelectorAll('.block .number-field');
    [].forEach.call(tiles, function(tile) {
        var current = document.getElementById(tile.id);
        var number = Math.floor((Math.random() * 100) + 1);
        current.id = number;
        current.innerHTML = number;
    });
}


// Reset the tiles and setting the last tile to be the "Drop here" tile.
function resetTiles() {
    var last = document.getElementById("last");
    var currentActive = document.getElementsByClassName("block active")[0];

    if (last !== currentActive) {
        currentActive.appendChild(last.childNodes[3]);
    }
    last.className = "block edge active";
    currentActive.className = "block";

    setupTiles();
}