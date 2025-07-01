import readline from "node:readline";
import { readDb, writeDb } from "./fileHelper.js";

export function handleCreate(startMenu) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

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