"use client"

import { MovieTrailer } from "@/typings"
import { Button, Carousel, Dialog, DialogBody } from "@material-tailwind/react"
import { useState } from "react"
import YouTube from "react-youtube"
import { FaTimesCircle } from 'react-icons/fa';

type Props = {
  trailers: MovieTrailer[],
  visible: boolean;
  onClose: () => void;
}

const TrailerDialog: React.FC<Props> = ({trailers, visible, onClose}) => {
  return (
    <>
    <Dialog open={visible} handler={onClose} size="lg" className="bg-transparent shadow-none">
      <div className="flex absolute right-0 z-50">
        <Button 
          variant="text" 
          className="text-orange-600 text-xl" 
          onClick={onClose}
        >
          <FaTimesCircle />
        </Button>

      </div>
      {trailers?.length && 
      <Carousel className="rounded-xl flex w-full h-[700px]">
        {trailers?.map((trailer) => (
          <div key={trailer.key} className="flex w-full h-full justify-center items-center">
            <YouTube
              videoId={trailer.key} 
            />
          </div>
        ))}
      </Carousel>}
    </Dialog>
    </>
  )
}

export default TrailerDialog;