"use client"

import { baseURL } from "@/core/utils/baseUrl"
import { Movie } from "@/typings"
import { Button, Rating } from "@material-tailwind/react"
import Image from "next/image"
import { BsFillPlayFill } from "react-icons/bs"

interface Props {
	name: string;
  description: string;
  backdrop: string;
  rating: number;
}

const HomeBanner: React.FC<Props> = ({ name, description, backdrop, rating }) => {
  const rate = Math.floor(rating / 2 );
	
	return (
		<div className="flex w-full h-screen items-center relative">
			<div className="flex flex-col gap-3 md:ml-20 ml-10 z-30 pr-3">
				<h1 className="text-7xl font-bold max-w-[900px]">{name}</h1>
				<div className="w-[200px] flex-row">
					{rate ? ( <Rating value={rate}/>) : ""}
				</div>
				<div className="md:max-w-xl max-w-sm">
					{description}
				</div>

        { backdrop ?
          (<Button variant="outlined" color="deep-orange" className="max-w-[140px] flex items-center gap-2 mt-8">
              <BsFillPlayFill size={20} color="#ff5722"/>Watch
          </Button>) : ""
        }
        
			</div>

      <div className="absolute top-0 left-0 w-full h-screen">
        <Image src={`${baseURL}${backdrop}`} layout="fill" objectFit="cover" alt="movie" loading="lazy"/>
        <div className="absolute w-full h-screen bg-gradient-to-r from-black to-transparent bottom-0 z-20" />
        <div className="absolute w-full h-screen bg-gradient-to-t from-[#141414] to-transparent bottom-0 z-20" />
      </div>
		</div>
	)
}

export default HomeBanner;
