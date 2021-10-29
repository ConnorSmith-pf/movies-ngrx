import { MovieModel } from '../models/movie.model';

export interface AppState {
    movies: Array<MovieModel>;
    watchlist: Array<MovieModel>;
}
