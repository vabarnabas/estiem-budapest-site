import Image from "next/image"
import React from "react"

interface Props {
  title: string
  asset: string
  description: string
}

const EventCard: React.FC<Props> = ({ asset, description, title }) => {
  return (
    <div className="relative aspect-square w-56 overflow-hidden rounded-md">
      <Image src={asset} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 p-4 transition-all ease-out hover:bg-gray-700/80 hover:text-white">
        <div className="h-full w-full overflow-y-auto  opacity-100 blur-none scrollbar-hide">
          <p className="mb-1 text-lg font-bold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard
