import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useRouter } from 'next/router'
import {AiOutlineMail, AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { toast } from "react-toastify";
import Link from 'next/link';


const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {user, signIn} = UserAuth()
    const router = useRouter();
    const [passwordEye, setPasswordEye] = useState(false);
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

    const handlePasswordEye = () => {
        setPasswordEye(!passwordEye)
    }

    const handleConfirmPasswordEye = () => {
        setConfirmPasswordEye(!confirmPasswordEye)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('')
        try {
            await signIn(email, password);
            router.push('/PropertyFilter')
        } catch (error) {
            setError(error.message)
            console.log(error)
        }

    }

  return (
    <div className='bg-[#f5f5f5]'>
        <div className='pt-[11rem] md:pt-[15rem] pb-[3.4rem]'>
            <div className='bg-white rounded-xl shadow-sm max-w-[350px] mx-auto min-h-[400px] px-4 pt-16 border border-dashed'>
                <div className='max-w-[320px] mx-auto p-2'>
                    <h1 className='text-2xl font-bold text-center'>Sign In with Email</h1>
                    {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <div className='relative w-full'>
                            <input 
                            onChange={(event) => 
                            setEmail(event.target.value)} 
                            required 
                            className='p-3 my-2 bg-gray-200 rounded w-full' type="email" 
                            placeholder='Enter Email Address' autoComplete='email' />
                            <AiOutlineMail className='absolute right-3 top-6 text-gray-400'/>
                        </div>
                        
                        <div className='relative w-full'>
                            <input 
                            onChange={(event) => setPassword(event.target.value)} 
                            required 
                            className='p-3 my-2 bg-gray-200 rounded w-full' type={(passwordEye === false) ? 'password' : 'text'}  
                            placeholder='Enter Password' autoComplete='current-password' />
                            <div className='absolute right-3 top-6'>
                                {(passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handlePasswordEye} className='text-gray-400'/>}
                            </div>
                        </div>

                        <button className='bg-[#00afef] py-3 mt-6 rounded font-bold'>Sign In</button>
                    </form>
                    <Link href='/Login'> 
                        <p className='my-2'>Already have an account? <span className='text-[#00afef] cursor-pointer'>Log In</span></p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Signin;