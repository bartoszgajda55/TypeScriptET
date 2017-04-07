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

    static lastId: number = 0;

    constructor(
        private todos: Todo[]
        ) { }

    add(todo: Todo) {
        let newId = TodoService.getNextId();
    }  
    
    getAll() {
        return this.todos;
    }

    static getNextId() {
        return TodoService.lastId +=1;
    }
}