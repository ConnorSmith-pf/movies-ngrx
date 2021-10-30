import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../state/app.state';
import { Store } from '@ngrx/store';
import { Observable, take, tap } from 'rxjs';
import { MovieModel } from '../../../models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { getMovie } from '../movies-list/state/movies.selector';

@Component({
    selector: 'movies-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
    public movieDetails$: Observable<MovieModel | undefined> | undefined;

    constructor(private readonly store: Store<AppState>,
                private readonly route: ActivatedRoute) {
        this.route.params.pipe(
            take(1),
            tap(({ id }) => this.movieDetails$ = this.store.select(getMovie(id)))
        ).subscribe();
    }

    public ngOnInit(): void {
    }
}
