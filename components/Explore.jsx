import React from 'react'
import Image from 'next/image'

const Explore = () => {
  return (
    <section className='py-12 xl:py-0 xl:h-[90vh] xl:w-screen'>
        <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
            <div className='w-full flex flex-col lg:flex-row gap-12 xl:gap-20'>
                <div className='flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0'>
                    {/* item 1*/}
                    <div className='relative flex items-start'>
                        <div className='xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end'>
                            <div className='md-6 flex justify-center items-center'>
                                <Image 
                                    src="/assets/explore/coffees/coffee-1.svg"
                                    width={56}
                                    height={56}
                                    alt=''
                                />
                            </div>
                            <h3 className='text-3xl xl:text-4xl font-primary font-bold md-4'>
                                Rich Eapresso Blends
                            </h3>
                            <p className='max-w-[400px]'>
                            ดื่มด่ำกับรสชาติที่เข้มข้นและความเข้มข้นของเอสเพรสโซ่ที่รังสรรค์อย่างพิถีพิถัน เหมาะสำหรับเป็นเครื่องดื่มเรียกน้ำย่อยหรือเป็นของว่างยามบ่าย.
                            </p>
                        </div>
                    </div>
                    {/* item 2*/}
                    <div className='relative flex items-start'>
                        <div className='xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end'>
                            <div className='md-6 flex justify-center items-center'>
                                <Image 
                                    src="/assets/explore/coffees/coffee-2.svg"
                                    width={56}
                                    height={56}
                                    alt=''
                                />
                            </div>
                            <h3 className='text-3xl xl:text-4xl font-primary font-bold md-4'>
                                Classic Drip Coffee
                            </h3>
                            <p className='max-w-[400px]'>
                            เพลิดเพลินกับรสชาติอันผ่อนคลายของกาแฟดริปคลาสสิกที่ชงมาอย่างสมบูรณ์แบบ ทางเลือกเหนือกาลเวลาสำหรับผู้ที่ชื่นชอบกาแฟที่ชื่นชอบความเรียบง่าย.
                            </p>
                        </div>
                    </div>
                </div>

                {/* image */}
                <div className='hidden xl:flex justify-center'>
                    <div className='relative w-[322px] h-[580px]'>
                        <Image 
                             src="/assets/explore/pngegg.png"
                            fill
                            alt=""
                            className="object-cover"
                            quality={100}
                            priority
                            data-scroll
                            data-scroll-speed="0.1"
                        />
                    </div>
                </div>

                <div className='flex-1 flex flex-col justify-around  text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0'>
                    {/* item 3*/}
                    <div className='relative flex items-start'>
                        <div className='xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start'>
                            <div className='md-6 flex justify-center items-center'>
                                <Image 
                                    src="/assets/explore/coffees/coffee-3.svg"
                                    width={56}
                                    height={56}
                                    alt=''
                                />
                            </div>
                            <h3 className='text-3xl xl:text-4xl font-primary font-bold md-4'>
                                Smooth Cold Brews
                            </h3>
                            <p className='max-w-[400px]'>
                            เติมความสดชื่นให้ตัวคุณด้วยเครื่องดื่มเย็นๆ รสชาติละมุนและสดชื่น เหมาะสำหรับวันอากาศร้อนๆ ที่ต้องการเครื่องดื่มเย็นๆ ที่มีคาเฟอีน.
                            </p>
                        </div>
                    </div>
                    {/* item 4*/}
                    <div className='relative flex items-start'>
                        <div className='xl:max-w-[420px] xl:text-left xl:flex xl:flex-col xl:items-start'>
                            <div className='md-6 flex justify-center items-center'>
                                <Image 
                                    src="/assets/explore/coffees/coffee-4.svg"
                                    width={56}
                                    height={56}
                                    alt=''
                                />
                            </div>
                            <h3 className='text-3xl xl:text-4xl font-primary font-bold md-4'>
                                Flavorful Latte Varieties
                            </h3>
                            <p className='max-w-[400px]'>
                            สัมผัสรสชาติที่เข้มข้นและครีมมี่ของลาเต้หลากหลายรสชาติของเรา ตั้งแต่รสวานิลลาไปจนถึงคาราเมล เรามีลาเต้ที่เหมาะกับทุกรสนิยม.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Explore
