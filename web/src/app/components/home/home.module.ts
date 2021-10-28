import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';

const HOME_ROUTES: Routes = [
    {
        path: '',
        component: MoviesListComponent,
        loadChildren: () => import('./movies-list/movies-list.module').then(m => m.MoviesListModule)
    }
];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HeaderModule,
        RouterModule,
        RouterModule.forChild(HOME_ROUTES)
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {
}
