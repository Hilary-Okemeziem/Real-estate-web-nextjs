import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='absolute pt-[15rem] md:pt-[18rem] w-full h-[100vh] bg-black/25'>
        <div className='text-center'>
          <p className='text-3xl md:text-5xl lg:text-6xl text-white py-2 font-bold'>Residential Buildings For Sale / For Rent</p>
          <p className='text-2xl lg:text-3xl text-white py-3'>314 W Calora St, San Dimas, Los Angeles, California 91773</p>
          
          <Link href='/PropertyFilter' passHref>
            <button className='bg-[#0eafef] text-white my-2 px-5 py-2 rounded-2xl shadow-lg hover:shadow-2xl '>More Info</button>
          </Link>   
        </div>
      </div>
    </div>
  )
}

export default Hero