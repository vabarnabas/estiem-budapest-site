import React from "react"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="mt-14 flex w-full items-center justify-center bg-estiemGreen py-6 text-white">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center justify-center text-lg text-white sm:text-2xl">
          <button
            onClick={() =>
              window.open(
                "https://www.facebook.com/estiembudapestbme",
                "_blank"
              )
            }
            className="mx-2"
          >
            <FaFacebookSquare className="hover:text-gray-200" />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.instagram.com/estiembudapestbme",
                "_blank"
              )
            }
            className="mx-2"
          >
            <FaInstagram className="hover:text-gray-200" />
          </button>
        </div>
        <div className="mb-2 flex flex-col items-center justify-center">
          <div className="mb-3 flex flex-col items-center justify-center leading-snug">
            <p className="font-semibold">Kapcsolat</p>
            <p className="text-xs">Vállalati Kapcsolattartó</p>
            <p className="text-sm font-semibold">benjamin.bakos@estiem.org</p>
          </div>
          <div className=" flex flex-col items-center justify-center leading-snug">
            <p className="font-semibold">Elérhetőség</p>
            <p className="text-sm font-semibold">info.budapest@estiem.org</p>
          </div>
        </div>
        <p className="mt-2 w-2/3 text-center text-sm font-semibold sm:w-auto">
          Copyright © 2022 | ESTIEM Budapest BME
        </p>
      </div>
    </div>
  )
}

export default Footer
