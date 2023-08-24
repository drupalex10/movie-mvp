"use client"

import CategorySlider from '@/components/CategorySlider'
import Header from '@/components/Header'
import HomeBanner from '@/components/HomeBanner'
import LoaderGlobal from '@/components/LoaderGlobal'
import { getTrending, getPopular, getTopRating, getUpcoming, nowPlating } from '@/core/services/api'
import requests from '@/core/utils/requests'
import { Movie } from '@/typings'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [headerMovie, setHeaderMovie] = useState<Movie>()
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([])
  const [topRatingMovies, setTopRatingMovies] = useState<Movie[]>([])
  const [popularMovies, setPopularMovies] = useState<Movie[]>([])
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([])


  const fetchData = async () => {
    try {
      setIsLoading(true);

      setTrendingMovies(await getTrending());
      setTopRatingMovies(await getTopRating());
      setPopularMovies(await getPopular());
      setUpcomingMovies(await getUpcoming());
      setNowPlayingMovies(await nowPlating());
      
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error: any) {
      console.log("🚀 ~ file: page.tsx:28 ~ fetchData ~ error:", error);
    }
  };

  const randomMovie = () => {
    const max = topRatingMovies?.length ?? 0;
    const number = Math.floor(Math.random() * max);  
    const movie = topRatingMovies[number];
      
    setHeaderMovie(movie);    
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    randomMovie();
  }, [topRatingMovies]);

  return (
    <div>
      <Header/>
      <LoaderGlobal isLoading={isLoading} />

      {/* Banner */}
      <HomeBanner 
        name={headerMovie?.name || headerMovie?.title || ""} 
        description={headerMovie?.overview || ""}
        backdrop={headerMovie?.backdrop_path || ""}
        rating={headerMovie?.vote_average || 0}
      />

      <CategorySlider movies={nowPlayingMovies} header='NOW PLAYING'/>
      <CategorySlider movies={upcomingMovies} header='UPCOMING'/>
      <CategorySlider movies={trendingMovies} header='TRENDING'/>
      <CategorySlider movies={popularMovies} header='POPULAR'/>

    </div>
  )
}