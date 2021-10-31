import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadMovieSuccess } from './movie-details.actions';
import { MovieModel } from '../models/movie.model';

const _selectedMovieReducer: ActionReducer<MovieModel> = createReducer(
    {} as MovieModel,
    on(loadMovieSuccess, (state, { selectedMovie }) => selectedMovie)
);

export function selectedMovieReducer(state: MovieModel, action: Action): MovieModel {
    return _selectedMovieReducer(state as MovieModel, action);
}
