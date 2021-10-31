export interface ApiImageConfigurationModel {
    images: ImageConfiguration;
    change_keys: Array<string>;
}

interface ImageConfiguration {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: Array<string>;
    logo_sizes: Array<string>;
    poster_sizes: Array<string>;
    profile_sizes: Array<string>;
    still_sizes: Array<string>;
}
