import { MovieModel } from '../../../../models/movie.model';
import { Action, createReducer, on } from '@ngrx/store';
import { loadMoviesSuccess } from './movies.actions';

const defaultAppState: Array<MovieModel> = [];

const _reducer = createReducer(
    defaultAppState,
    on(loadMoviesSuccess, (state, { movies }) => movies.map(movie => movie))
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function movieReducer(state: Array<MovieModel> = defaultAppState, action: Action) {
    return _reducer(state, action);
}
