import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="z-30 w-full flex flex-col justify-center  bg-stone-500">
      <div className=" px-[10px]  py-[80px] md:px-[64px]">
        <div className="flex gap-[68px] text-zinc-900 items-center justify-between max-md:flex-col">
          <div className="flex flex-col gap-4 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center">
              <Link href="mailto:info@aretestudio.co">
                <div>info@aretestudio.co</div>

                <div>@_aretestudio</div>
              </Link>
            </div>
          </div>
          <div className="w-[350px] md:w-auto flex items-center justify-center  text-center text-[48px] md:text-[90px] font-bold uppercase leading-[48px]">
            ARETE STUDIO
          </div>
          <div className="">
            <div className="flex flex-col grow items-cente">
              <Link href="#services">
                <div>OUR SERVICES</div>
              </Link>
              <Link href="#about">
                <div>ABOUT</div>
              </Link>
              <Link href="#projects">
                <div>PROJECTS</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
