import { createAction, props } from '@ngrx/store';
import { MovieModel } from '../../../../models/movie.model';

export const loadMovies = createAction(
    '[Movie List] Load Movies'
);
export const loadMoviesSuccess = createAction(
    '[Movie List] Load Movies Success',
    props<{ movies: Array<MovieModel> }>()
);
export const loadMoviesFailure = createAction(
    '[Movie List] Load Movies Failure'
);
export const sortMoviesByRating = createAction(
    '[Movie List] Sort Movies By Rating'
);
