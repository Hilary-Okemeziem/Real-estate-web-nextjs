import Image from 'next/image';
import React from 'react'
import CountUp from "react-countup";

const CountUpSection = () => {
  return (
    <div className='w-full pb-16'>
        <div className='bg-fixed w-full h-[70vh] bg-center bg-no-repeat bg-cover countUp-img lg:flex items-center justify-center hidden'>
            <div className='px-2 max-w-[1100px] w-full mx-auto'>
                <div className='flex items-center justify-between text-white'>
                    <div>
                        <CountUp end={432} duration={4} enableScrollSpy className='text-6xl font-bold italic ml-[4.5rem]' />
                    </div>
                    <div>
                        <CountUp end={482} duration={4} enableScrollSpy className='text-6xl font-bold italic ml-[4.5rem]'/>
                    </div>
                    <div>
                        <CountUp end={157} duration={4} enableScrollSpy className='text-6xl font-bold italic ml-[3rem]'/>
                    </div>
                    <div>
                        <CountUp end={269} duration={4} enableScrollSpy className='text-6xl font-bold italic mr-[1rem]'/>
                    </div>
                </div>
                <div className='flex items-center justify-between text-white py-4'>
                    <div className='uppercase font-bold text-xl'>Properties for sale</div>
                    <div className='uppercase font-bold text-xl'>Properties for Rent</div>
                    <div className='uppercase font-bold text-xl'>Vacation Rentals</div>
                    <div className='uppercase font-bold text-xl'>Landlords</div>
                </div>
            </div>
        </div>

        <div className='relative lg:hidden'>
            <div className='absolute w-full h-full bg-black/25'></div>
            <div className='relative w-full h-[80vh]'>
                <Image src='https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' layout="fill" objectFit="cover" alt="/" />
            </div>

            <div className='grid sm:grid-cols-2 mx-auto p-2 absolute top-0 left-0 w-full h-full items-center justify-center text-white'>
                <div>
                    <CountUp end={432} duration={4} enableScrollSpy className='text-6xl font-bold italic ml-[4.5rem] sm:ml-[7rem] md:ml-[9rem]'/>
                    <div className='uppercase font-bold text-xl py-3 text-center'>Properties for sale</div>
                </div>
                <div>
                    <CountUp end={482} duration={4} enableScrollSpy className='text-6xl font-bold italic ml-[4.5rem] sm:ml-[7rem] md:ml-[9rem]'/>
                    <div className='uppercase font-bold text-xl py-3 text-center'>Properties for Rent</div>
                </div>
                <div>
                    <CountUp end={157} duration={4} enableScrollSpy className='text-6xl font-bold italic ml-[4.5rem] sm:ml-[7rem] md:ml-[9rem]'/>
                    <div className='uppercase font-bold text-xl py-3 text-center'>Vacation Rentals</div>
                </div>
                <div>
                    <CountUp end={269} duration={4} enableScrollSpy className='text-6xl font-bold italic ml-[4.5rem] sm:ml-[7rem] md:ml-[9rem]'/>
                    <div className='uppercase font-bold text-xl py-3 text-center'>Landlords</div>
                </div>     
            </div>    
        </div>
    </div>
  )
}

export default CountUpSection