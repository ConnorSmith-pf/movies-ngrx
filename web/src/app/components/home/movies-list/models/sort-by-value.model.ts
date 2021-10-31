import { MemoizedSelector } from '@ngrx/store';
import { MovieListModel } from './movie-list.model';

export interface SortByValueModel {
    ascending?: boolean;
    sortFunction?: (ascending: boolean) => MemoizedSelector<object, Array<MovieListModel>>;
    viewValue: string;
}
