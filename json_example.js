let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log("---JSON FORMAT ---");
console.log(json);

//convert back to object    

console.log("---OBJECT FORMAT ---");
console.log(JSON.parse(json));