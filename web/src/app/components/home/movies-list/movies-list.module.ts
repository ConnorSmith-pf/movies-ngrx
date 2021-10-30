import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './state/movies.effects';
import { movieReducer } from './state/movies.reducer';
import { FeaturesEnum } from '../../../state/features.enum';

@NgModule({
    declarations: [MoviesListComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(FeaturesEnum.Movies, movieReducer),
        EffectsModule.forFeature([MoviesEffects]),
    ]
})
export class MoviesListModule {
}
