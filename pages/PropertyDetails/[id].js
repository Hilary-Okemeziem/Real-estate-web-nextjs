import React from 'react'
import { FaBed, FaBath} from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { BiBuildingHouse} from 'react-icons/bi'
import { GoVerified} from 'react-icons/go'
import millify from 'millify' 
import { baseUrl, fetchApi} from '../../utils/fetchApi'

const PropertyDetails = ({PropertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos }}) => {
  return (
    <div className='bg-[#f5f5f5]'>
        <div className='px-2 max-w-[1110px] w-full mx-auto'>
            <div>
                {photos && <ImageCarousel data={photos}/>}
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps({ params: {id}}) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            PropertyDetails: data
        }
    }
}

export default PropertyDetails