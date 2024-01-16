//Javascript Promises and async and await
console.log("---Javascript Promises and async and await---");

let myDisplay = async () => {
    let myPromise = new Promise(() => {
        setTimeout(() => {
            console.log("Hello");
        })
    });
    console.log(await myPromise);
}
myDisplay();