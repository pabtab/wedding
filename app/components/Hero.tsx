import React from "react";
import { BiChurch, BiEnvelope } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { Countdown } from "./Countdown";

export const Hero = () => {
  return (
    <header className='hero h-screen w-full flex justify-center items-center'>
      <section className='bg-olivergreen rounded-lg shadow-2xl p-5 text-white flex items-center justify-center flex-col relative'>
        <h1>Leidy & Pablo</h1>
        <h3 className='flex items-center'>
          <BsFillCalendarDateFill size={20} className='mr-3' />
          Septiembre 30 / 2023
        </h3>
        <h3 className='flex items-center'>
          <BiChurch size={20} className='mr-3' />
          San Antonio de Pereira
        </h3>
        <h3 className='flex items-center'>
          <GiClothes size={20} className='mr-3' />
          Vestimenta Formal
        </h3>
        <h3 className='flex items-center'>
          <BiEnvelope size={20} className='mr-3' />
          Lluvia de Sobres
        </h3>
        <Countdown />
      </section>
    </header>
  );
};
