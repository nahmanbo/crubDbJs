import readline from "node:readline";

function createReadline() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

function startMenu() {
    const rl = createReadline();

    console.log("\n=== Menu ===");
    console.log("1. Create");
    console.log("2. Write");
    console.log("3. Update");
    console.log("4. Delete");
    console.log("5. Exit");

    rl.question("Choice: ", (choice) => {
        rl.close();

        switch (choice) {
            case "1":
                console.log("You chose Create");
                startMenu();
                break;
            case "2":
                console.log("You chose Write");
                startMenu();
                break;
            case "3":
                console.log("You chose Update");
                startMenu();
                break;
            case "4":
                console.log("You chose Delete");
                startMenu();
                break;
            case "5":
                console.log("Goodbye!");
                break;
            default:
                console.log("Invalid choice");
                startMenu();
        }
    });
}

startMenu();
