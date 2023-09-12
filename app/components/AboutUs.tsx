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
      <h1 className='text-olivergreen mb-10'>AboutUs</h1>
      <div className='lg:flex flex-wrap items-center justify-center'>
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
              width={iframeSize}
              height={iframeHeight}
              src='https://www.youtube.com/embed/PGtBizeljKE?si=5Cmth6eR_dn2v3-T'
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
