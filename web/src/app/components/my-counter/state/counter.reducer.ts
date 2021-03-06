import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer: ActionReducer<number> = createReducer(
    initialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(reset, () => 0),
);

export function counterReducer(state: number | undefined, action: Action): number {
    return _counterReducer(state, action);
}

