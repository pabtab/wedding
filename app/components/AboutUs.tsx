"use client";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export const AboutUs = () => {
  const [width, height] = useWindowSize();
  const [iframeSize, setIframeSize] = useState(0);
  const [iframeHeight, setIframeHeight] = useState(0);
  console.log(width);

  useEffect(() => {
    setIframeSize(width > 1024 ? 540 : 300);
    setIframeHeight(width > 1024 ? 315 : 180);
  }, [width]);
  return (
    <section className='text-center'>
      <h1 className='text-olivergreen my-10'>Un poco de nosotros...</h1>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='monitor w-fit'>
          <div className='monitorscreen'>
            <iframe
              width={iframeSize}
              height={iframeHeight}
              src='https://www.youtube.com/embed/Wuf30IaeH6o?si=OEo_RVYU7IqQ-4Ss'
              title='YouTube video player'
              frameBorder='0'
              // className='border-8 border-solid border-olivergreen'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className='monitor w-fit'>
          <div className='monitorscreen'>
            <iframe
              src='https://player.vimeo.com/video/864499075?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              width={iframeSize}
              height={iframeHeight}
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              title='Bolivia trip 2019 - GoPro Hero 7'
            ></iframe>
          </div>
        </div>
        <div className='monitor w-fit'>
          <div className='monitorscreen'>
            <iframe
              width={iframeSize}
              height={iframeHeight}
              src='https://www.youtube.com/embed/Ui6_8tHjAW8?si=MjKbndiKbFqoaqzj'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className='monitor w-fit'>
          <div className='monitorscreen'>
            <iframe
              width={iframeSize}
              height={iframeHeight}
              src='https://www.youtube.com/embed/lUaFcmnYKYQ?si=20iLhaJ9DIGUZXhs'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className='monitor w-fit'>
          <h2 className='text-olivergreen text-2xl '>El día que nos conocimos</h2>
          <div className='monitorscreen'>
            <iframe
              width={iframeSize}
              height={iframeHeight}
              src='https://www.youtube.com/embed/4WSzmrdBp3Q?si=fNCbnxeGvSINz1gA'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
