export interface MovieModel {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null;
    budget: number;
    genres: Array<GenreModel>;
    homepage: string;
    id: number;
    imdb_id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: Array<ProductionCompanyModel>;
    production_countries: Array<ProductionCountryModel>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<SpokenLanguageModel>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

    credits: Credits;
}

interface GenreModel {
    id: number;
    name: string;
}

interface ProductionCompanyModel {
    description: string;
    headquarters: string;
    homepage: string;
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
    parent_company: ProductionCompanyModel | null;
}

interface ProductionCountryModel {
}

interface SpokenLanguageModel {
}

//TODO: Refactor into common interfaces;
export interface Credits {
    id: number;
    cast: Array<CastModel>;
    crew: Array<CrewModel>;
}

interface CastModel {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: number;
    order: number;
}

interface CrewModel {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: number;
    department: string;
    job: string;
}
