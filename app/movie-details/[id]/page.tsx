"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button, Carousel, IconButton, Rating } from "@material-tailwind/react";
import YouTube from 'react-youtube';
import { addFavorite, getMovieDetails, getMovieStatus, getRatedMovies, getRecommendMovies, getVideos } from '@/core/services/api';
import { AccountState, Details, Movie, MovieTrailer, RatedMovies } from '@/typings';
import LoaderGlobal from '@/components/LoaderGlobal';
import { baseURL } from '@/core/utils/baseUrl';
import { BsFillPlayFill } from 'react-icons/bs';
import TrailerDialog from '@/components/TrailerDialog';
import Header from '@/components/Header';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import CategorySlider from '@/components/CategorySlider';
import CommentActions from '@/components/CommentActions';



const MovieDetailPage = ({ params }: { params: { id: string } }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState<Details>();
  const [videos, setVideos] = useState<MovieTrailer[]>();
  const [dialogTrailerVisible, setDialogTrailerVisible] = useState(false);
  const [rate, setRate] = useState(0);
  const [states, setStates] = useState<AccountState>()
  const [recommendMovies, setRecommendMovies] = useState<Movie[]>()

  const getMovieDetail = async () => {
    setIsLoading(true)
    setDetails(await getMovieDetails(params.id))
    setVideos(await getVideos(params.id));
    setStates(await getMovieStatus(params.id))
    setRecommendMovies(await getRecommendMovies(params.id))

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }

  const onToggleFavorite = async () => {
    addFavorite(params.id, !states?.favorite)
    setStates({favorite: !states?.favorite})
  }

  useEffect(() => {
    getMovieDetail();
  }, []);

  useEffect(() => {
    const rate = Math.round(Number(details?.vote_average) / 2);
    setRate(rate);
  }, [details])


  return (
    <>
    <Header alwayTransparentBg={true}/>
      <div 
        className="Link w-full h-screen"
        style={{
          backgroundImage: `url(${baseURL}${details?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className={isLoading ? 'hidden' : ""}>
          <div className="w-full bg-gradient-to-t from-black to-[#00000069] z-30 pt-[10%]">
            <div className="max-w-[1000px] mx-auto flex gap-5">
              <Image 
                src={`${baseURL}${details?.poster_path}`} 
                width={400} 
                height={300}  
                objectFit='cover'
                alt={details?.original_name || details?.original_title || ""}
              />

              <div className="flex flex-col gap-8">
                <h2 className='text-5xl font-bold'>{details?.name || details?.original_title}</h2>
                {rate ? (<Rating value={rate}/>) : "" } 
                <p className='text-gray-600'>{details?.overview}</p>

                <div className="flex gap-4">
                  <Button variant="outlined" color="deep-orange" className="max-w-[140px] flex items-center gap-2 mt-8">
                    <BsFillPlayFill size={20} color="#ff5722"/>Watch
                  </Button>

                  <Button 
                    variant="gradient" 
                    color="deep-orange" 
                    className="max-w-[140px] flex items-center gap-2 mt-8"
                    onClick={() => setDialogTrailerVisible(true)}
                  >
                    Trailer
                  </Button>

                  <Button 
                    variant="text" 
                    className="max-w-[140px] flex items-center gap-2 mt-8"
                    onClick={onToggleFavorite}
                  >
                    {states?.favorite ? <AiFillHeart size={30} color='#b90303'/> : <AiOutlineHeart size={30} color='white'/>}
                  </Button>
                </div>

                <CommentActions />
              </div>
            </div>
          </div>
          <div className="bg-black w-full">
            <CategorySlider movies={recommendMovies ?? []} header=''/>
          </div>
        </div>
        
        <TrailerDialog 
          visible={dialogTrailerVisible} 
          trailers={videos || []}
          onClose={() => {setDialogTrailerVisible(false); 
          }}
        />
        <LoaderGlobal isLoading={isLoading}/>
      </div>
    </>
   
  );
}

export default MovieDetailPage;
