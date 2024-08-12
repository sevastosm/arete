// components/ContactForm.tsx
import React from "react";
import Image from "next/image";
import { useContactForm } from "@/app/context/ContactFormContext";
import Form from "./Form";
import localFont from "next/font/local";

const pragmaticaW01ExtendedBold = localFont({
  src: "../assets/fonts/pragmatica-w01-extended-bold.woff2",
});

const ContactForm: React.FC = () => {
  const { isOpen, closeContactForm } = useContactForm();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 min-h-screen w-full bg-[#1C1C1C]">
      <div className="flex items-center justify-between p-4 md:hidden bg-[#1C1C1C]">
        <Image
          className="md:w-[32px] md:h-[38px]"
          src="/images/mobile-form-logo.svg"
          alt="Arete Logo"
          width={32}
          height={38}
          quality={100}
        />
        <Image
          className="w-[24px] h-[24px] cursor-pointer"
          src="/images/close.svg"
          alt="Menu Close Button"
          width={24}
          height={24}
          quality={100}
          onClick={closeContactForm}
        />
      </div>
      <div className="grid md:grid-cols-3 w-full md:h-screen">
        <div className="md:block col-span-2 bg-[#7B736B] hidden">
          <div className="md:flex min-h-[72px] items-center bg-[#7B736B] hidden">
            <div className="my-3 ms-[38.5px] bg-[#7B736B] w-full flex justify-start">
              <Image
                className="md:w-[32px] md:h-[38px]"
                src="/images/arete-logo.svg"
                alt="Arete Logo"
                width={32}
                height={38}
                quality={100}
              />
            </div>
          </div>
          <div className="md:flex items-center md:my-[54.5px] md:ms-16 bg-[#7B736B] md:max-w-[616px] hidden">
            <div className="md:h-screen">
              <div className="uppercase text-xl text-black">
                <div className={pragmaticaW01ExtendedBold.className}>
                  <h1>about</h1>
                </div>
              </div>
              <div className="uppercase md:text-[32px] md:mt-6 md:leading-[41.6px] text-black">
                <div className={pragmaticaW01ExtendedBold.className}>
                  <p>
                    At Arete Studio, we are architects of digital excellence.
                    Nestled in the historic city of Athens, Greece, our passion
                    for innovation and creativity drives everything we do.
                  </p>
                </div>
              </div>
              <div className="md:mt-10">
                <div className="text-base leading-6">
                  <div className="flex items-center text-black">
                    <Image
                      className="w-[18px] h-[18px] me-4"
                      src="/images/email.svg"
                      alt="Email"
                      width={18}
                      height={18}
                      quality={100}
                    />
                    <a href="mailto:olia@aretestudio.co">olia@aretestudio.co</a>
                  </div>
                  <div className="flex items-center my-4 text-black">
                    <Image
                      className="w-[18px] h-[18px] me-4"
                      src="/images/phone.svg"
                      alt="Phone"
                      width={18}
                      height={18}
                      quality={100}
                    />
                    <a href="#">
                      <div>You tell me</div>
                    </a>
                  </div>
                  <div className="flex items-center text-black">
                    <Image
                      className="w-[18px] h-[18px] me-4"
                      src="/images/pin.svg"
                      alt="Address"
                      width={18}
                      height={18}
                      quality={100}
                    />
                    <a href="#">
                      <div>Somewhere in Athens</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#1C1C1C]">
          <div className="md:flex min-h-[72px] items-center bg-[#1C1C1C] hidden">
            <div className="my-3 me-[38.5px] bg-[#1C1C1C] w-full flex items-center justify-end">
              <Image
                className="w-[24px] h-[24px] cursor-pointer"
                src="/images/close.svg"
                alt="Menu Close Button"
                width={24}
                height={24}
                quality={100}
                onClick={closeContactForm}
              />
            </div>
          </div>
          <div className="flex items-center md:my-[54.5px] md:ms-10 md:me-10 bg-[#1C1C1C]">
            <div className="w-full px-4 py-12 md:px-0 md:py-0">
              <div className="uppercase text-2xl leading-[33.6px] text-white">
                <div className={pragmaticaW01ExtendedBold.className}>
                  <h1>get in touch</h1>
                </div>
              </div>
              <div className="text-white mt-4">
                <p>
                  Discover what sets Arete Studio apart and experience the
                  difference for yourself.
                </p>
              </div>
              <div className="mt-8">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
