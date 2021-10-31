import { createAction, props } from '@ngrx/store';
import { MovieModel } from '../models/movie.model';

export const loadMovie = createAction(
    '[Movie Details] Load Movie',
    props<{ id: number }>()
);
export const loadMovieSuccess = createAction(
    '[Movie Details] Load Movie Success',
    props<{ selectedMovie: MovieModel }>()
);
export const loadMovieFailure = createAction(
    '[Movie Details] Load Movie Failure'
);
