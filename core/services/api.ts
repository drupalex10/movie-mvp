import { 
  topRatingEndPoint,
	trendingEndPoint,
	nowPlayingEndPoint,
	popularEndPoint,
	upcomingEndPoint,
    detailsEndPoint,
    reviewEndPoint,
    videosEndPoint,
    favoriteMovies,
    statusEndPoint,
    addFavoriteEndPoint,
    ratedListEndPoint,
    recommendationEndPoint
} from "../utils/apiEndPoint";
import { Service } from "./axios"

const service = new Service();

export const getTrending = async () => {
    const movies: any = await service.movies("GET", trendingEndPoint);
    
    return movies.results;
} 
export const getTopRating = async () => {
    const movies: any = await service.movies("GET", topRatingEndPoint);

    return movies.results;
}
export const nowPlating = async () => {
    const movies: any = await service.movies("GET", nowPlayingEndPoint);
    return movies.results;
} 
export const getPopular = async () => {
    const movies: any = await service.movies("GET", popularEndPoint);

    return movies.results;
} 
export const getUpcoming = async () => {
    const movies: any = await service.movies("GET", upcomingEndPoint);

    return movies.results;
} 
export const getMovieDetails = async (id: string) => {
    const movies: any = await service.movies("GET", detailsEndPoint(id));

    return movies;
}
export const getMovieStatus = async (id: string) => {
    const statuses: any = await service.movies("GET", statusEndPoint(id));
    
    return statuses;
}
export const getVideos = async (id: string) => {
    const movies: any = await service.movies("GET", videosEndPoint(id));

    return movies.results;
}
export const getFavoriteMovies = async () => {
    const movies: any = await service.movies("GET", favoriteMovies);

    return movies.results;
}
export const getRatedMovies = async () => {
    const movies: any = await service.movies("GET", ratedListEndPoint);
    
    return movies.results;
}
export const addFavorite = async (id: string, favorite: boolean) => {
    const res: any = await service.movies(
        "POST", 
        addFavoriteEndPoint,
        {
            "media_type": "movie",
            "media_id": id,
            "favorite": favorite
        });

    return res?.success;
}
export const getRecommendMovies = async (id: string) => {
    const movies: any = await service.movies("GET", recommendationEndPoint(id));

    return movies.results;
}