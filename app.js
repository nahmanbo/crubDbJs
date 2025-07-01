import { readFile, writeFile } from "node:fs";
import readline from "node:readline";

function createReadline() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

function readDb(callback) {
    readFile("./DB/db.txt", "utf8", (err, fileData) => {
        const arr = JSON.parse(fileData);
        callback(arr);
    });
}

function writeDb(arr, callback) {
    writeFile("./DB/db.txt", JSON.stringify(arr), callback);
}

function showMenu() {
    console.log("\n=== Menu ===");
    console.log("1. Create");
    console.log("2. Read");
    console.log("3. Update");
    console.log("4. Delete");
    console.log("5. Exit");
}

function handleCreate() {
    const rl = createReadline();

    rl.question("Enter JSON data: ", (json) => {
        readDb((arr) => {
            const newObj = JSON.parse(json);
            arr.push(newObj);

            writeDb(arr, () => {
                console.log("Data added successfully");
                rl.close();
                startMenu();
            });
        });
    });
}

function handleRead() {
    readDb((arr) => {
        console.log(arr);
        startMenu();
    });
}

function startMenu() {
    const rl = createReadline();

    showMenu();

    rl.question("Choice: ", (choice) => {
        rl.close();

        switch (choice) {
            case "1":
                handleCreate();
                break;

            case "2":
                handleRead();
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
