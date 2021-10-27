import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../state/counter.actions';

@Component({
    selector: 'movies-my-counter',
    templateUrl: './my-counter.component.html',
    styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {
    public count$: Observable<number>;

    constructor(private readonly store: Store<{ count: number }>) {
        this.count$ = store.select('count');
    }

    public increment(): void {
        this.store.dispatch(increment());
    }

    public decrement(): void {
        this.store.dispatch(decrement());
    }

    public reset(): void {
        this.store.dispatch(reset());
    }
}
