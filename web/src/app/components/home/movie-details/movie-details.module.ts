import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { StoreModule } from '@ngrx/store';
import { FeaturesEnum } from '../../../state/features.enum';
import { EffectsModule } from '@ngrx/effects';
import { selectedMovieReducer } from './state/movie-details.reducer';
import { MovieDetailsEffects } from './state/movie-details.effects';
import { RuntimePipe } from './pipes/runtime.pipe';
import { LazyListPipe } from './pipes/lazy-list.pipe';

@NgModule({
    declarations: [MovieDetailsComponent, RuntimePipe, LazyListPipe],
    imports: [
        CommonModule,
        StoreModule.forFeature(FeaturesEnum.SelectedMovie, selectedMovieReducer),
        EffectsModule.forFeature([MovieDetailsEffects])
    ]
})
export class MovieDetailsModule {
}
