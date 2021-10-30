import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [MovieCardComponent],
    exports: [
        MovieCardComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        RouterModule,
    ]
})
export class MovieCardModule {
}
