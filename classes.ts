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

// Accessors
class SmartTodo {
    _state: TodoState;
    name: string;
    
    get state() {
        return this._state;
    }
    
    set state(newState) {
        this._state = newState;
    }
    
    constructor(name: string) {
        this.name = name;
    }
}

var todo3 = new SmartTodo("Pick up drycleaning");