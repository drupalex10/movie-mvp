"use client"

import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import RegisterDialog from "@/components/RegisterDialog"
import LoginDialog from "./LoginDialog";
import Link from "next/link";

type props = {
  alwayTransparentBg?: boolean
}

const Header: React.FC<props> = ({ alwayTransparentBg }) => {
  const [scrollDirection, setScrollDirection] = useState("");
  const [isHeaderBlack, setIsHeaderBack] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;

      setIsHeaderBack(scrollY > 0);
    };

    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return (
    <div className={`absolute z-40 `}>
      <div className={`w-full h-[100px] fixed px-10 py-2 top-0 left-0 right-0 ${isHeaderBlack && !alwayTransparentBg ? "bg-black" : ""} transition-all`}>
        <div className="flex h-full flex-row items-center justify-between">
          <Link href={"/"} className="cursor-pointer">
            <Image
              src={require("@/app/assets/images/logo.png")}
              width={130}
              height={70}
              alt="My movie"
            />
          </Link>
          <div className="flex items-center gap-3">
            {/* <RegisterDialog/>
            <LoginDialog/> */}

          <Link href="/my-movies">
            <Button variant="outlined" color="deep-orange" >
              My movies
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;