"use client"

import CategorySlider from "@/components/CategorySlider"
import Header from "@/components/Header"
import LoaderGlobal from "@/components/LoaderGlobal"
import { getFavoriteMovies } from "@/core/services/api"
import { baseURL } from "@/core/utils/baseUrl"
import { Movie } from "@/typings"
import { Button, Rating } from "@material-tailwind/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BsFillPlayFill } from "react-icons/bs"


const MyMovies: React.FC =  () => {
  const [isLoading, setIsLoading] = useState(true);
	const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>();

  const getPageData = async () => {
    setIsLoading(true)
    setFavoriteMovies(await getFavoriteMovies())
    setIsLoading(false)
  }

  useEffect(() => {
    getPageData();
  }, []);
	return (
    <>
    <Header/>
    <LoaderGlobal isLoading={isLoading} />

		<div className="w-full flex justify-center items-center">
      <div className="flex flex-row flex-wrap">
          {favoriteMovies?.map((movie, index) => (
            <Link href={`/movie-details/${movie.id}`} key={index} className="flex relative cursor-pointer" style={{width: 'calc((100vw / 4))'}}>
              <Image alt='ok' src={`${baseURL}${movie.poster_path}`} width={400} height={400} objectFit="cover"/>

              <div className="absolute flex items-end w-full h-full bg-gradient-to-t from-black to-transparent bottom-0 z-20 opacity-0 hover:opacity-100">
                <div className="flex mb-6 px-10 justify-center w-full font-bold text-lg">
                  {movie.name || movie?.title}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
    </>
	)
}

export default MyMovies;
