import { DotFilledIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react';
import { PiCopyrightBold } from "react-icons/pi";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    const date = new Date()
    setYear(date.getFullYear())
  },[year])

  return (
    <div className='fixed bottom-0 lg:h-10 h-[36px] flex flex-col justify-center items-center text-black dark:text-white'>
      <p className='flex flex-row items-center mx-2 lg:text-[16px] text-[12px]'>
      <a href="https://x.com/abdullah_twt23" target='_blank' className='mr-2 transition-all duration-300 hover:text-blue-500'>Twitter</a> <DotFilledIcon/>
      <a href="https://github.com/abhub23" target='_blank' className='mx-2 transition-all duration-300 hover:text-blue-500'>Github</a> <DotFilledIcon /> 
      <a href="https://www.linkedin.com/in/abdullah-mukri-84a56b220/" target='_blank' className='ml-2 transition-all duration-300 hover:text-blue-500'>LinkedIN</a>  </p>

      <div className='mb-4 flex flex-row items-center lg:text-[16px] text-[12px]'>
       <PiCopyrightBold/> 
       <span className='mr-2 lg:text-[16px] text-[12px]'>{year}</span> Designed and Created by{" "}
        <a
          className="lg:ml-2 ml-[4px] text-blue-400 hover:underline"
          target="_blank"
          href="https://x.com/abdullah_twt23"
        >
          Abdullah
        </a>
      </div>

    </div>
  );
};

export default Footer;
