import React from 'react';
import { useState } from 'react';
import { Facebook, Instagram, Twitter } from "lucide-react";
import Img from '../assets/Registration.jpg';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      nav('/Login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden'>
        <div className='bg-blue-500 w-1/2 h-[500px]'>
          <div className='p-8'>
            <p className='text-white text-xl font-bold mb-4'>
              Sign in to unlock a <br/> world of health and vitality
            </p>
            <img className='w-full' src={Img} alt='Registration'/>
          </div>
        </div>
        <div className='bg-white w-1/2 p-8'>
          <h1 className='text-2xl font-semibold mb-4'>SignIn</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-600'>Email Address:</label>
              <input 
                type='email' 
                id='email' 
                name='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='johnson@email.com'
                className='mt-1 p-2 w-full border rounded-sm focus:outline-none focus:border-blue-500'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-600'>Password:</label>
              <input 
                type='password' 
                id='password' 
                name='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className='mt-1 p-2 w-full border rounded-sm focus:outline-none focus:border-blue-500'
              />
            </div>
            <button 
              type='submit' 
              className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
            >
              Continue
            </button>
          </form>
          <div className='mt-4'>
            <h4 className='text-sm font-medium text-gray-600'>Or connect with social media</h4>
            <div className='flex mt-2'>
              <Facebook className='mr-4 cursor-pointer'/>
              <Instagram className='mr-4 cursor-pointer'/>
              <Twitter className='cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
