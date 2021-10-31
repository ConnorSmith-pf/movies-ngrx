import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeaturesEnum } from '../../../../state/features.enum';
import { MovieModel } from '../models/movie.model';

const selectMovie = createFeatureSelector<MovieModel>(FeaturesEnum.SelectedMovie);

export const getMovie = createSelector(selectMovie, movie => movie);
