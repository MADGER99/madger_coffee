import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { IoMdQuote } from "react-icons/io";

const testimonials = [
  {
    message: "ฉันชอบมาที่ร้านกาแฟแห่งนี้ ขนมอบสดใหม่เสมอ และพนักงานก็เป็นมิตรมาก",
    name: "itimsundy",
    profession: " ",
  },
  {
    message: "กาแฟที่นี่อร่อยมากจริงๆ บาริสต้ามีฝีมือ และบรรยากาศก็เหมาะทั้งทำงานและพักผ่อน",
    name: "John Wick",
    profession: " ",
  },
  {
    message: "บรรยากาศอบอุ่นและมีเมนูอาหารให้เลือกหลากหลาย ฉันชอบร้านนี้ ",
    name: "พลอยเอง ฉันสวยสุด",
    profession: " ",
  },
]

const Testimonials = () => {
  return (
    <section className="h-[60vh] xl:h-[70vh] ">
      <div className="container mx-auto h-full flex items-center">
        <Swiper navigation={true} modules={[Navigation]} className="h-[400px]">
          {testimonials.map((person, index) => {
            return (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="flex justify-center h-full xl:pt-14">
                  <div className="max-w-[60%] text-primary">
                    <IoMdQuote className="text-6xl text-primary mb-12 mx-auto" />
                    <p className="text-2xl font-secondary text-center mb-8">
                      {person.message}
                    </p>
                    <div className="text-center">
                      <p className="text-xl font-bold mb-1">{person.name}</p>
                      <p className="text-secondary">{person.profession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
