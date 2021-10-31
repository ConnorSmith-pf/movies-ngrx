import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiImageConfigurationModel } from '../models/api-image-configuration.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiConfigurationService {
    constructor(private readonly http: HttpClient) {
    }

    public getApiImageConfiguration$(): Observable<ApiImageConfigurationModel> {
        return this.http.get<ApiImageConfigurationModel>(
            `${environment.TMDB_API_URL}/configuration?api_key=${environment.TMDB_API_KEY}`
        );
    }
}
