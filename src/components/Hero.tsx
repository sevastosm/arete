import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import localFont from "next/font/local";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <header className="relative w-full items-center flex flex-col pb-[80px] md:pb-[80px] md:pt-[34px] lg:pt-0 mobile-h-screen">
        <div className="relative w-full z-10 flex flex-col items-center ">
          <Link
            className="flex p-4 md:p-[51px] mb-[58px] md:mb-[80px]"
            href={"/"}
          >
            <Image
              src={"/images/logo.svg"}
              alt="Arete studio"
              width={266}
              height={40}
              className="w-[200px] h-[35.53] md:w-[266px] md:h-[40]"
            />
          </Link>
          <h1 className=" max-w-[340px] md:max-w-[800px] text-[48px] text-PANTONE_1  md:text-[90px] leading-none text-center font-bold">
            <div className={pragmaticaW01ExtendedBold.className}>
              DESIGNS TAILORED FOR YOU
            </div>
          </h1>
          <span className="rounded-text md:mt-[63px] mt-[200px] cursor-pointer">
            <Image
              src={"/images/roundtext.svg"}
              alt="Arete studio"
              width={120}
              height={120}
              className=" w-[120px] h-[120px]"
            />
          </span>
        </div>
        <div className="video-container px-1 md:px-8 absolute flex-col items-center justify-center hidden xl:flex">
          <video className="absolute w-full" autoPlay loop muted>
            <source src="/videos/background_header.mp4" type="video/mp4" />
          </video>
        </div>
      </header>
      <Menu />
    </div>
  );
};

export default Hero;
