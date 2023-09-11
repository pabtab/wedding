import { AboutUs } from "./components/AboutUs";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { RSVPForm } from "./components/RSVPForm";

export default function Home() {
  return (
    <main className='flex flex-col justify-around items-center h-full w-full'>
      <Hero />
      <Location />
      <AboutUs />
      <RSVPForm />
    </main>
  );
}
