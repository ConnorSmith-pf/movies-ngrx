import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from '../components/my-counter/my-counter.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { counterReducer } from '../state/counter.reducer';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        MyCounterComponent,
        PageNotFoundComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        StoreModule.forRoot({count: counterReducer}),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
