import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCounterComponent } from '../components/my-counter/my-counter.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: MyCounterComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
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
