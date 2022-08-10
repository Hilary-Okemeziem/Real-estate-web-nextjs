import React, {useEffect, Fragment, useState} from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {ImSearch} from 'react-icons/im'
import { FaUserAlt, FaUserCheck} from 'react-icons/fa'
import {HiChevronDown} from 'react-icons/hi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image'
import Link  from 'next/link';
import logo from '../public/images/logo.png'
import { Menu, Transition } from '@headlessui/react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const { user } = UserAuth();


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
                            <Link href='/PropertyFilter' passHref>
                                <li className='mr-8 text-sm uppercase hover:text-[#00afef] cursor-pointer'>
                                    Search By Category
                                </li>
                            </Link>
                            <div>
                                <Menu as='div' className='relative text-left ml-1'>
                                    <div className='flex'>
                                        <Menu.Button>
                                            <p className='text-sm uppercase mr-8 hover:text-[#00afef]'>properties <HiChevronDown size={20} className='inline ml-2' /></p>
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter='transition ease-out duration-100'
                                        enterFrom='transform opacity-0 scale-95'
                                        enterTo='transform opacity-100 scale-100'
                                        leave='transition ease-in duration-75'
                                        leaveFrom='transform opacity-100 scale-100'
                                        leaveTo='transform opacity-0 scale-95'
                                    >
                                        <Menu.Items className='origin-top-right absolute right-[-2rem] mt-4 w-56 divide-y divide-gray-100 rounded-md bg-[#F5F5F5] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                            <div className='py-1'>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className='block px-4 py-2 text-primary border-b text-center hover:text-[#00afef]'>
                                                        <Link
                                                            href='/PropertyFilter?purpose=For-Sale' passHref
                                                            className={(
                                                            active
                                                                ? 'bg-gray-500 text-gray-100'
                                                                : 'text-gray-200'
                                                            )}
                                                        >
                                                            For Sale
                                                        </Link>
                                                    </div>
                                                    )}
                                                </Menu.Item>

                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className='block px-4 py-2 text-primary text-center cursor-pointer hover:text-[#00afef]'>
                                                        <Link 
                                                            href='/PropertyFilter?purpose=For-Rent' passHref
                                                            className={(
                                                            active
                                                                ? 'bg-gray-500 text-gray-100'
                                                                : 'text-gray-200'
                                                            )}
                                                        >
                                                            For Rent      
                                                        </Link>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                            {user?.email ? (
                                <Link href='/Account' passHref>
                                    <li className='ml-2 text-sm uppercase hover:text-[#00afef] cursor-pointer'>
                                        <FaUserCheck className='inline mr-2 mb-1' size={20}/> Account
                                    </li>
                                </Link>
                            ) : (
                                <Link href='/Login' passHref>
                                    <li className='ml-2 text-sm uppercase hover:text-[#00afef] cursor-pointer'>
                                        <FaUserAlt className='inline mr-2 mb-1' size={18}/> Login / Sign In
                                    </li>
                                </Link>
                            )}
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
                                {user?.email ? (
                                    <Link href='/Account'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                            <FaUserCheck className='inline mr-2 mb-1'/> Account
                                        </li>
                                    </Link>
                                ) : (
                                    <Link href='/Login'>
                                        <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                            <FaUserAlt className='inline mr-2 mb-1'/> Login / Sign In
                                        </li>
                                    </Link>
                                )}
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

                                <Link href='#' >
                                    <li className='py-4 text-sm ' onClick={() => setNav(false)}>    
                                        Agents
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
                        <div className='flex items-center justify-between py-[0.5rem]'>
                            {user?.email ? (
                                <div className='text-[#00afef]'>
                                    <FaUserCheck className='inline text-[#00afef] mr-2' size={20}/><Link href='/Account' passHref>Account</Link>
                                </div>
                            ) : (
                                <div className='text-[#00afef]'>
                                    <FaUserAlt className='inline text-[#00afef] mr-2' size={20}/><Link href='/Login' passHref>Login / Sign In</Link>
                                </div>
                            )}
                            <div className='flex text-white'>
                                <p className='mr-5 text-[#00afef]'><MdEmail className='inline text-[#00afef]'/> info@lharyhomes.com</p>
                                <p className='lg:inline text-[#00afef] hidden'><BsTelephoneFill className='inline text-[#00afef]'/> +234 806 517 2602</p>
                            </div> 
                        </div>
                        <hr />
                        <div className='flex justify-between items-center w-full h-full py-[0.5rem]'>
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
                                className='md:hidden z-10 text-white'
                            >
                                <AiOutlineMenu size={25} />
                            </div>
                        </div>
                        <hr />
                        <div className='py-[1rem]'>
                            <ul className='hidden lg:flex lg:flex-wrap'>
                                <Link href='/'>
                                    <li className='text-xs uppercase hover:text-[#00afef] cursor-pointer'>
                                        Home <span className='ml-8'>|</span>
                                    </li>
                                </Link>
                                <Link href='/PropertyFilter' passHref>
                                    <li className='ml-8 text-sm uppercase hover:text-[#00afef] cursor-pointer'>
                                        Search <span className='ml-8'>|</span>
                                    </li>
                                </Link>
                                <Link href='/PropertyFilter?purpose=For-Sale' passHref>
                                    <li className='ml-8 text-sm uppercase hover:text-[#00afef] cursor-pointer'>
                                        For Sale <span className='ml-8'>|</span>
                                    </li>
                                </Link>
                                <Link href='/PropertyFilter?purpose=For-Rent' passHref>
                                    <li className='ml-8 text-sm uppercase hover:text-[#00afef] cursor-pointer'>
                                        For Rent<span className='ml-8'>|</span>
                                    </li>
                                </Link>
                                <Link href='#'>
                                    <li className='ml-8 text-sm uppercase hover:text-[#00afef] cursor-pointer'>
                                        Agents
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
                                        {user?.email ? (
                                            <Link href='/Account'>
                                                <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                                    <FaUserCheck className='inline mr-2 mb-1'/> Account
                                                </li>
                                            </Link>
                                        ) : (
                                            <Link href='/Login'>
                                                <li className='py-4 text-sm' onClick={() => setNav(false)}>
                                                    <FaUserAlt className='inline mr-2 mb-1'/> Login / Sign In
                                                </li>
                                            </Link>
                                        )}
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

                                        <Link href='#' >
                                            <li className='py-4 text-sm ' onClick={() => setNav(false)}>    
                                                Agents
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