import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { MovieListModel } from '../movies-list/models/movie-list.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { MoviesResponseModel } from '../movies-list/models/movies-response.model';
import { Credits, MovieModel } from '../movie-details/models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor(private readonly http: HttpClient) {
    }

    //TODO: Put a blocker on the page number being higher than the total_pages
    public getNowPlaying$(pageNumber: number): Observable<Array<MovieListModel>> {
        return this.http.get<MoviesResponseModel<MovieListModel>>(
            `${environment.TMDB_API_URL}/movie/now_playing?api_key=${environment.TMDB_API_KEY}&page=${pageNumber}`
        ).pipe(
            map(({ results }) => results)
        );
    }

    public getMovie$(id: number): Observable<MovieModel> {
        return this.http.get<MovieModel>(
            `${environment.TMDB_API_URL}/movie/${id}?api_key=${environment.TMDB_API_KEY}&append_to_response=credits`
        )
        // const getMovieDetails$ = this.http.get<MovieModel>(
        //     `${environment.TMDB_API_URL}/movie/${id}?api_key=${environment.TMDB_API_KEY}`
        // );
        // const getMovieCredits$ = this.http.get<Credits>(
        //     `${environment.TMDB_API_URL}/movie/${id}/credits?api_key=${environment.TMDB_API_KEY}`
        // );
        // return combineLatest([getMovieDetails$, getMovieCredits$]).pipe(
        //     map(([movieDetails, movieCredits]) => {
        //         return { ...movieDetails, credits: movieCredits };
        //     })
        // );
    }
}
