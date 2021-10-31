import { MovieListModel } from '../components/home/movies-list/models/movie-list.model';
import { ApiImageConfigurationModel } from '../models/api-image-configuration.model';
import { MovieModel } from '../components/home/movie-details/models/movie.model';

export interface AppState {
    movies: Array<MovieListModel>;
    sortBy: string;
    selectedMovie: MovieModel;
    apiImageConfiguration: ApiImageConfigurationModel;
}
