const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n🌟 Welcome to the JavaScript Pattern Drawing Program!");
    console.log("Choose a pattern type:");
    console.log("1. Right-angled Triangle");
    console.log("2. Square with Hollow Center");
    console.log("3. Diamond");
    console.log("4. Left-angled Triangle");
    console.log("5. Hollow Square");
    console.log("6. Pyramid");
    console.log("7. Reverse Pyramid");
    console.log("8. Rectangle with Hollow Center");
    console.log("9. Exit\n");

    rl.question("Enter the number corresponding to your choice: ", (choice) => {
        choice = parseInt(choice, 10);

        if (choice >= 1 && choice <= 7) {
            rl.question("Enter the number of rows: ", (rows) => {
                rows = parseInt(rows, 10);
                if (rows > 0) {
                    drawPattern(choice, rows);
                } else {
                    console.log("❌ Invalid input. Please enter a positive number.");
                }
                askRestart();
            });
        } else if (choice === 8) {
            rl.question("Enter the width of the rectangle: ", (width) => {
                rl.question("Enter the height of the rectangle: ", (height) => {
                    width = parseInt(width, 10);
                    height = parseInt(height, 10);
                    if (width > 0 && height > 0) {
                        drawPattern(choice, width, height);
                    } else {
                        console.log("❌ Invalid input. Please enter positive numbers.");
                    }
                    askRestart();
                });
            });
        } else if (choice === 9) {
            console.log("👋 Thanks for using the program! Goodbye!");
            rl.close();
        } else {
            console.log("❌ Invalid choice! Please enter a number from 1 to 9.");
            showMenu();
        }
    });
}
function drawPattern(choice, rows, height = 0) {
    switch (choice) {
        case 1: // Right-angled Triangle
            for (let i = 1; i <= rows; i++) {
                let pattern = "";
                for (let j = 1; j <= i; j++) {
                    pattern += "*";
                }
                console.log(pattern);
            }
            break;

        case 2: // Square with Hollow Center
            for (let i = 1; i <= rows; i++) {
                let pattern = "";
                if (i === 1 || i === rows) {
                    for (let j = 1; j <= rows; j++) {
                        pattern += "*";
                    }
                } else {
                    pattern += "*";
                    for (let j = 1; j <= rows - 2; j++) {
                        pattern += " ";
                    }
                    pattern += "*";
                }
                console.log(pattern);
            }
            break;

        case 3: // Diamond
            for (let i = 1; i <= rows; i++) {
                let pattern = "";
                for (let j = 1; j <= rows - i; j++) {
                    pattern += " ";
                }
                for (let k = 1; k <= 2 * i - 1; k++) {
                    pattern += "*";
                }
                console.log(pattern);
            }
            break;

        case 4: // Left-angled Triangle
            for (let i = rows; i >= 1; i--) {
                let pattern = "";
                for (let j = 1; j <= i; j++) {
                    pattern += "*";
                }
                console.log(pattern);
            }
            break;

        case 5: // Hollow Square
            for (let i = 1; i <= rows; i++) {
                let pattern = "";
                if (i === 1 || i === rows) {
                    for (let j = 1; j <= rows; j++) {
                        pattern += "*";
                    }
                } else {
                    pattern += "*";
                    for (let j = 1; j <= rows - 2; j++) {
                        pattern += " ";
                    }
                    pattern += "*";
                }
                console.log(pattern);
            }
            break;

        case 6: // Pyramid
            for (let i = 1; i <= rows; i++) {
                let pattern = "";
                for (let j = 1; j <= rows - i; j++) {
                    pattern += " ";
                }
                for (let k = 1; k <= 2 * i - 1; k++) {
                    pattern += "*";
                }
                console.log(pattern);
            }
            break;

        case 7: // Reverse Pyramid
            for (let i = rows; i >= 1; i--) {
                let pattern = "";
                for (let j = 1; j <= rows - i; j++) {
                    pattern += " ";
                }
                for (let k = 1; k <= 2 * i - 1; k++) {
                    pattern += "*";
                }
                console.log(pattern);
            }
            break;

        case 8: // Rectangle with Hollow Center
                let pattern = "";
                for (let i = 0; i < width; i++) {
                    if (i === 0 || i === width - 1 || height === 1 || height === width) {
                        pattern += "*";
                    } else {
                        pattern += " ";
                    }
                }
                console.log(pattern);
                height--;
            break;
    }
}

function askRestart() {
    rl.question("\nDo you want to restart the program? (y/n): ", (restart) => {
        if (restart.toLowerCase() === "y") {
            showMenu();
        } else {
            console.log("👋 Thanks for using the JavaScript Pattern Drawing Program! Goodbye!");
            rl.close();
        }
    });
}

showMenu();