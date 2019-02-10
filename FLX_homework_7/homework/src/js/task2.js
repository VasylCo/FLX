var ifPlay = confirm("Do you want to play a game?");
var max = 5;
var prize = 0;
var gold = 10;
var silver = ~~(gold / 2);
var bronze = ~~(silver / 2);
var mainGame = true;
var nextLevel = false;
if (!ifPlay) {
    alert("You did not become a millionaire, but can.");
} else {
    mainGame:
    while (mainGame) {
        var number = Math.floor(Math.random() * (max + 1));
        for (var count = 1; count <= 3; count++) {
            var guess;
            if (nextLevel) {
                var attempt = 3 - count + 1;
                var possible;
                switch (count) {
                    case 1:
                        possible = gold;
                        break;
                    case 2:
                        possible = silver;
                        break;
                    case 3:
                        possible = bronze;
                        break;
                    default:
                        possible = gold;
                }
                guess = parseInt(prompt("Enter a number fron 0 to" + max + "\nAttempts left: " + attempt +
                    "\nTotal prize: " + prize + "\nPossible prize on current attempt: " + possible));
            } else {
                guess = parseInt(prompt("Please, guess number from 0 to " + max + "!"));
            }
            if (guess === number) {
                switch (count) {
                    case 1:
                        prize += gold;
                        break;
                    case 2:
                        prize += silver;
                        break;
                    case 3:
                        prize += bronze;
                        break;
                    default:
                        prize += 0;
                }
                nextLevel = confirm("Congratulation! Your prize is: " + prize + ". Do you want to continue?");
                if (!nextLevel) {
                    alert("Thank you for a game. Your prize is: " + prize);
                    var isWant = confirm("Do you want to play again?");
                    if (isWant) {
                        max = 5;
                        prize = 0;
                        gold = 10;
                        silver = 5;
                        bronze = 2;
                        mainGame = true;
                        nextLevel = false;
                    } else {
                        mainGame = false;
                    }
                    continue mainGame;
                } else {
                    max *= 2;
                    gold *= 3;
                    silver = ~~(gold / 2);
                    bronze = ~~(silver / 2);
                }
                break;
            }
            if (count === 3 && guess !== number) {
                alert("Thank you for a game. Your prize is: " + prize);
                mainGame = confirm("Do you want to play again?");
                max = 5;
                prize = 0;
                gold = 10;
                silver = ~~(gold / 2);
                bronze = ~~(gold / 2);
                nextLevel = false;
            }
        }
    }
}