import Image from 'next/image'
import React from 'react'
import footer from '../public/images/footer-background2.jpg'
import {GrLocation} from 'react-icons/gr'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='relative'>
            <div className='relative w-full h-[128vh] sm:h-[90vh]  lg:h-[50vh]'>
                <Image src={footer} layout="fill" objectFit="cover" alt="/" />
            </div>
            
            <div className='absolute top-0 left-0 w-full h-full pt-[5rem]'>
                <div className='max-w-[1110px] mx-auto px-4'>
                    <div className='flex items-center justify-between flex-wrap lg:flex-nowrap text-white gap-4'>
                        <div>
                            <h2 className='font-bold text-xl uppercase heading2'>About Us</h2>
                            <div className='py-4 w-[22rem]'>
                                Founded in 1976 to provide independent brokerages with a powerful marketing and referral program for luxury listings, the Lhary Homes International Realty network was designed to connect the finest independent real estate companies to the most prestigious clientele in the world. 
                            </div>
                        </div>

                        <div>
                            <h2 className='font-bold text-xl uppercase heading2'>Properties</h2>
                            <ul className='py-4'>
                                <li className='py-3 cursor-pointer hover:text-[#00afef]'>
                                    <Link href='/PropertyFilter' passHref>Search by category</Link>
                                </li>
                                <li className='py-3 cursor-pointer hover:text-[#00afef]'>
                                    <Link href='/PropertyFilter?purpose=For-Sale' passHref>For Rent</Link>
                                </li>
                                <li className='py-3 cursor-pointer hover:text-[#00afef]'>
                                    <Link href='/PropertyFilter?purpose=For-Sale' passHref>For Sale</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='font-bold text-xl uppercase heading2'>Get in touch with us</h2>
                            <ul className='py-4'>
                                <li className='py-2 cursor-pointer hover:text-[#00afef] w-[18rem]'>113 Barksdale Professional Center Newark DE 19711 USA</li>
                                <li className='py-2 cursor-pointer hover:text-[#00afef]'>Email: info@lharyhomes.com</li>
                                <li className='py-2 cursor-pointer hover:text-[#00afef]'>Phone: +234 806 517 2602</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-sm text-center bg-[#233e5a] py-4 text-white'>&copy;2022. Powered by Rapid API (Bayut API). Developed by Hilary</div>
        </div>
    </div>
  )
}

export default Footer