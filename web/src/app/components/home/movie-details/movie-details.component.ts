import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../state/app.state';
import { Store } from '@ngrx/store';
import { Observable, take, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiImageConfigurationModel } from '../../../models/api-image-configuration.model';
import { getApiImageConfig } from '../../../configuration/state/api-configuration.selector';
import { MovieModel } from './models/movie.model';
import { getMovie } from './state/movie-details.selector';
import { loadMovie } from './state/movie-details.actions';

@Component({
    selector: 'movies-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
    public movieDetails$!: Observable<MovieModel>;
    public imageConfig$: Observable<ApiImageConfigurationModel>;

    constructor(private readonly state: Store<AppState>,
                private readonly route: ActivatedRoute) {
        this.imageConfig$ = this.state.select(getApiImageConfig);
        this.route.params.pipe(
            take(1),
            tap(({ id }) => {
                this.movieDetails$ = this.state.select(getMovie) as Observable<MovieModel>;
                this.state.dispatch(loadMovie({ id }));
            })
        ).subscribe();
    }

    public ngOnInit(): void {
    }
}
