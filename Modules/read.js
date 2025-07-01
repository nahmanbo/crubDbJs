import { readDb } from "./fileHelper.js";

export function handleRead(startMenu) {
    readDb((arr) => {
        console.log(arr);
        startMenu();
    });
}
