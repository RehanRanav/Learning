[1,2,3,4].forEach((i)=>{
    console.log(i);
});

let asyncForEach = async (array, cb) => {
    for (const value of array) {
        await new Promise(resolve => setTimeout(() => {
            cb(value); // Call the callback without passing a value
            resolve();
        }, 0));
    }
};

asyncForEach(['a', 'b', 'c', 'd'], function (i) {
    console.log(i);
});
