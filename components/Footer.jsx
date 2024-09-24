import Image from "next/image"
import Link from "next/link"

import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const links = [
    {href: "/", name: "Home"},
    {href: "/", name: "Explore"},
    {href: "/", name: "About"},
    {href: "/", name: "Menu"},
    {href: "/", name: "Contact"},
];

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      {/* overlay */}
      <div className="w-full h-full top-0 bg-primary/90 absolute z-10"></div>
        <div className="container mx-auto z-20 relative">
            <div className="flex flex-col items-center justify-center gap-14">
                {/* logo */}
                <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
                    {/* 
                    <Image 
                        src="/assets/logo.svg" 
                        fill
                        alt=""
                        className="object-contain"
                    />*/}
                     <h3 className="h3 text-white">
                        MADGER<span className="text-accent"> Coffee</span>
                    </h3>
                </Link>
                {/* nav */}
                <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.href}
                                key={index}
                                className="text-white uppercase tracking-widest hover:text-accent transition-all"
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
                {/* social */}
                <ul className="flex text-white text-xl gap-4">
                    <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"> 
                        <FaYoutube />
                    </Link>
                    <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"> 
                        <FaFacebookF />
                    </Link>
                    <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"> 
                        <FaTwitter />
                    </Link>
                    <Link href="/" className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"> 
                        <FaInstagram />
                    </Link>
                </ul>
                {/* copyright */}
                <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
                    <p>&copy; Copyright 2024 - MADGER. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
