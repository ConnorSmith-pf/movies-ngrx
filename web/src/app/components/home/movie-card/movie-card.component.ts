import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '../../../models/movie.model';

@Component({
    selector: 'movies-movies-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

    @Input()
    public movie: MovieModel = {} as MovieModel;

    constructor() {
    }

    public ngOnInit(): void {
    }

}
