import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApiImageConfigurationModel } from '../../models/api-image-configuration.model';
import { FeaturesEnum } from '../../state/features.enum';

const selectConfig = createFeatureSelector<ApiImageConfigurationModel>(FeaturesEnum.ApiImageConfig);

export const getApiImageConfig = createSelector(selectConfig, config => config);
