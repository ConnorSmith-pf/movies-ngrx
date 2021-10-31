import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {
}
