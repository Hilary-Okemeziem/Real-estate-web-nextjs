import Image from 'next/image'
import React from 'react'
import contact from '../public/images/contact-us.jpg'

const ContactUs = () => {
  return (
    <div className='w-full py-16'>
        <div className='bg-fixed w-full h-[85vh] bg-center bg-no-repeat bg-cover contact-img lg:flex items-center justify-center hidden'>
            <div className='px-2 max-w-[1100px] w-full mx-auto'>
                <div className='flex items-center justify-center text-white'>
                    <h3 className='text-3xl font-bold heading tracking-widest'>Contact Us</h3>
                </div>
                <div className='py-8'>
                    <form>
                        <div className='grid grid-cols-2 gap-4 w-full'>
                            <div>
                                <input type="text" placeholder='Your Name (Required)' required className='bg-transparent py-2 px-4 rounded-sm w-full border border-gray-400'/>
                            </div>
                            <div>
                                <input type="email" placeholder='Your Email (Required)' required className='bg-transparent py-2 px-4 rounded-sm w-full border border-gray-400'/>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 w-full py-8'>
                            <div>
                                <input type="tel" placeholder='Phone Number' className='bg-transparent py-2 px-4 rounded-sm w-full border border-gray-400'/>
                            </div>
                            <div>
                                <input type="text" placeholder='Subject' className='bg-transparent py-2 px-4 rounded-sm w-full border border-gray-400'/>
                            </div>
                        </div>
                        <div>
                            <textarea cols="30" rows="6" placeholder='Message' className='bg-transparent py-2 px-4 rounded-sm w-full border border-gray-400'></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className='relative lg:hidden'>
            <div className='relative w-full h-[100vh]'>
                <Image src={contact} layout="fill" objectFit="cover" alt="/" />
            </div>

            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='flex items-center justify-center text-white py-5'>
                    <h3 className='text-3xl font-bold heading tracking-widest'>Contact Us</h3>
                </div>

                <div className='py-8 px-6'>
                    <form>
                        <div className='grid sm:grid-cols-2 gap-4 w-full'>
                            <div>
                                <input type="text" placeholder='Your Name (Required)' required className='bg-transparent py-2 px-4 rounded-sm w-full border border-gray-400'/>
                            </div>
                            <div className='pt-4 sm:pt-0'>
                                <input type="email" placeholder='Your Email (Required)' required className='bg-transparent py-2 px-4 rounded-sm w-full border border-gray-400'/>
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-4 w-full py-8'>
                            <div>
                                <input type="tel" placeholder='Phone Number' className='bg-transparent py-2 px-4 rounded-sm w-full border border-gray-400'/>
                            </div>
                            <div className='pt-4 sm:pt-0'>
                                <input type="text" placeholder='Subject' className='bg-transparent py-2 px-4 rounded-sm w-full border border-gray-400'/>
                            </div>
                        </div>
                        <div>
                            <textarea cols="30" rows="6" placeholder='Message' className='bg-transparent py-2 px-4 rounded-sm w-full border border-gray-400'></textarea>
                        </div>
                    </form>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default ContactUs