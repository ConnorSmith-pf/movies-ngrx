import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMovie, loadMovieFailure, loadMovieSuccess } from './movie-details.actions';
import { catchError, map, switchMap } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Injectable()
export class MovieDetailsEffects {
    public getMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMovie),
            switchMap(({ id }) => this.moviesService.getMovie$(id).pipe(
                map(movie => loadMovieSuccess({ selectedMovie: movie })),
                catchError(() => [loadMovieFailure()])
            ))
        )
    );

    constructor(private readonly actions$: Actions,
                private readonly moviesService: MoviesService) {
    }
}
