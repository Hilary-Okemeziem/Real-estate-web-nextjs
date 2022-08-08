import React from 'react'
import { FaBed, FaBath} from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { BiBuildingHouse} from 'react-icons/bi'
import { GoVerified} from 'react-icons/go'
import millify from 'millify' 
import { baseUrl, fetchApi} from '../../utils/fetchApi'
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/image'

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos }}) => {
  return (
    <div className='bg-[#f5f5f5]'>
        <div className='max-w-[1160px] w-full mx-auto px-2'>
            <div className='py-[12rem] lg:py-[15rem]'>
                {photos && 
                <Carousel autoPlay infiniteLoop>
                {photos.map((item) => (
                    <div key={item.id} className='relative w-[1200px] h-[400px] lg:h-[500px]'>
                        <Image src={item.url} layout="fill" objectFit="cover" alt="/"  placeholder="blur" blurDataURL={item.url}/>
                    </div>
                ))}      
                </Carousel>
                }

                <div className='pt-2 '></div>
            </div>
        </div>
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