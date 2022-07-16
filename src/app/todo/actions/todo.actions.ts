import { Action, createAction, props } from "@ngrx/store";

export const AGREGAR_TODO = '[TODO] Agregar Todo';

// export class AgregarTodoAction implements Action {
//     readonly type = AGREGAR_TODO;

//     constructor(public texto: string) { }
// }

export const AgregarTodoAction = createAction(AGREGAR_TODO
    ,
    props<{ texto: string }>()
);

// export type Acciones = AgregarTodoAction;