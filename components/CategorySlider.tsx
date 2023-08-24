
"use client"

import { baseURL } from '@/core/utils/baseUrl';
import { Movie } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';

type props = {
	movies: Movie[],
  header: string
}

const CategorySlider: React.FC<props> = ({movies, header}) => {
	return (
		<div className={`relative w-full ${!movies.length ? 'hidden' : ""}`}>
      <h1 className={`text-6xl font-bold py-8 text-header text-center ${header ? 'border-t' : ""}`}>
        {header}
      </h1>

      <div className="flex flex-row gap-2 flex-nowrap overflow-x-scroll scrollbar-hide w-full">
        {movies?.map((movie, index) => (
          <Link href={`/movie-details/${movie.id}`} key={index} className="min-w-[300px] w-[300px] h-[400px] flex relative cursor-pointer">
            <Image alt='' src={`${baseURL}${movie.poster_path}`} width={400} height={400} objectFit="cover"/>

            <div className="absolute flex items-end w-full h-full bg-gradient-to-t from-black to-transparent bottom-0 z-20 opacity-0 hover:opacity-100">
              <div className="flex mb-6 px-10 justify-center w-full font-bold text-lg">
                {movie.name || movie?.title}
              </div>
            </div>
          </Link>
        ))}
			</div>
		</div>
	)
}

export default CategorySlider;