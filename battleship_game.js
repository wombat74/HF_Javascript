
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

view.displayHit("00");
view.displayMiss("01");
view.displayMiss("02");
view.displayMessage("HI THERE!");