import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../../services/movies.service';
import { loadMovies, loadMoviesFailure, loadMoviesSuccess } from './movies.actions';
import { catchError, map, switchMap } from 'rxjs';

@Injectable()
export class MoviesEffects {
    public loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMovies),
            switchMap(({ pageNumber }) => this.moviesService.getNowPlaying$(pageNumber).pipe(
                map(movies => loadMoviesSuccess({ movies })),
                catchError(() => [loadMoviesFailure()])
            ))
        )
    );

    constructor(private readonly actions$: Actions,
                private readonly moviesService: MoviesService) {
    }
}
