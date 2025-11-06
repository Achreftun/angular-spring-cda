import { createReducer, on } from "@ngrx/store";
import { CounterState } from "./counter.state";
import { addBy, decrement, increment, reset } from "./counter.action";

const initialState: CounterState = { valeur: 0, signe: 'nul' }

// les reducers ne modifient pas directement le state : elle retourne une nouvelle copie modifiée

export const counterReducer = createReducer(
    initialState,
    on(increment, state => ({ ...state, valeur: state.valeur + 1 })),
    on(decrement, state => ({ ...state, valeur: state.valeur - 1 })),
    on(reset, state => ({ ...state, valeur: 0 })),
    on(addBy, (state, { value }) => ({ ...state, valeur: state.valeur + value })),
)