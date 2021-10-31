import { MovieListModel } from '../models/movie-list.model';
import { Action, createReducer, on } from '@ngrx/store';
import { loadMoviesSuccess, setSortedBy } from './movies.actions';
import { SortByValueModel } from '../models/sort-by-value.model';

//TODO: Investigate, is this inefficient?

const _movieListReducer = createReducer(
    [] as Array<MovieListModel>,
    on(loadMoviesSuccess, (state: Array<MovieListModel>, { movies }) => [...state, ...movies.map(movie => movie)]),
);

const _sortedByReducer = createReducer(
    { viewValue: 'Default' },
    on(setSortedBy, (state: SortByValueModel, { sortedBy }) => sortedBy)
);

export function movieListReducer(state: Array<MovieListModel>, action: Action): Array<MovieListModel> {
    return _movieListReducer(state, action);
}

export function sortedByReducer(state: SortByValueModel, action: Action): SortByValueModel {
    return _sortedByReducer(state, action);
}
