import Image from "next/image"
import React from "react"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

const Landing = () => {
  return (
    <div className="relative flex h-halfScreen w-screen items-center justify-center text-white md:h-screen">
      <div className="relative h-full w-full">
        <Image src="/assets/group_photo.jpeg" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-estiemGreen/70"></div>
      </div>
      <div className="absolute inset-x-4">
        <p className="text-3xl font-extrabold md:text-5xl">
          Üdv az ESTIEM <br /> Budapest BME oldalán!
        </p>
        <p className="mt-0.5">
          Szervezetünk nagyon izgalmas és naon naon fincsike!
        </p>
      </div>
      <div className="absolute bottom-3 left-4 flex space-x-3 text-lg sm:text-xl">
        <FaFacebookSquare
          className="cursor-pointer hover:text-slate-200"
          onClick={() =>
            window.open("https://www.facebook.com/estiembudapestbme", "_blank")
          }
        />
        <FaInstagram
          className="cursor-pointer hover:text-slate-200"
          onClick={() =>
            window.open("https://www.instagram.com/estiembudapestbme", "_blank")
          }
        />
      </div>
    </div>
  )
}

export default Landing
