var cadi = {
    make: "Cadillac",
    model: "CTS-V",
    year: 2023,
    color: "black",
    passengers: 5,
    convertible: false,
    mileage: 5,
    fuel: 0,

    start: function() {
        if (this.fuel == 0) {
            alert("You need to add gas to start this " + this.make);
        } else {
            this.started = true;
            alert("The " + this.make + " is started now!")
        }
    },

    stop: function() {
        this.started = false;
        alert("The car is off now!");
        for (var prop in cadi) {
            console.log(prop + ": " + cadi[prop])
        }
    },

    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " goes zoom zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Uh oh, this " + this.make + " is out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    },

    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};

cadi.start();
cadi.addFuel(2);
cadi.start();
cadi.drive();
cadi.drive();
cadi.drive();
cadi.stop();