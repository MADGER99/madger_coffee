"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const data =[
    {
        imgSrc: "/assets/about/photo-1.jpg",
        title: "Our Journey",
        description: "MADGER-Coffee เราคือร้านกาแฟเล็กๆ ที่มีวิสัยทัศน์ในการสร้างสรรค์กาแฟคุณภาพเยี่ยม และมอบประสบการณ์การดื่มกาแฟที่น่าจดจำ มาร่วมสัมผัสกับความสุขของรสชาติกาแฟที่เราได้สร้างสรรค์.",
    },
    {
        imgSrc: "/assets/about/photo-2.jpg",
        title: "Our Promise",
        description: "ที่ MADGER เราสัญญาว่าจะมอบกาแฟคุณภาพเยี่ยมพร้อมผลลัพธ์เชิงบวก เราคัดสรรเมล็ดกาแฟจากฟาร์มที่ยั่งยืนโดยคำนึงถึงผู้คนและโลก การคั่วที่พิถีพิถันของเรารับประกันประสบการณ์ที่เข้มข้นและน่าพึงพอใจ เรามุ่งมั่นในด้านคุณภาพ ความยั่งยืน และชุมชน.",
    },
    {
        imgSrc: "/assets/about/photo-3.jpg",
        title: "Our Team",
        description: "ที่ MADGER ทีมงานที่ทุ่มเทของเราอยู่เบื้องหลังกาแฟชั้นยอดทุกแก้ว บาริสต้าที่มีทักษะและผู้คั่วกาแฟผู้เชี่ยวชาญของเราทำงานด้วยความหลงใหลและความแม่นยำ ทำให้ประสบการณ์การดื่มกาแฟแต่ละครั้งพิเศษ พบกับผู้คนที่นำความคิดสร้างสรรค์และความใส่ใจมาสู่กาแฟทุกแก้วและเรียนรู้เรื่องราวเฉพาะตัวของพวกเขา.",
    },
];

const About = () => {
    const scrollableSectionRef = useRef(null);
    const scrollTriggerRef =useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const animation = gsap.fromTo(
            scrollableSectionRef.current,
            { translateX: 0 },
            { 
                translateX: "-200vw", 
                ease: "none", 
                duration: 1, 
                scrollTrigger: {
                    trigger: scrollTriggerRef.current,
                    start: "top top",
                    end: "1800vw top",
                    scrub: 0.5,
                    pin: true,
                },
            }
        );
        return () => {
            animation.kill();
        };

    },[]);


  return (
    <section className="overflow-hidden bg-primary ">
        <div ref={scrollTriggerRef}>
            <div 
                ref={scrollableSectionRef} 
                className="h-screen w-[300vw] flex relative "
            >
                {data.map((item, index) => {
                    return (
                        <div key={index} className="w-screen h-screen flex flex-col justify-center items-center relative ">
                            <div className="container mx-auto">
                                <div className="flex gap-[30px] relative "> 
                                    {/* text */}
                                    <div className="flex-1 flex flex-col justify-center items-center">
                                        <Badge containerStyles="w-[120px] h-[120px]"/>
                                        <div className="max-w-[500px] text-center">
                                            {/* title */}
                                            <h2 className="h2 text-white mb-4">
                                                <span className="mr-4">
                                                    {item.title.split(" ")[0]}
                                                </span>
                                                <span className="text-accent">
                                                    {item.title.split(" ")[1]}
                                                </span>
                                            </h2>
                                            {/* separator */}
                                            <div className="mb-8">
                                                <Separator />
                                            </div>
                                            
                                            {/* description */}
                                            <p className="leading-relaxed mb-16 px-8 xl:px-0">
                                                {item.description}
                                            </p>
                                            {/* btn */}
                                            <button className="btn">See more</button>
                                        </div>
                                    </div>
                                    {/* image */}
                                    <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                                        <Image 
                                            src={item.imgSrc}
                                            fill
                                            className="object-cover"
                                            quality={100}
                                            priority
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default About
