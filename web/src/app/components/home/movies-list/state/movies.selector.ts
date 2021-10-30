import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieModel } from '../../../../models/movie.model';
import { FeaturesEnum } from '../../../../state/features.enum';

const selectMovies = createFeatureSelector<Array<MovieModel>>(FeaturesEnum.Movies);

export const getMovies = createSelector(selectMovies, movies => movies);
