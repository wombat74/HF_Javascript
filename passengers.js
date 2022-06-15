var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },
                   { name: "Dr. Evel", paid: true, ticket: "first class" },
                   { name: "Sue Property", paid: false, ticket: "coach" },
                   { name: "John Funcall", paid: true, ticket: "coach" },
                   { name: "Roxy Gonzalez", paid: false, ticket: "premium" },
                   { name: "Joanne Gonzalez", paid: true, ticket: "first class" },
                   { name: "Sophie Gonzalez", paid: false, ticket: "premium" },
                   { name: "Eddie Gonzalez", paid: true, ticket: "premium" } ];

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger); // get drink order
    var getFoodOrderFunction = createFoodOrder(passenger); // get drink order
    getDrinkOrderFunction();
    getFoodOrderFunction();
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // show movie
    getDrinkOrderFunction();
    // pick up trash
}

function createDrinkOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "first class") {
        orderFunction = function() {
            alert(passenger.name + ", would you like a cocktail or wine?");
        };
    } else if (passenger.ticket === "coach") {
        orderFunction = function() {
            alert(passenger.name + ", your choices are cola or water.");
        };
    } else {
        orderFunction = function() {
            alert(passenger.name + ", your choices are cola, water or wine.");  
        };
    }
    return orderFunction;
}

function createFoodOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "first class") {
        orderFunction = function() {
            alert(passenger.name + ", would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "coach") {
        orderFunction = function() {
            alert(passenger.name + ", your choices are peanuts or pretzels.");
        };
    } else {
        orderFunction = function() {
            alert(passenger.name + ", your choices are snack box or cheese plate.");  
        };
    }
    return orderFunction;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    var message = passenger.name

    if (passenger.paid) {
        message = message + " paid for their ticket."
    } else {
        message = message + " didn't pay for their ticket."
    }

    console.log(message);
    return false;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly list!");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid!!!!");
}

console.log(processPassengers(passengers, printPassenger));

//servePassengers(passengers);

