import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieModel } from '../../../../models/movie.model';

const selectMovies = createFeatureSelector<Array<MovieModel>>('movies');

export const getMovies = createSelector(selectMovies, state => state);
