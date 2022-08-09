import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { BsFilter } from 'react-icons/bs';
import PropertySearch from '../components/PropertySearch';
import Property from '../components/Property';
import noresult from '../public/images/noresult.png'
import { baseUrl, fetchApi } from '../utils/fetchApi';

const PropertyFilter = ({properties}) => {
    const [filter, setFilter] = useState(false);
    const router = useRouter();
  return (
    <div className='max-w-[1200px] w-full mx-auto'>
        <div className='pt-[15rem]'>
            <div 
            onClick={() => setFilter((lastFilter) => !lastFilter)}
            className='flex cursor-pointer bg-gray-100 border-t border-gray-200 p-2 text-xl  rounded-t-md justify-center items-center font-bold'>
                <h3>Search Property By Category</h3> <BsFilter className='pl-2 w-7 inline-flex'/>
            </div>
            <div>{filter && <PropertySearch/>}</div>
            <h3 className='text-2xl font-bold text-[#00afef] py-5'>
                Properties {router.query.purpose}
            </h3>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                {properties?.map((property) => <Property property={property} key={property.id}/>)}
            </div>
            {properties?.length === 0 && (
                <div className='flex items-center justify-center py-6'>
                    <Image src={noresult} alt='/'/>
                </div>
            )}
        </div>
    </div>
  )
}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }

export default PropertyFilter