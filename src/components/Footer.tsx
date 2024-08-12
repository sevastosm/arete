import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

const HelveticaNeueLight = localFont({
  src: "../assets/fonts/HelveticaNeueLight.woff2",
});

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="px-1 md:px-8 z-10 w-full flex flex-col justify-center  bg-stone-500">
      <div className="py-[80px]">
        <div className="flex gap-[68px] text-zinc-900 items-center justify-between max-md:flex-col">
          <div className="flex flex-col gap-4 max-md:ml-0 max-md:w-full ">
            <div className="flex flex-col items-center">
              <div className="text-center md:text-left">
                <div>
                  <Link
                    href="mailto:olia@aretestudio.co"
                    className={HelveticaNeueLight.className}
                  >
                    olia@aretestudio.co
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.instagram.com/_aretestudio/"
                    className={HelveticaNeueLight.className}
                  >
                    @_aretestudio
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={pragmaticaW01ExtendedBold.className}>
            <div className="w-[350px] md:w-auto flex items-center justify-center  text-center text-[48px] md:text-[90px] font-bold uppercase leading-[48px]">
              ARETE STUDIO
            </div>
          </div>
          <div className={HelveticaNeueLight.className}>
            <div className="flex flex-col grow items-center md:items-end">
              <Link href="#services">
                <div>OUR SERVICES</div>
              </Link>
              <Link href="#about">
                <div>ABOUT</div>
              </Link>
              <Link href="#t&c">
                <div>T&C</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
