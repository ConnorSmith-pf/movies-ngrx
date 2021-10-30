export interface MoviesResponseModel<T> {
    page: number;
    results: Array<T>;
    dates: { maximum: Date, minimum: Date };
    total_pages: number;
    total_results: number;
}
