import { createAction, props } from "@ngrx/store";

// Une action ne modifie pas le store, elle spécifie un nom d'évènement et s'il a besoin de paramètre

export const increment = createAction('[Counter] Increment')
export const decrement = createAction('[Counter] Decrement')
export const reset = createAction('[Counter] Reset')
export const addBy = createAction('[Counter] Add By', props<{ value: number}>())