import { readFile, writeFile } from "node:fs";

export function readDb(callback) {
    readFile("./DB/db.txt", "utf8", (err, fileData) => {
        const arr = JSON.parse(fileData);
        callback(arr);
    });
}

export function writeDb(arr, callback) {
    writeFile("./DB/db.txt", JSON.stringify(arr), callback);
}