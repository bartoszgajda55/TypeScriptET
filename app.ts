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