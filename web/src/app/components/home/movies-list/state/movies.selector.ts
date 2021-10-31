import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieModel } from '../../../../models/movie.model';
import { FeaturesEnum } from '../../../../state/features.enum';

const selectMovies = createFeatureSelector<Array<MovieModel>>(FeaturesEnum.Movies);

export const getMovies = createSelector(selectMovies, movies => movies);

export const getMovie = (movieId: number) => createSelector(selectMovies, movies => movies.find(({ id }) => id === +movieId));

export const sortMoviesByRating = (ascending: boolean) => createSelector(selectMovies, movies => {
    const shallowCopy = [...movies];
    return shallowCopy.sort(({ vote_average }, { vote_average: otherVoteAverage }) => {
        if (vote_average === otherVoteAverage) {
            return 0;
        }
        if (vote_average > otherVoteAverage) {
            return ascending ? -1 : 1;
        }
        return ascending ? 1 : -1;
    });
});

export const sortMoviesAlphabetically = (ascending: boolean) => createSelector(selectMovies, movies => {
    const shallowCopy = [...movies];
    return shallowCopy.sort(({ title }, { title: otherTitle }) => {
        const upperCaseTitle: string = title.toUpperCase();
        const upperCaseOtherTitle: string = otherTitle.toUpperCase();

        if (upperCaseTitle === upperCaseOtherTitle) {
            return 0;
        }
        if (upperCaseTitle > upperCaseOtherTitle) {
            return ascending ? -1 : 1;
        }
        return ascending ? 1 : -1;
    });
});
