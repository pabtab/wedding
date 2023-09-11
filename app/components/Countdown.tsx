"use client";
// @ts-ignore
import FlipCountdown from "@rumess/react-flip-countdown";

export const Countdown = () => {
  return (
    <div className='bg-white mt-5 p-4 rounded-lg shadow-lg'>
      <FlipCountdown
        hideYear
        hideMonth
        dayTitle='Dias'
        hourTitle='Horas'
        minuteTitle='Minutos'
        secondTitle='Segundos'
        endAt={"2023-10-30 13:00:00"} // Date/Time
      />
    </div>
  );
};
