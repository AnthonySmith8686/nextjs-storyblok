import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ blok }) => {

  return (

    <div className="relative isolate overflow-hidden bg-gray-900" {...storyblokEditable(blok)}>
      <Image
        src={blok.background_image.filename}
        alt={blok.background_image.alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width = "3840"
        height = "2560"
      />
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {blok.headline}
            </h1>
            <h2 className="mt-6 text-lg leading-8 text-gray-300">
              {blok.subheadline}
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </Link>
              <Link href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Hero;

