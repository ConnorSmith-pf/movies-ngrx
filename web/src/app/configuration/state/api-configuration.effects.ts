import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadImageConfiguration, loadImageConfigurationFailure, loadImageConfigurationSuccess } from './api-configuration.actions';
import { catchError, map, switchMap } from 'rxjs';
import { ApiConfigurationService } from '../api-configuration.service';

@Injectable()
export class ApiConfigurationEffects {
    public loadImageConfiguration$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadImageConfiguration),
            switchMap(() => this.apiConfigurationService.getApiImageConfiguration$().pipe(
                map(config => loadImageConfigurationSuccess({ apiImageConfiguration: config })),
                catchError(() => [loadImageConfigurationFailure()])
            ))
        )
    );

    constructor(private readonly actions$: Actions,
                private readonly apiConfigurationService: ApiConfigurationService) {
    }
}
