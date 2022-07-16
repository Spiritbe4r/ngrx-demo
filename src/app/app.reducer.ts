import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todo/model/todo";
import * as fromTodo from "./todo/reducer/todo.reducer";



export interface AppState {
    todos: Todo[];
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
};