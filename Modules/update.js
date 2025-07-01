import readline from "node:readline";
import { readDb, writeDb } from "./fileHelper.js";

export function handleUpdate(startMenu) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    new Promise((resolve) => {
        rl.question("Enter index to update: ", resolve);
    })
    .then((index) => {
        return new Promise((resolve) => {
            rl.question("Enter new JSON data: ", (json) => {
                resolve({ index, json });
            });
        });
    })
    .then(({ index, json }) => {
        return readDb().then((fileData) => ({ index, json, fileData }));
    })
    .then(({ index, json, fileData }) => {
        const arr = JSON.parse(fileData);
        arr[index] = JSON.parse(json);
        return writeDb(JSON.stringify(arr));
    })
    .then(() => console.log("Data updated successfully"))
    .finally(() => {
        rl.close();
        startMenu();
    });
}
