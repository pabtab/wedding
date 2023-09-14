"use client";
import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { FormikHelpers } from "@/node_modules/formik/dist/types";
import { useWindowSize } from "../hooks/useWindowSize";

interface Values {
  fullName: string;
  email: string;
  food: string;
}

export const RSVPForm = () => {
  const [width, height] = useWindowSize();
  const [iframeSize, setIframeSize] = useState(0);

  useEffect(() => {
    if (width > 1024) {
      setIframeSize(900);
    } else {
      setIframeSize(400);
    }
  }, [width]);

  return (
    <section className='flex flex-col items-center p-4 w-full shadow-xl'>
      <h1 className='text-olivergreen'>RSVPForm</h1>
      <div className='border-1 border-solid p-3 bg-white shadow-xl lg:w-2/3 w-full text-center flex justify-center'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSfFII1KFwRJEdvVE0c2MoCr_jq8c01ZVZxDP0iF_PzvWBM0oQ/viewform?embedded=true'
          width={iframeSize}
          height='1202'
          frameBorder='0'
        >
          Cargando…
        </iframe>
      </div>
    </section>
  );
};
