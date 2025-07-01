import { readDb } from "./fileHelper.js";

export function handleRead(startMenu) {
    readDb()
        .then((fileData) => {
            const arr = JSON.parse(fileData);
            console.log(arr);
        })
        .catch((err) => {
            console.error("Error:", err.message);
        })
        .finally(() => {
            startMenu();
        });
}
