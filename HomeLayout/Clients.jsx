import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import ABinBev from '../public/images/ABinBev.png'
import Beiersdorf from '../public/images/Beiersdorf-Logo.png'
import CISCO from '../public/images/CISCO-Logo.png'
import Clickatell from '../public/images/Clickatell-Logo.png'
import Ecobank from '../public/images/Ecobank-Logo.png'
import FBN from '../public/images/FBN-Quest-Logo.png'
import Firmenich from '../public/images/Firmenich-Logo.png'
import KPMG from '../public/images/KPMG_Logo.png'
import Man from '../public/images/Man-Logo.png'
import NCR from '../public/images/NCR_Logo.png'
import Nestle from '../public/images/Nestle-Logo.png'
import Persianas from '../public/images/Persianas-Logo.png'
import procter_and_gamble from '../public/images/procter-and-gamble.png'
import Sunbird from '../public/images/Sunbird_Logo.png'
import Union_Bank from '../public/images/Union-Bank.png'


const Clients = () => {
  return (
        <div className='w-full py-16'>
            <div className='flex items-center justify-center pb-8'>
                <h1 className='text-2xl sm:text-3xl tracking-widest font-bold uppercase heading'>Cooperate Clients</h1>
            </div>

            <Marquee pauseOnHover speed={45} gradient={false} className='scrollbar-hide'>
                <div className='flex items-center justify-center gap-16 lg:gap-20'>
                    <div>
                        <Image src={ABinBev} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200'/>
                    </div>

                    <div>
                        <Image src={Beiersdorf} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={CISCO} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={Clickatell} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={Ecobank} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={FBN} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={Firmenich} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={KPMG} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={Man} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={NCR} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={Nestle} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={Persianas} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={procter_and_gamble} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={Sunbird} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>

                    <div>
                        <Image src={Union_Bank} alt="/" width={120} height={120} className='lg:hover:scale-110 ease-in duration-200' />
                    </div>
                </div>
            </Marquee>
        </div>
  )
}

export default Clients