import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable, pairwise, tap, throttleTime } from 'rxjs';
import { MovieListModel } from './models/movie-list.model';
import { AppState } from '../../../state/app.state';
import { getMovies, getSortBy, sortMoviesAlphabetically, sortMoviesByRating } from './state/movies.selector';
import { loadMovies, setSortedBy } from './state/movies.actions';
import { MatSelectChange } from '@angular/material/select';
import { ScrollDispatcher } from '@angular/cdk/overlay';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { SortByValueModel } from './models/sort-by-value.model';

@Component({
    selector: 'movies-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, AfterViewInit {
    @ViewChild(CdkVirtualScrollViewport)
    public virtualScroll!: CdkVirtualScrollViewport;
    public sortBySelect: Array<SortByValueModel> = [
        { viewValue: 'Default' },
        { ascending: true, sortFunction: sortMoviesAlphabetically, viewValue: 'Title, A - Z' },
        { ascending: false, sortFunction: sortMoviesAlphabetically, viewValue: 'Title, Z - A' },
        { ascending: true, sortFunction: sortMoviesByRating, viewValue: 'Vote Average, Smallest First' },
        { ascending: false, sortFunction: sortMoviesByRating, viewValue: 'Vote Average, Highest First' },
    ];
    public sortedBy$: Observable<SortByValueModel> = this.state.select(getSortBy);
    public moviesList$: Observable<Array<MovieListModel>> = this.state.select(getMovies);

    private pageNumber: number = 0;

    constructor(private readonly state: Store<AppState>,
                private readonly scrollDispatcher: ScrollDispatcher) {
    }

    public ngOnInit(): void {

        this.fetchNextPage();
    }

    public ngAfterViewInit(): void {
        this.scrollDispatcher.scrolled().pipe(
            map(() => this.virtualScroll.measureScrollOffset('bottom')),
            pairwise(),
            filter(([y1, y2]) => (y2 < y1 && y2 < 370)),
            throttleTime(200),
            tap(() => this.fetchNextPage())
        ).subscribe();
    }

    public compareFn(c1: SortByValueModel, c2: SortByValueModel): boolean {
        return c1 && c2 ? c1.viewValue === c2.viewValue : c1 === c2;
    }

    public trackById(index: number, item: MovieListModel): number {
        return item.id as number;
    }


    public sortBy({ value }: MatSelectChange): void {
        const sortedBy = value;

        this.state.dispatch(setSortedBy({ sortedBy }));

        if (sortedBy.sortFunction && sortedBy.ascending !== undefined) {
            this.moviesList$ = this.state.select(sortedBy.sortFunction(sortedBy.ascending));
            return;
        }

        this.moviesList$ = this.state.select(getMovies);
    }

    private fetchNextPage(): void {
        this.pageNumber++;
        this.state.dispatch(loadMovies({ pageNumber: this.pageNumber }));
    }
}
