import { MovieModel } from '../../../../models/movie.model';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadMoviesSuccess } from './movies.actions';

const defaultAppState: Array<MovieModel> = [];

const _reducer: ActionReducer<Array<MovieModel>> = createReducer(
    defaultAppState,
    on(loadMoviesSuccess, (state, { movies }) => movies.map(movie => movie))
);

export function movieReducer(state: Array<MovieModel> = defaultAppState, action: Action): Array<MovieModel> {
    return _reducer(state, action);
}
