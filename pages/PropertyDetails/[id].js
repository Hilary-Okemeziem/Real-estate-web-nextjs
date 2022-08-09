import React from 'react'
import { FaBed, FaBath} from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { BiBuildingHouse} from 'react-icons/bi'
import { GoVerified} from 'react-icons/go'
import millify from 'millify' 
import { baseUrl, fetchApi} from '../../utils/fetchApi'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify'
import Footer from '../../components/Footer'

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, isVerified, description, purpose, furnishingStatus, amenities, photos }}) => {
  return (
    <div className='bg-[#f5f5f5]'>
        <div className='max-w-[1160px] w-full mx-auto px-2'>
            <div className='pt-[12rem] lg:pt-[15rem]'>
                {photos && 
                <Carousel autoPlay infiniteLoop>
                {photos.map((item) => (
                    <div key={item.id} className='relative w-[1200px] h-[400px] lg:h-[500px]'>
                        <Image src={item.url} layout="fill" objectFit="cover" alt="/"  placeholder="blur" blurDataURL={item.url}/>
                    </div>
                ))}      
                </Carousel>
                }

                <div>
                    <div className='text-[#00afef] font-bold text-xl'>{purpose.toUpperCase()}</div>
                    <div className='py-2 font-bold text-3xl'>
                        {title}
                    </div>
                    <hr />
                    <div className='flex flex-wrap items-center justify-between py-3'>
                        <div className='text-gray-500'>
                            <FaBed className='inline mr-1'/> {rooms} Bedroom(s)
                        </div>
                        <div className='text-gray-500'>
                            <FaBath className='inline mr-1'/> {baths} Bathroom(s)
                        </div>
                        <div className='text-gray-500'>
                            <BiBuildingHouse className='inline mr-1'/> {millify(area)} sqft
                        </div>
                        <div className='text-gray-500'>
                            <BsGridFill className='inline mr-1'/> {furnishingStatus ? furnishingStatus : 'unfurnished'}
                        </div>
                    </div>
                    <hr />
                    <div className='flex items-center pt-2 gap-2'>
                        <div className='text-[#00afef] text-xl'>{isVerified && <GoVerified />}</div>
                        <div className='text-[#00afef] text-2xl font-bold'>NGN {price.toLocaleString()}{rentFrequency && `/${rentFrequency}`}</div>
                    </div>
                </div>

                <div className='py-8'>
                    <h2 className='text-2xl font-bold'>Property Details</h2>
                    <p className='py-4' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description),}}></p>
                </div>

                <div className='pb-16'>
                    {amenities.length && 
                    <h3 className='text-2xl my-5 font-bold'>Trademark:</h3>}
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {amenities?.map((amenity) => (
                            <p key={amenity.id} className='font-bold p-2 bg-gray-200 m-1 rounded-md text-[#00afef]'>
                                {amenity.text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export async function getServerSideProps({ params: {id}}) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data,
        },
    };
}

export default PropertyDetails