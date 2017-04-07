var container = document.getElementById('container');


// Default Parameters
function countdown(initial, final = 0, interval = 1) {
    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
countdown(10, 4, 2);

// Template Strings
var todo = {
    id: 123,
    name: 'Test',
    completed: true
}

var displayName = `Todo #${todo.id}`;
container.innerHTML = `
    <p>${todo.id}</p>
    <p>${todo.name}</p>
    <p>${todo.completed ? "Yep" : "Nope"}</p>
`;

// Let and Const
for (var x = 0; x <= 5; x++) {
    var counter = x;
    // let counter2 = x;
    // const counter3 = x;
    // const counter3 = x + 1;
    //Cannot change const value
}
console.log(counter);
// console.log(counter2); Not possible when using let

// For of loops
var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham"
];
// Old Style
for (var index in array) {
    var value = array[index];
    console.log(`${index}: ${value}`);
}
// New Style
for (var value of array) {
    console.log(`${value}`);
}

// Arrow Functions (Lambdas)
function Counter(el) {

    this.count = 0;

    el.innerHTML = this.count;

    el.addEventListener('click', 
        () => {
            this.count += 1;
            el.innerHTML = this.count;
        })
}

new Counter(container);

var filtered = [1, 2 ,3].filter((x) => x > 0);

// Destructuring
var array2 = [123, "Pick up drycleaning", false];
var [id, title, completed] = array;
// Equal to var id = array[0], title = array[1], ...

var todo2 = {
    id2: 123,
    title2: "Pick up drycleaning",
    completed2: false
}
var {id2, title2, completed2} = todo2;
// Same but for object