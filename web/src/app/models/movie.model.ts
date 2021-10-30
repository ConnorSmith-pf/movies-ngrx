export interface MovieModel {
    adult?: boolean;
    backdrop_path?: string | null;
    belongs_to_collection?: null;
    budget?: number;
    genres?: Array<GenreModel>;
    homepage?: string;
    id?: number;
    imdb_id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string | null;
    production_companies?: Array<ProductionCompanyModel>;
    production_countries?: Array<ProductionCountryModel>;
    release_date?: string;
    revenue?: number;
    runtime?: number;
    spoken_languages?: Array<SpokenLanguageModel>;
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count: number;
}

interface GenreModel {
    id?: number;
    name?: string;
}

interface ProductionCompanyModel {
    description?: string;
    headquarters?: string;
    homepage?: string;
    id?: number;
    logo_path?: string;
    name?: string;
    origin_country?: string;
    parent_company?: ProductionCompanyModel | null;
}

interface ProductionCountryModel {
}

interface SpokenLanguageModel {
}
