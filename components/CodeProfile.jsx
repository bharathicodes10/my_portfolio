import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Codechef from '../public/assets/skills/codechef_logo.png'
import hackerrank from '../public/assets/skills/hackerrank_logo.png'
import leetcode from '../public/assets/skills/leetcode_logo.png'
import AWS from '../public/assets/skills/aws.png';

const CodeProfile = () => {
  return (
    <div id='codes' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full animate-fade-in-down'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Coding Profiles
        </p>
        <h2 className='py-4'>My coding profiles</h2>
        <p>Click the icons to view my profiles</p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
              <a href="https://www.codechef.com/users/blackunicorn10"> <Image src={Codechef} width='64px' height='64px' alt='/' /></a> 
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CodeChef</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={leetcode} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Leetcode</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <a href="https://www.hackerrank.com/bharathi_10"><Image src={hackerrank} width='64px' height='64px' alt='/' /></a>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>hackerrank</h3>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default CodeProfile;
