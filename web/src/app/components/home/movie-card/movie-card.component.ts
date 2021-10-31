import { Component, Input, OnInit } from '@angular/core';
import { MovieListModel } from '../movies-list/models/movie-list.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { getApiImageConfig } from '../../../configuration/state/api-configuration.selector';
import { Observable } from 'rxjs';
import { ApiImageConfigurationModel } from '../../../models/api-image-configuration.model';

@Component({
    selector: 'movies-movies-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    public imageConfig$: Observable<ApiImageConfigurationModel>;

    @Input()
    public movie: MovieListModel = {} as MovieListModel;

    constructor(private readonly state: Store<AppState>) {
        this.imageConfig$ = this.state.select(getApiImageConfig);
    }

    public ngOnInit(): void {
    }

}
