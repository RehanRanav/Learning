//optional chaining
console.log("---optional chaining---");

let user = {
    name: {
        firstName: "John",
    },
    lastName: 'Doe',
    age: 36
}

console.log(user?.name?.lastName);
console.log(user?.lastName);
console.log(user?.age);
console.log(user?.name?.firstName);