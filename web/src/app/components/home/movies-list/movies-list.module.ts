import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './state/movies.effects';
import { movieReducer } from './state/movies.reducer';
import { FeaturesEnum } from '../../../state/features.enum';

@NgModule({
    declarations: [MoviesListComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(FeaturesEnum.Movies, movieReducer),
        EffectsModule.forFeature([MoviesEffects]),
    ]
})
export class MoviesListModule {
}
