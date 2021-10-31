import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCounterComponent } from '../components/my-counter/my-counter.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HomeComponent } from '../components/home/home.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        loadChildren: () => import('../components/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'counter',
        component: MyCounterComponent,
        loadChildren: () => import('../components/my-counter/my-counter.module').then(m => m.MyCounterModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        loadChildren: () => import('../components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
