function bubbleTest() {
    var scores = [60, 50, 60, 58, 54, 54,
                  58, 50, 52, 54, 48, 69,
                  34, 55, 90, 52, 44, 51,
                  69, 64, 66, 55, 52, 61,
                  46, 31, 57, 52, 44, 18,
                  41, 53, 90, 88, 51, 44];

    var costs = [.25, .27, .25, .25, .25 ,.25,
                 .33, .31, .25, .29, .27, .22,
                 .31, .25, .25, .33, .21, .25,
                 .25, .25, .28, .25, .24, .22,
                 .20, .25, .30, .25, .24, .25,
                 .25, .25, .27, .25, .26, .29];

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

    function getMostCostEffectiveSolution(scores, costs, highScore) {
        var cost = 100;
        var index;

        for (var i = 0; i < scores.length; i++) {
            if (scores[i] == highScore) {
                if (cost > costs[i]) {
                    cost = costs[i];
                    index = i;
                }
            }
        }
        return index;
    }

    var highScore = printAndGetScores(scores);
    var bestSolutions = getBestSolutions(scores, highScore);
    var mostCostEffectiveSolution = getMostCostEffectiveSolution(scores, costs, highScore) + 1;
    console.log("Number of Bubble Tests: " + scores.length);
    console.log("The high bubble score is: " + highScore);
    console.log("The tests with the high score are: " + bestSolutions);
    console.log("The bubble solution that was most cost effective was #" + mostCostEffectiveSolution);
}

bubbleTest();