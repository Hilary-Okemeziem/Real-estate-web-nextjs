import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { useRouter, Router } from 'next/router'
import {FaUserCircle} from 'react-icons/fa'
import SavedProperty from '../components/SavedProperty';
import Footer from '../components/Footer';

const Account = () => {
    const { logOut, user } = UserAuth();
    const router = useRouter();

    const handleSignOut = async () => {
        try {
          await logOut()
          router.push('/')
          console.log('You are logged out');
          
        } catch (error) {
          console.log(error);
        }
      }

  if (user) {
    return (
        <div className='bg-[#f5f5f5] w-full'>
            <div className='px-2 max-w-[1110px] mx-auto'>
                <div className='pt-[12rem] md:pt-[15rem]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <FaUserCircle className='text-5xl'/>
                            <div>
                                <h1 className='text-3xl font-bold inline'>Your Account</h1>
                                <div>
                                <p>{user?.email}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p onClick={handleSignOut}  className='rounded-lg py-2 border bg-[#00afef] px-4 shadow-sm cursor-pointer text-white'>Sign Out</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center py-12'>
                        <div className='w-full'>
                            <h1 className='text-3xl font-bold py-4'>Saved Properties</h1>
                            <SavedProperty/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
  } else {
    router.push('/Login')
  }
}

export default Account