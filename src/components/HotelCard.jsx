import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      className='relative w-full max-w-[320px] rounded-xl overflow-hidden bg-white text-gray-500 shadow-md flex flex-col'
    >
      <img
        src={room.images[0]}
        alt={room.hotel.name}
        className='w-full h-56 object-cover'
      />

      {index % 2 === 0 && (
        <p className='absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-white text-gray-800 rounded-full'>
          Best Seller
        </p>
      )}

      <div className='flex flex-col flex-1 p-4'>
        <div className='flex items-center justify-between'>
          <h3 className='font-playfair text-xl font-medium text-gray-800'>
            {room.hotel.name}
          </h3>

          <div className='flex items-center gap-1'>
            <img src={assets.starIconFilled} alt='star' />
            <span>4.5</span>
          </div>
        </div>

        <div className='flex items-start gap-1 mt-2 text-sm min-h-[50px]'>
          <img
            src={assets.locationIcon}
            alt='location'
            className='mt-1'
          />
          <span>{room.hotel.address}</span>
        </div>

        <div className='flex items-center justify-between mt-auto pt-4'>
          <p>
            <span className='text-xl text-gray-800'>
              ${room.pricePerNight}
            </span>
            <span> / night</span>
          </p>

          <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition'>
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard