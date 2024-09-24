import React from 'react'
import Image from 'next/image'

const MenuItem = ({name, description, price, imgSrc}) => {
  return (
    <div className='flex items-center gap-4'>
         <div className='relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full'>
            <Image 
                src={imgSrc}
                fill
                alt=''
                priority
                quality={100}
                className='object-cover'
            />
         </div>
         {/* text */}
         <div className='flex flex-col flex-1 gap-2'>
            <div className='flex justify-between gap-4 items-baseline'>
                {/* name */}
                <p className='uppercase font-primary font-semibold text-[22px] leading-none text-primary'>
                    {name}
                </p>
                {/* border */}
                <div className='flex-1 border-b border-dashed border-primary'></div>
                {/* price */}
                <p className='leading-none font-primary text-[30px] text-primary'>
                    {price.toFixed(1)}฿
                </p>
            </div>
            {/* description */}
            <p>{description}</p>
         </div>
    </div>
  );
}

export default MenuItem
