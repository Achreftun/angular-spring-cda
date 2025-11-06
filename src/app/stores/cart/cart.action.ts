import { createAction, props } from "@ngrx/store";
import { LigneCommande } from "../../models/ligne-commande";


export const add = createAction('[Cart] Add', props<{ lc: LigneCommande }>())
export const remove = createAction('[Cart] Remove', props<{ lc: LigneCommande }>())
export const reset = createAction('[Cart] Reset')
