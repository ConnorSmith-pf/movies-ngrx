import { createAction, props } from '@ngrx/store';
import { MovieListModel } from '../models/movie-list.model';
import { SortByValueModel } from '../models/sort-by-value.model';

export const loadMovies = createAction(
    '[Movie List] Load Movies',
    props<{ pageNumber: number }>()
);
export const loadMoviesSuccess = createAction(
    '[Movie List] Load Movies Success',
    props<{ movies: Array<MovieListModel> }>()
);
export const loadMoviesFailure = createAction(
    '[Movie List] Load Movies Failure'
);

export const setSortedBy = createAction(
    '[Movie List] Set Sort By',
    props<{ sortedBy: SortByValueModel }>()
);
