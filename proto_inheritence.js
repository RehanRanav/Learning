
//prototype inheritance
console.log("---Prototype inheritance------------------------");
let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal  // use __proto__
};

// walk is taken from the prototype
rabbit.walk(); // Animal walk