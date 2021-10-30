import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { MovieModel } from '../../../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MoviesResponseModel } from '../../../models/movies-response.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor(private readonly http: HttpClient) {
    }

    public getNowPlaying$(): Observable<Array<MovieModel>> {
        return this.http.get<MoviesResponseModel<MovieModel>>(
            `${environment.TMDB_API_URL}/movie/now_playing?api_key=${environment.TMDB_API_KEY}`
        ).pipe(
            map(({ results }) => results)
        );
    }

    public getMovieDetail(): Observable<MovieModel> {
        return of({} as MovieModel);
    }
}
