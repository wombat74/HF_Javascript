var words = "bottles";
var word = "bottle";

var count = 99;

while (count > 0) {
    console.log(count + " " + words + " of beer on the wall");
    console.log(count + " " + words + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;

    if (count == 1) {
        console.log(count + " " + word + " of beer on the wall.");
    } else if(count > 0) {
        console.log(count + " " + words + " of beer on the wall.");
    } else {
        console.log(count + " " + words + " of beer on the wall.");
    }
}