import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieModel } from '../../../models/movie.model';
import { AppState } from '../../../state/app.state';
import { getMovies, sortMoviesAlphabetically } from './state/movies.selector';
import { loadMovies } from './state/movies.actions';

@Component({
    selector: 'movies-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
    public moviesList$: Observable<Array<MovieModel>>;

    private ascendDescendSwitch: boolean = false;

    constructor(private readonly store: Store<AppState>) {
        this.moviesList$ = this.store.select(getMovies);
    }

    public trackById(index: number, item: MovieModel): number {
        return item.id as number;
    }

    public ngOnInit(): void {
        this.store.dispatch(loadMovies());
    }

    public sortBy(): void {
        this.ascendDescendSwitch = !this.ascendDescendSwitch;
        this.moviesList$ = this.store.select(sortMoviesAlphabetically(this.ascendDescendSwitch));
    }
}
