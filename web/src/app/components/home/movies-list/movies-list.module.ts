import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [MoviesListComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class MoviesListModule {
}
