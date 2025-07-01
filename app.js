import readline from "node:readline";
import { handleCreate } from "./Modules/create.js";
import { handleRead } from "./Modules/read.js";
import { handleUpdate } from "./Modules/update.js";
import { handleDelete } from "./Modules/delete.js";

function showMenu() {
    console.log("\n=== Menu ===");
    console.log("1. Create");
    console.log("2. Read");
    console.log("3. Update");
    console.log("4. Delete");
    console.log("5. Exit");
}

function startMenu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    showMenu();

    rl.question("Choice: ", (choice) => {
        rl.close();

        switch (choice) {
            case "1":
                handleCreate(startMenu);
                break;
            case "2":
                handleRead(startMenu);
                break;
            case "3":
                handleUpdate(startMenu);
                break;
            case "4":
                handleDelete(startMenu);
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
