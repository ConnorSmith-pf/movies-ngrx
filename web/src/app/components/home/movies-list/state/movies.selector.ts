import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieModel } from '../../../../models/movie.model';
import { FeaturesEnum } from '../../../../state/features.enum';

const selectMovies = createFeatureSelector<Array<MovieModel>>(FeaturesEnum.Movies);

export const getMovies = createSelector(selectMovies, movies => movies);

export const getMovie = (movieId: number) => createSelector(selectMovies, movies => movies.find(({ id }) => id === +movieId));

export const sortMoviesByRating = createSelector(selectMovies, movies => {
    return movies.sort(({ vote_average }, { vote_average: otherVoteAverage }) => {
        if (vote_average === otherVoteAverage) {
            return 0;
        }
        if (vote_average > otherVoteAverage) {
            return 1;
        }
        return -1;
    });
});

export const sortMoviesAlphabetically = createSelector(selectMovies, movies => {
    return movies.sort(({ title }, { title: otherTitle }) => {
        const upperCaseTitle: string = title.toUpperCase();
        const upperCaseOtherTitle: string = otherTitle.toUpperCase();

        if (upperCaseTitle === upperCaseOtherTitle) {
            return 0;
        }
        if (upperCaseTitle > upperCaseOtherTitle) {
            return 1;
        }

        return -1;
    });
});
