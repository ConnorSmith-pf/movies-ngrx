import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { movieReducer } from '../components/home/movies-list/state/movies.reducer';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from '../components/home/movies-list/state/movies.effects';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({ movies: movieReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
        EffectsModule.forRoot([MoviesEffects]),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
