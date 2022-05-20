function bubbleTest() {
    var scores = [60, 50, 60, 58, 54, 54,
                  58, 50, 52, 54, 48, 69,
                  34, 55, 90, 52, 44, 51,
                  69, 64, 66, 55, 52, 61,
                  46, 31, 57, 52, 44, 18,
                  41, 53, 90, 88, 51, 44];

    function printAndGetScores(scores) {
        
        var highScore = 0;
        var output;

        for (var i = 0; i < scores.length; i++) {
            output = "Bubble solution # " + i + " score: " + scores[i];
            console.log(output);

            if (scores[i] > highScore) {
                highScore = scores[i];
            }
        }
        return highScore;
    }

    function getBestSolutions(scores, highScore) {
        var bestSolutions = [];

        for (var i = 0; i < scores.length; i++) {
            if (scores[i] == highScore) {
                bestSolutions.push(i + 1);
            }
        }
        return bestSolutions;
    }

    var highScore = printAndGetScores(scores);
    console.log("Number of Bubble Tests: " + scores.length);
    console.log("The high bubble score is: " + highScore);
    console.log("The tests with the high score are: " + getBestSolutions(scores, highScore));
}

bubbleTest();