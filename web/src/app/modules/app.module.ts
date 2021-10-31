import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfigurationEffects } from '../configuration/state/api-configuration.effects';
import { apiImageConfigurationReducer } from '../configuration/state/api-configuration.reducer';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        MatSelectModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({ apiImageConfiguration: apiImageConfigurationReducer }),
        EffectsModule.forRoot([ApiConfigurationEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
