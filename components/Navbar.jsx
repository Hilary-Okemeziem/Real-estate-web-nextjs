import React, {Fragment, useEffect, useState} from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {ImSearch} from 'react-icons/im'
import {HiChevronDown} from 'react-icons/hi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image'
import Link  from 'next/link';
import logo from '../public/images/logo.png'
import { Menu, Transition } from '@headlessui/react'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const changeNavbg = () => {
    if (window.scrollY >= 150) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbg);
  }, [])

  return (
    <div>
        {navBg ? 
        (
        <div style={{ backgroundColor: `${navBg}` }} className='fixed w-full h-35 z-[100] shadow-xl bg-[white] ease-linear duration-1000'>
            <div className='px-2 py-2 max-w-[1200px] w-full mx-auto'>
                <div className='flex justify-between gap-8 items-center w-full h-full px-2 lg:px-10 2xl:px-16'>
                    <Link href='/'>
                        <Image src={logo} alt="/" width='125px' height='80px' className='cursor-pointer'/>               
                    </Link>  
            
                    <div>
                        <ul className='hidden lg:flex lg:flex-wrap'>
                            <Link href='/'>
                                <li className='text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                    Home <span className='ml-2'>|</span>
                                </li>
                            </Link>
                            <Link href='/PropertyFilter' passHref>
                                <li className='ml-4 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                    Search <span className='ml-2'>|</span>
                                </li>
                            </Link>
                            <Link href='/PropertyFilter?purpose=For-Sale' passHref>
                                <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                    For Sale <span className='ml-2'>|</span>
                                </li>
                            </Link>
                            <Link href='/PropertyFilter?purpose=For-Rent' passHref>
                                <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                    For Rent<span className='ml-2'>|</span>
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                    Agents <span className='ml-2'>|</span>
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                    Features<span className='ml-2'>|</span>
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                    Property Inquiry(CRM) <span className='ml-2'>|</span>
                                </li>
                            </Link>
                            <Link href='/'>
                                <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                    Open houses
                                </li>
                            </Link>
                        </ul>

                        {/* Hamburger Icon */}
                        <div
                            onClick={handleNav}
                            className='lg:hidden z-10'
                        >
                            <AiOutlineMenu size={25}/>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {/* Overlay */}
                <div className={
                    nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>

                    {/* Side Drawer Menu */}
                    <div className={
                        nav
                        ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f5f5f5] p-4 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-4 ease-in duration-500'}>
                        <div>
                            <div className='flex w-full items-center justify-between '>
                                <Link href='/' >
                                    <Image src={logo} alt="/" width='125px' height='80px' className='cursor-pointer' onClick={() => setNav(false)}/>
                                </Link>
                                
                                <div
                                    onClick={handleNav}
                                    className='rounded-full shadow-md p-3 cursor-pointer'
                                >
                                    <AiOutlineClose />
                                </div>
                            </div>

                            <div className='border-b border-gray-300 my-3'>
                                <p className='w-[85%] md:w-[90%] py-3'>
                                    Find yourself the perfect home
                                </p>
                            </div>
                        </div>

                        <div className='py-2 flex flex-col'>
                            <ul className='uppercase'>
                                <Link href='/' >
                                    <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                        Home
                                    </li>
                                </Link>

                                <Link href='/PropertyFilter' passHref>
                                    <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                        Search
                                    </li>
                                </Link>

                                <Link href='/PropertyFilter?purpose=For-Sale' passHref>
                                    <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                        For Sale
                                    </li>
                                </Link>

                                <Link href='/PropertyFilter?purpose=For-Rent' passHref >
                                    <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                        For rent
                                    </li>
                                </Link>

                                <Link href='/' >
                                    <li className='py-4 text-sm ' onClick={() => setNav(false)}>    
                                        Agents
                                    </li>
                                </Link>

                                <Link href='/'>
                                    <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                        Features
                                    </li>
                                </Link>

                                <Link href='/'>
                                    <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                        Property Inquiry(CRM)
                                    </li>
                                </Link>        
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) 
        : 
        (
            <div style={{ backgroundColor: `${navBg}` }} className='fixed w-full h-35 z-[100]'>
                <div className='px-2 max-w-[1200px] w-full mx-auto'>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between py-2'>
                            <div></div>
                            <div className='flex text-white'>
                                <p className='mr-5 text-[#00afef]'><MdEmail className='inline text-[#00afef]'/> info@lharyhomes.com</p>
                                <p className='text-[#00afef]'><BsTelephoneFill className='inline text-[#00afef]'/> +234 806 517 2602</p>
                            </div> 
                        </div>
                        <hr />
                        <div className='flex justify-between items-center w-full h-full py-2'>
                            <Link href='/'>
                                <Image src={logo} alt="/" width='140px' height='90px' className='cursor-pointer'/>               
                            </Link>

                            <form className='relative md:block hidden'>
                                <input
                                    className='w-full border border-input px-4 py-2 rounded-md'
                                    type='text'
                                    placeholder='Search...'
                                />
                                <ImSearch className='absolute top-3 right-3 text-[#00afef]'/>
                            </form>

                            {/* Hamburger Icon */}
                            <div
                                onClick={handleNav}
                                className='lg:hidden z-10 md:text-white'
                            >
                                <AiOutlineMenu size={25} />
                            </div>
                        </div>
                        <hr />
                        <div className='py-5'>
                            <ul className='hidden lg:flex lg:flex-wrap'>
                                <Link href='/'>
                                    <li className='text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                        Home <span className='ml-2'>|</span>
                                    </li>
                                </Link>
                                <Link href='/PropertyFilter' passHref>
                                    <li className='ml-4 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                        Search <span className='ml-2'>|</span>
                                    </li>
                                </Link>
                                <Link href='/PropertyFilter?purpose=For-Sale' passHref>
                                    <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                        For Sale <span className='ml-2'>|</span>
                                    </li>
                                </Link>
                                <Link href='/PropertyFilter?purpose=For-Rent' passHref>
                                    <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                        For Rent<span className='ml-2'>|</span>
                                    </li>
                                </Link>
                                <Link href='/'>
                                    <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                        Agents <span className='ml-2'>|</span>
                                    </li>
                                </Link>
                                <Link href='/'>
                                    <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                        Features<span className='ml-2'>|</span>
                                    </li>
                                </Link>
                                <Link href='/'>
                                    <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                        Property Inquiry(CRM) <span className='ml-2'>|</span>
                                    </li>
                                </Link>
                                <Link href='/'>
                                    <li className='ml-2 text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                        Open houses
                                    </li>
                                </Link>
                            </ul>
                        </div>

                        {/* Mobile Menu */}
                        {/* Overlay */}
                        <div className={
                            nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : '' }>

                            {/* Side Drawer Menu */}
                            <div className={
                                nav
                                ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f5f5f5] p-4 ease-in duration-500'
                                : 'fixed left-[-100%] top-0 p-4 ease-in duration-500'}>
                                <div>
                                    <div className='flex w-full items-center justify-between '>
                                        <Link href='/' >
                                            <Image src={logo} alt="/" width='125px' height='80px' className='cursor-pointer' onClick={() => setNav(false)}/>
                                        </Link>
                                        
                                        <div
                                            onClick={handleNav}
                                            className='rounded-full shadow-md p-3 cursor-pointer'
                                        >
                                            <AiOutlineClose />
                                        </div>
                                    </div>

                                    <div className='border-b border-gray-300 my-3'>
                                        <p className='w-[85%] md:w-[90%] py-3'>
                                            Find yourself the perfect home
                                        </p>
                                    </div>
                                </div>

                                <div className='py-2 flex flex-col'>
                                    <ul className='uppercase'>
                                        <Link href='/' >
                                            <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                                Home
                                            </li>
                                        </Link>

                                        <Link href='/PropertyFilter' passHref>
                                            <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                                Search
                                            </li>
                                        </Link>

                                        <Link href='/PropertyFilter?purpose=For-Sale' passHref>
                                            <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                                For Sale
                                            </li>
                                        </Link>

                                        <Link href='/PropertyFilter?purpose=For-Rent' passHref >
                                            <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                                For rent
                                            </li>
                                        </Link>

                                        <Link href='/' >
                                            <li className='py-4 text-sm ' onClick={() => setNav(false)}>    
                                                Agents
                                            </li>
                                        </Link>

                                        <Link href='/'>
                                            <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                                Features
                                            </li>
                                        </Link>

                                        <Link href='/'>
                                            <li className='py-4 text-sm' onClick={() => setNav(false)}>    
                                                Property Inquiry(CRM)
                                            </li>
                                        </Link>        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        }
    </div>
  )
}

export default Navbar