import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.state";


export const selectCartState = createFeatureSelector<CartState>('cart')

export const selectNombreProduit = createSelector(
    selectCartState,
    (state: CartState) => state.lignesCommandes ? state.lignesCommandes.length : 0
)

export const selectQuantiteTotale = createSelector(
    selectCartState,
    (state: CartState) => !state.lignesCommandes ? 0 : state.lignesCommandes.map(lc => lc.qteReservee).reduce((p, c) => (p ?? 0) + (c ?? 0), 0) ?? 0
)

