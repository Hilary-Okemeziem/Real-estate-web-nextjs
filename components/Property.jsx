import React, { useState } from 'react'
import { FaBed, FaBath} from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { BiBuildingHouse} from 'react-icons/bi'
import millify from 'millify' 
import Link from 'next/link'
import Image from 'next/image'
import img from '../public/images/comingsoon.jpg'
import {FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, externalID, furnishingStatus, id}}) => {
    const [savedProperty, setSavedProperty] = useState(false)
    const [alert, setAlert] = useState('')
    const {user} = UserAuth()

    const propertyRef = doc(db, 'users', `${user?.email}`)

    const saveProperty = async () => {
      if (user?.email) {
        setSavedProperty(true)
        await updateDoc(propertyRef, {
          savedProperty: arrayUnion({
            id: id,
            externalID: externalID,
            title: title,
            coverPhoto: coverPhoto.url,
            price: price,
            rentFrequency: rentFrequency,
            rooms: rooms,
            baths: baths,
            area: area,
            furnishingStatus: furnishingStatus,
          })
        })
      } else {
        // alert('Please sign in to save a coin to your watch list')
        setAlert('Please sign in to save a property to your watch list')
      }
    }
  return (
    <div>      
        <div className='bg-white shadow-md'>
            <div className='relative flex items-center justify-center h-auto w-full group hover:bg-gradient-to-r from-[#00afef] to-[#5fc9f0] cursor-pointer'>
                <Link href={`/PropertyDetails/${externalID}`} passHref>
                    <Image src={coverPhoto ? coverPhoto.url : img} alt='/' width={400} height={280} className='group-hover:opacity-30'/>
                </Link>
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <Link href={`/PropertyDetails/${externalID}`} passHref>
                        <h3 className='text-3xl font-bold text-white'>More Details</h3>
                    </Link>
                </div>
            </div>
            <div className='px-5 py-4'>
                <div className='pb-2 font-bold'>
                    {title.length > 31 ? `${title.substring(0, 31)}...` : title}
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
                    <div className='text-[#00afef] text-xl cursor-pointer ' onClick={saveProperty}>{savedProperty ? <FaHeart className='cursor-pointer'/> : <FaRegHeart className='cursor-pointer' />}</div>
                    <div className='text-[#00afef] text-xl font-bold'>NGN {millify(price)}{rentFrequency && `/${rentFrequency}`}</div>
                </div>
            </div>
        </div>
        <p className='text-red-500'>{alert}</p>
    </div>
  )
}

export default Property