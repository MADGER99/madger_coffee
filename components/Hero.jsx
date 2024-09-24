"use client";

import Badge from "./Badge";
import Separator from "./Separator";

const Hero = () => {
  return (
    <section className="h-[80vh]  xl:h-[120vh] relative text-white">
        {/* overlay */}
        <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]"> </div>
        {/* video */}
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
            <source src="/assets/hero/video.mp4" type="video/mp4"/>
        </video>
        <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
            {/* text */}
            <div 
                data-scroll 
                data-speed="0.4" 
                className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full">
                {/* badge & h1 */}
                <div className="flex flex-col items-center">
                    <Badge containerStyles="hidden xl:flex xl:w-[150px] xl:h-[150px]" />
                    <h2 className="h2 text-white ">
                        MADGER<span className="flex md:flex-col justify-center text-accent"> Coffee</span>
                    </h2>
                </div>
                {/* Separator */} 
                <Separator />
                <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
                สัมผัสกับความสุขของกาแฟชั้นเลิศในพื้นที่อันแสนสบายของเรา ซึ่งทุกแก้วได้รับการรังสรรค์ด้วยความหลงใหลและความอบอุ่น
                </p>
                <button className="btn">Menu</button>
            </div>
        </div>
     
    </section>
  )
}

export default Hero
