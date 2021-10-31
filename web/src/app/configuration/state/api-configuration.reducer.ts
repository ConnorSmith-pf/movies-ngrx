import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { ApiImageConfigurationModel } from '../../models/api-image-configuration.model';
import { loadImageConfigurationSuccess } from './api-configuration.actions';

// Defining an initial state is confusing...
// Maybe in a real use case this would be defined somewhere.
// TODO: Investigate.
const defaultAppState: ApiImageConfigurationModel = {
    change_keys: [],
    images: {
        backdrop_sizes: [],
        base_url: '',
        logo_sizes: [],
        poster_sizes: [],
        profile_sizes: [],
        secure_base_url: '',
        still_sizes: []
    }
};

const _reducer: ActionReducer<ApiImageConfigurationModel> = createReducer(
    defaultAppState,
    on(loadImageConfigurationSuccess, (state, { apiImageConfiguration }) => apiImageConfiguration)
);

export function apiImageConfigurationReducer(state: ApiImageConfigurationModel = defaultAppState, action: Action): ApiImageConfigurationModel {
    return _reducer(state, action);
}
