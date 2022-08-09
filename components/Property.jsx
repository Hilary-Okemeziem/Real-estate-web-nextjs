import React from 'react'
import { FaBed, FaBath} from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { BiBuildingHouse} from 'react-icons/bi'
import { GoVerified} from 'react-icons/go'
import millify from 'millify' 
import Link from 'next/link'
import Image from 'next/image'
import img from '../public/images/comingsoon.jpg'

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, isVerified, externalID, furnishingStatus}}) => {
  return (
    <div>
        <Link href={`/PropertyDetails/${externalID}`} passHref>
            <div className='bg-white shadow-md cursor-pointer'>
                <Image src={coverPhoto ? coverPhoto.url : img} alt='/' width={400} height={280}/>
                <div className='px-5 py-4'>
                    <div className='pb-2 font-bold'>
                        {title.length > 35 ? `${title.substring(0, 35)}...` : title}
                    </div>
                    <hr />
                    <div className='grid grid-cols-2 gap-5 py-3'>
                        <div className='mx-auto text-gray-500'>
                            <FaBed className='inline mr-1'/> {rooms} Bedroom(s)
                        </div>
                        <div className='mx-auto text-gray-500'>
                            <FaBath className='inline mr-1'/> {baths} Bathroom(s)
                        </div>
                        <div className='mx-auto text-gray-500'>
                            <BiBuildingHouse className='inline mr-1'/> {millify(area)} sqft
                        </div>
                        <div className='mx-auto text-gray-500'>
                            <BsGridFill className='inline mr-1'/> {furnishingStatus ? furnishingStatus : 'unfurnished'}
                        </div>
                    </div>
                    <hr />
                    <div className='flex justify-between items-center pt-2'>
                        <div className='text-[#00afef] text-xl'>{isVerified && <GoVerified />}</div>
                        <div className='text-[#00afef] text-xl font-bold'>NGN {millify(price)}{rentFrequency && `/${rentFrequency}`}</div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Property