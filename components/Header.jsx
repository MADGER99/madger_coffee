"use client";
//import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <header className="absolute top-[40px] left-0 right-0 z-[60]">
      <div className="container mx-auto">
        <div className=" flex justify-between items-center">
        {/* logo
        <Link href="/" className="relative w-[100px] h-[40px] xl:w-[120px] xl:h-[40px] z-[60]" >
            <Image src="/assets/logo.svg" 
                fill 
                alt="" 
                className="object-contain"
            />
            <h3>MAD</h3>
        </Link> */}
            <Link href="/">
                <h3 className="h3 text-white">
                 MADGER<span className="text-accent"> Coffee</span>
                </h3>
            </Link>

            {/* nav trigger btn */}
            
            <button onClick={() => setNavActive(!navActive)} className="w-8 text-accent relative flex items-center justify-center z-[60] outline-none bg-white">
                {/* 1 */}
                    <span className={`w-full h-[1.5px] bg-current absolute left-0 
                            will-change-transform transition-transform duration-300 ${
                            navActive ? "top-1/2 rotate-45" : "top-2 translate-y-0"
                        }`}
                        ></span>
                {/* 2 */}
                    <span className={`w-full h-[1.5px] bg-current absolute left-0 
                            transition-opacity duration-300  ${
                            navActive ? "opacity-0" : "top-1/2"
                        }`}
                        ></span>
                {/* 3 */}
                    <span className={`w-full h-[1.5px] bg-current absolute left-0 
                        will-change-transform transition-transform duration-300  ${ 
                        navActive ? "top-1/2 -rotate-45" : "bottom-2 translate-y-0"
                        }`}
                        ></span>
            </button>

        </div>
      </div>
      {/*nav */}
      <AnimatePresence mode="wait">{navActive &&<Nav /> }</AnimatePresence>
    </header>
  )
}

export default Header
