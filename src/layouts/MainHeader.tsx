import React from "react";
import mainLogo from '../../public/mainLogo.png' 
import { MainLogo, RockkpayLogo } from "../Assets/navbar";
import BBPSLogo1  from "../../BBPSLogo/BBPSLogo1.png";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";

export default function MainHeader() {
  const router = useRouter();
  return (
    <section className="w-full hidden lg:flex items-center justify-between gap-6 h-[6rem] bg-gradient-to-br from-[#6633CC] to-[#C6BCFF]">
      <div className="w-[30%] flex">
        <Link href={"/"}>
          <Image
            src={mainLogo.src}
            alt="logo"
            width={90} // Adjust width as needed
            height={90}
            className="w-20 h-19 rounded-full ml-7 "
          />
        </Link>
      </div>

      <div className="w-full flex items-center justify-between gap-3">
        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/");
          }}
        >
          <p className="text-lg font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer text-white">
            home
          </p>
        </span>
        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/aboutus2");
          }}
        >
          <p className="text-lg text-white font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer">
            About us
          </p>
        </span>

        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/services");
          }}
        >
          <p className="text-lg text-white font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer ">
            services
          </p>
        </span>
        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/blog");
          }}
        >
          <p className="text-lg text-white font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer">
            blogs
          </p>
        </span>
        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/contact_us");
          }}
        >
          <p className="text-lg text-white font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer">
            contact us
          </p>
        </span>
        <span
          className="w-fit p-2 h-full center"
          onClick={() => {
            router.push("/career");
          }}
        >
          <p className="text-lg text-white font-bold uppercase hover:text-[#01c3ff] transition-all duration-300 ease-in-out cursor-pointer">
            career
          </p>
        </span>
      </div>

      <Link href={"/"}>
          <Image
            src={BBPSLogo1.src}
            alt=""
            width={150} // Adjust width as needed
            height={190}
            className="w-64 h-20 ml-4 mt-{-8} "
          />
        </Link>

      <div className="w-1/2 h-full flex items-center justify-end mr-8">
        <button className="px-8 py-3 rounded-3xl discount-card overflow-hidden text-white font-bold capitalize bg-[#131A4A]  Capitalize !transition-all !duration-500 !ease-in-out hover:scale-105 active:scale-95">
          Download The App
        </button>
      </div>
    </section>
  );
}
