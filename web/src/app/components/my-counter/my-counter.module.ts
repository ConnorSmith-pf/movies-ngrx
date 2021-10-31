import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { MyCounterComponent } from './my-counter.component';

@NgModule({
    declarations: [MyCounterComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('count', counterReducer)
    ]
})
export class MyCounterModule {
}
