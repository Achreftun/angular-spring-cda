import { createReducer, on } from "@ngrx/store";
import { CartState } from "./cart.state";
import { add, remove, reset } from "./cart.action";

const initialState: CartState = { lignesCommandes: [] }


export const cartReducer = createReducer(
    initialState,
    on(add, (state, { lc }) => {
        const lcs = [...state.lignesCommandes, lc]
        return ({ ...state, lignesCommandes: lcs })
    }),
    on(remove, (state, { lc }) => {
        const lcs = state.lignesCommandes.filter(elt => elt.produit.nom != lc.produit.nom)
        return ({ ...state, lignesCommandes: lcs })
    }),
    on(reset, state => ({ ...state, lignesCommandes: [] })),
)