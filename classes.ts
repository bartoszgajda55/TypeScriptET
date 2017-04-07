interface Todo {
    name: string;
    state: TodoState;
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

// Definig class
class TodoService {

    constructor(
        private todos: Todo[]
        ) { }

    getAll() {
        return this.todos;
    }
}