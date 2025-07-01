import readline from "node:readline";
import { readDb, writeDb } from "./fileHelper.js";

export function handleDelete(startMenu) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    new Promise((resolve) => {
        rl.question("Enter index to delete: ", resolve);
    })
    .then((index) => {
        return readDb().then((fileData) => ({ index, fileData }));
    })
    .then(({ index, fileData }) => {
        const arr = JSON.parse(fileData);
        if (index < 0 || index >= arr.length) {
            throw new Error("Invalid index");
        }
        arr.splice(index, 1);
        return writeDb(JSON.stringify(arr));
    })
    .then(() => console.log("Data deleted successfully"))
    .catch((err) => console.error("Error:", err.message))
    .finally(() => {
        rl.close();
        startMenu();
    });
}
