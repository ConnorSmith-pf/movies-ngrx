import { createAction, props } from '@ngrx/store';
import { ApiImageConfigurationModel } from '../../models/api-image-configuration.model';

export const loadImageConfiguration = createAction(
    '[API Image Configuration] Load Image Configuration'
);
export const loadImageConfigurationSuccess = createAction(
    '[API Image Configuration] Load Image Configuration Success',
    props<{ apiImageConfiguration: ApiImageConfigurationModel }>()
);
export const loadImageConfigurationFailure = createAction(
    '[API Image Configuration] Load Image Configuration Failure'
);
