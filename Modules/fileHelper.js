import { readFile, writeFile } from "node:fs";

export function readDb() {
    return new Promise((resolve, reject) => {
        readFile("./DB/db.txt", "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

export function writeDb(data) {
    return new Promise((resolve, reject) => {
        writeFile("./DB/db.txt", data, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}
