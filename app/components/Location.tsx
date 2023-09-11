"use client";
import React, { useEffect, useState } from "react";
import { BiChurch } from "react-icons/bi";
import { PiWineBold } from "react-icons/pi";
import { useWindowSize } from "../hooks/useWindowSize";

export const Location = () => {
  const [width, height] = useWindowSize();
  const [iframeSize, setIframeSize] = useState(0);

  useEffect(() => {
    setIframeSize(width > 1024 ? 500 : 300);
  }, [width]);

  return (
    <section className='h-screen w-full text-center'>
      <h1 className='text-olivergreen my-10'>Location</h1>
      <div className='lg:flex lg:justify-around'>
        <div className='mb-8 lg:mb-0 flex flex-col items-center'>
          <BiChurch size='70' className='text-olivergreen mb-5' />
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0058441938017!2d-75.38228072403535!3d6.1299146938569145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469f2588a3d047%3A0x3911ff3183da0b5f!2sIglesia%20de%20San%20Antonio%20de%20Pereira!5e0!3m2!1sen!2sco!4v1694393433873!5m2!1sen!2sco'
            width={iframeSize}
            height={iframeSize}
            allowFullScreen={false}
            className='border-8 border-solid border-olivergreen shadow-xl'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className='mb-8 lg:mb-0 flex flex-col items-center'>
          <PiWineBold size='70' className='text-olivergreen mb-5' />
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.937062563468!2d-75.43589972403532!3d6.139157693847763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469f132d4ede07%3A0xc93840384908b3b0!2sHotel%20Lagoon%20Llanogrande!5e0!3m2!1sen!2sco!4v1694393514318!5m2!1sen!2sco'
            width={iframeSize}
            height={iframeSize}
            allowFullScreen={false}
            className='border-8 border-solid border-olivergreen shadow-xl'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>
  );
};
