const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const USER_ID = "11907002"

// Lists
export const trendingEndPoint: string = `${BASE_URL}/trending/all/week?language=en-US`
export const topRatingEndPoint: string = `${BASE_URL}/movie/top_rated?language=en-US&page=1`
export const popularEndPoint: string = `${BASE_URL}/movie/popular?language=en-US&page=1'`
export const upcomingEndPoint: string = `${BASE_URL}/movie/upcoming?language=en-US&page=1`
export const nowPlayingEndPoint: string = `${BASE_URL}/movie/now_playing?language=en-US&page=1`

// Details
export const detailsEndPoint = (id: string) : string => `${BASE_URL}/movie/${id}?language=en-US`
export const videosEndPoint = (id: string) : string => `${BASE_URL}/movie/${id}/videos?language=en-US&page=1`
export const statusEndPoint = (id: string) : string => `${BASE_URL}/movie/${id}/account_states`
export const rateEndPoint = (id: string) : string =>  `${BASE_URL}/movie/${id}/rating`
export const ratedListEndPoint = `${BASE_URL}/account/${USER_ID}/rated/movies`
export const recommendationEndPoint = (id: string) : string => `${BASE_URL}/movie/${id}/recommendations`

// My movies
export const favoriteMovies = `${BASE_URL}/account/${USER_ID}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`
export const addFavoriteEndPoint = `${BASE_URL}/account/${USER_ID}/favorite`


// https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1
//   fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
//   fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
//   fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
//   fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
//   fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,

