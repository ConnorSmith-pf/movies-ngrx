import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './state/counter.actions';

@Component({
    selector: 'movies-my-counter',
    templateUrl: './my-counter.component.html',
    styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
    public count$: Observable<number>;

    constructor(private readonly state: Store<{ count: number }>) {
        this.count$ = state.select('count');
    }

    public increment(): void {
        this.state.dispatch(increment());
    }

    public decrement(): void {
        this.state.dispatch(decrement());
    }

    public reset(): void {
        this.state.dispatch(reset());
    }
}
