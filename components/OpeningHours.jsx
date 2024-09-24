import Image from "next/image"
import Separator from "./Separator"
import Badge from "./Badge"

const OpeningHours = () => {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
        {/* 1 */}
        <div className="hidden relative xl:flex flex-1 justify-center items-center">
            <div className="w-full h-full absolute z-40 top-0 bg-primary/60"></div>
            <Image 
                src="/assets/opening-hours/img.png"
                fill
                alt=""
                quality={100}
                priority
                className="object-cover"

            />
            <Badge containerStyles="w-[200px] h-[200px] absolute z-40" />
        </div>

        {/* 2 */}
        
        <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
            {/* overlay */}
            <div className="w-full h-full absolute z-10 top-0 bg-primary/80"></div>
            {/* text & imager */}
            <div className="z-20 flex flex-col items-center justify-center">
                <h2 className="h2 text-white mb-4">Opening</h2>
                <Separator bg="accent" />
                <div className="mt-12 relative w-[180px] h-[100px] xl:w-[350px] xl:h-[220px]">
                    <Image 
                        src="/assets/opening-hours/program-badge.svg"
                        fill
                        alt=""
                        quality={100}
                        priority
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OpeningHours
