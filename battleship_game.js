
var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messagearea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}

}; 

var model = {
    boardSize: 7,  // The grid size of the board
    numShips: 3,   // The number of ships on the play board
    shipLength: 3, // Then length of the ship
    shipSunk: 0,   // Counts the number of ships that are sunk

    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
            { locations: ["24", "34", "44"], hits: ["", "", ""] },
            { locations: ["10", "11", "12"], hits: ["", "", ""] }],

    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    this.shipSunk++;
                    view.displayMessage("You sank my battleship!");
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed...");
        return false;
    },

    isSunk: function(ship) {
        for (var i = 0; i <= this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

var controller = {
    guesses: 0,

    processGuess: function(guess) {
        // DO STUFF
    },

    parseGuess: function(guess) {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        if (guess === null || guess.length !== 2) {
            alert("Oops, please enter a letter and number on the board.");
        } else {
            var firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert("Oops, that isn't on the board.");
            } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert("Oops, that's off the board.");
            } else {
                return row + column;
            }
        }
        return null;
    }

};

model.fire("53");

model.fire("06");
model.fire("16");
model.fire("26");

model.fire("34");
model.fire("24");
model.fire("44");

model.fire("12");
model.fire("11");
model.fire("10");

// console.log(controller.parseGuess("A0"));
// console.log(controller.parseGuess("B6"));
// console.log(controller.parseGuess("G3"));
// console.log(controller.parseGuess("H0"));
// console.log(controller.parseGuess("A7"));
// console.log(controller.parseGuess("Z9"));