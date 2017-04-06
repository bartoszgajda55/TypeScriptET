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