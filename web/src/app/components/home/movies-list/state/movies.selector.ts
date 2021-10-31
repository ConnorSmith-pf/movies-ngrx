import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { MovieListModel } from '../models/movie-list.model';
import { FeaturesEnum } from '../../../../state/features.enum';
import { SortByValueModel } from '../models/sort-by-value.model';

const selectMovies = createFeatureSelector<Array<MovieListModel>>(FeaturesEnum.Movies);
const selectSortBy = createFeatureSelector<SortByValueModel>(FeaturesEnum.SortBy);

export const getSortBy = createSelector(selectSortBy, sortBy => sortBy ?? { viewValue: 'Default' });

export const getMovies = createSelector(selectMovies, movies => movies);

export const sortMoviesByRating = (ascending: boolean): MemoizedSelector<object, Array<MovieListModel>> => createSelector(selectMovies, movies => {
    const shallowCopy = [...movies];
    return shallowCopy.sort(({ vote_average }, { vote_average: otherVoteAverage }) => {
        if (vote_average === otherVoteAverage) {
            return 0;
        }
        if (vote_average > otherVoteAverage) {
            return ascending ? 1 : -1;
        }
        return ascending ? -1 : 1;
    });
});

export const sortMoviesAlphabetically = (ascending: boolean): MemoizedSelector<object, Array<MovieListModel>> => createSelector(selectMovies, movies => {
    const shallowCopy = [...movies];
    return shallowCopy.sort(({ title }, { title: otherTitle }) => {
        const upperCaseTitle: string = title.toUpperCase();
        const upperCaseOtherTitle: string = otherTitle.toUpperCase();

        if (upperCaseTitle === upperCaseOtherTitle) {
            return 0;
        }
        if (upperCaseTitle > upperCaseOtherTitle) {
            return ascending ? 1 : -1;
        }
        return ascending ? -1 : 1;
    });
});
