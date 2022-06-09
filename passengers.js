var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },
                   { name: "Dr. Evel", paid: true, ticket: "first class" },
                   { name: "Sue Property", paid: false, ticket: "coach" },
                   { name: "John Funcall", paid: true, ticket: "coach" },
                   { name: "Roxy Gonzalez", paid: false, ticket: "first class" },
                   { name: "Joanne Gonzalez", paid: true, ticket: "first class" },
                   { name: "Sophie Gonzalez", paid: false, ticket: "first class" },
                   { name: "Eddie Gonzalez", paid: true, ticket: "coach" } ];


function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function serveCustomer(passenger) {
    createDrinkOrder(passenger); // get drink order
    // get dinner order
    // pick up trash
}

function createDrinkOrder(passenger) {
    if (passenger.ticket === "first class") {
        alert("Would you like a cocktail or wine?");
    } else {
        alert("Your choices are cola or water.");
    }
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

