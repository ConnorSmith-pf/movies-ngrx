import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { loadImageConfiguration } from '../../configuration/state/api-configuration.actions';

@Component({
    selector: 'movies-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private readonly state: Store<AppState>) {
    }

    public ngOnInit(): void {
        this.state.dispatch(loadImageConfiguration());
    }
}
