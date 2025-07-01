import readline from "node:readline";
import { readDb, writeDb } from "./fileHelper.js";

export function handleCreate(startMenu) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    new Promise((resolve) => {
        rl.question("Enter JSON data: ", resolve);
    })
    .then((json) => {
        return readDb().then((fileData) => ({ json, fileData }));
    })
    .then(({ json, fileData }) => {
        const arr = JSON.parse(fileData);
        const newObj = JSON.parse(json);
        arr.push(newObj);
        return writeDb(JSON.stringify(arr));
    })
    .then(() => console.log("Data added successfully"))
    .catch((err) => console.error("Error:", err.message))
    .finally(() => {
        rl.close();
        startMenu();
    });
}
