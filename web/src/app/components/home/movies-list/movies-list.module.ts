import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './state/movies.effects';
import { movieListReducer, sortedByReducer } from './state/movies.reducer';
import { FeaturesEnum } from '../../../state/features.enum';
import { MovieCardModule } from '../movie-card/movie-card.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
    declarations: [MoviesListComponent],
    imports: [
        CommonModule,
        MovieCardModule,
        FormsModule,
        ScrollingModule,
        // Don't know why, but MatSelectModule needs to be imported in AppModule first, then in the lazy loaded module.
        // TODO: Investigate why this is happening.
        MatSelectModule,
        // This would ideally be bundled into an index.ts, to not end up copy and
        // pasting StoreModule.forFeature for eternity.
        StoreModule.forFeature(FeaturesEnum.Movies, movieListReducer),
        StoreModule.forFeature(FeaturesEnum.SortBy, sortedByReducer),
        EffectsModule.forFeature([MoviesEffects])
    ]
})
export class MoviesListModule {
}
