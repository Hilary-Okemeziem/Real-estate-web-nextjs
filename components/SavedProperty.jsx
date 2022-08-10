import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import img from '../public/images/comingsoon.jpg'
import millify from 'millify';
import Link from 'next/link';
import Image from 'next/image';
import { FaBath, FaBed } from 'react-icons/fa';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsGridFill } from 'react-icons/bs';

const SavedProperty = () => {
    const { user } = UserAuth();
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setProperties(doc.data()?.savedProperty);
        });
    }, [user?.email]);

    const propertyRef = doc(db, 'users', `${user?.email}`);
    const deleteProperty = async (passedid) => {
        try {
            const result = properties.filter((item) => item.id !== passedid)
            await updateDoc(propertyRef, {
                savedProperty: result
            });
        } catch (error) {
            console.log(error);
            
        }
    };
  return (
    <div>
        {properties?.length === 0 ? (
            <p className='text-lg'>You don&apos;t have any property saved. Please save a property to add it to your saved items. <Link href='/PropertyFilter'><span className='text-[#00afef] cursor-pointer'>Click here to search properties.</span></Link></p>
        ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {properties?.map((property) => (
                    <div className='bg-white shadow-md' key={property.id}>
                        <div className='relative flex items-center justify-center h-auto w-full group hover:bg-gradient-to-r from-[#00afef] to-[#5fc9f0] cursor-pointer'>
                            <Link href={`/PropertyDetails/${property?.externalID}`} passHref>
                                <Image src={property?.coverPhoto ? property?.coverPhoto : img} alt='/' width={400} height={280} className='group-hover:opacity-30'/>
                            </Link>
                            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                <Link href={`/PropertyDetails/${property?.externalID}`} passHref>
                                    <h3 className='text-3xl font-bold text-white'>More Details</h3>
                                </Link>
                            </div>
                        </div>
                        <div className='px-5 py-4'>
                            <div className='pb-2 font-bold'>
                                {property?.title.length > 31 ? `${property?.title.substring(0, 31)}...` : property?.title}
                            </div>
                            <hr />
                            <div className='grid grid-cols-2 gap-5 py-3'>
                                <div className='mx-auto text-gray-500'>
                                    <FaBed className='inline mr-1'/> {property?.rooms} Bedroom(s)
                                </div>
                                <div className='mx-auto text-gray-500'>
                                    <FaBath className='inline mr-1'/> {property?.baths} Bathroom(s)
                                </div>
                                <div className='mx-auto text-gray-500'>
                                    <BiBuildingHouse className='inline mr-1'/> {millify(property?.area)} sqft
                                </div>
                                <div className='mx-auto text-gray-500'>
                                    <BsGridFill className='inline mr-1'/> {property?.furnishingStatus ? property?.furnishingStatus : 'unfurnished'}
                                </div>
                            </div>
                            <hr />
                            <div className='flex justify-between items-center pt-2'>
                                <AiOutlineClose onClick={()=> deleteProperty(property.id)} className='cursor-pointer text-xl'/>
                                <div className='text-[#00afef] text-xl font-bold'>NGN {millify(property?.price)}{property?.rentFrequency && `/${property?.rentFrequency}`}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default SavedProperty