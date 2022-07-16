import { createReducer, on } from '@ngrx/store';
import * as fromTodo from "../actions/todo.actions";
import { Todo } from "../model/todo";

const initialState: Todo[] = [];


const _todoReducer = createReducer(
    initialState,
    on(fromTodo.AgregarTodoAction, (state, action): Todo[] => {
        const todo = new Todo(action.texto);
        return [...state, todo];
    })

);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}

// export function todoReducer(state = initialState,
//     action: fromTodo.AgregarTodoAction): Todo[] {

//     switch (action.type) {

//         case fromTodo.AGREGAR_TODO:
//             const todo = new Todo(action.texto);
//             return [...state, todo];

//     }
// }