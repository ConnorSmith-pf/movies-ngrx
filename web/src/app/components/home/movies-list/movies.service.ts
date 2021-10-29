import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieModel } from '../../../models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor() {
    }

    public getMovies(): Observable<Array<MovieModel>> {
        return of([
            { movieName: 'Test1' },
            { movieName: 'Test2' }
        ]);
    }
}
