"use client";

import React from "react";
import { Facebook, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type DropdownMenuProps = {
  onClose: () => void;
};

const DropdownMenu = ({ onClose }: DropdownMenuProps) => {
  return (
    <div
      className="
        absolute w-full top-0 left-0 right-0 bg-[#0e1216] text-white shadow-lg font-bold z-50
        animate-slideDown dropdown-initial min-h-[70vh] md:min-h-screen lg:min-h-[80vh] px-2 md:px-26 pt-2 lg:pt-4 
      "
      style={{ animationDelay: "0.1s" }}
    >
      <div className="relative flex justify-between items-center w-full max-w-screen-3xl mx-auto">
        <div className="flex justify-between items-center lg:w-1/3 space-x-4 sm:space-x-8">
          <Link href="/">
            <Image
              src="/bbc-logo.png"
              alt="logo"
              width={80}
              height={50}
              className="cursor-pointer rounded-full"
              priority
            />
          </Link>
        </div>

        <div className="flex justify-end items-center lg:w-3/5 space-x-8">
          <div className="hidden lg:flex space-x-8">
            <Link
              href="/about"
              className="relative text-white hover:text-blue-500 text-xs leading-none font-bold uppercase select-none transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              href=""
              className="relative text-white hover:text-blue-500 text-xs leading-none font-bold uppercase select-none transition duration-300 ease-in-out"
            >
              Sermons
            </Link>
            <Link
              href=""
              className="relative text-white hover:text-blue-500 text-xs leading-none font-bold uppercase select-none transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Close Button */}
        <button
          className="inline-flex flex-col items-center text-white text-xs font-bold leading-none uppercase select-none whitespace-nowrap cursor-pointer hover:text-blue-500 transition duration-300"
          onClick={onClose}
        >
          <X size={50} />
        </button>
      </div>

      <nav className="flex flex-wrap lg:hidden gap-4 justify-center mt-8">
        <Link
          href="/about"
          className="relative text-white hover:text-blue-500 text-xs leading-none font-bold select-none transition duration-300 ease-in-out"
        >
          About
        </Link>
        <Link
          href=""
          className="relative text-white hover:text-blue-500 text-xs leading-none font-bold select-none transition duration-300 ease-in-out"
        >
          Sermons
        </Link>
        <Link
          href=""
          className="relative text-white hover:text-blue-500 text-xs leading-none font-bold select-none transition duration-300 ease-in-out"
        >
          Contact
        </Link>
      </nav>

      <div className="relative flex flex-col-reverse lg:flex-row lg:justify-end lg:items-center w-full max-w-screen-3xl mx-auto mt-6 md:mt-24">
        <div className="hidden md:block lg:hidden text-center my-6">
          <p className="text-gray-100 leading-snug text-lg tracking-tighter mt-0 mb-8 last:mb-0 px-4 text-balance">
            For God. For People. For the City. For the World.
          </p>
        </div>

        <div className="hidden md:block lg:hidden w-full h-1px bg-white mt-8"></div>

        <div className="hidden md:block w-full md:w-1/2 lg:w-2/5">
          <Link
            href=""
            className=" focus:outline-none focus-visible:outline-none block"
          >
            <div className="relative w-full h-full pb-96">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/anniversary-banner.jpg"
                  alt="Anniversary Banner"
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="relative flex flex-col sm:flex-row sm:justify-between w-full pt-4 sm:pt-6 sm:space-x-10 lg:space-x-16 space-y-1 sm:space-y-0">
              <h6 className="text-white font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tighter ">
                55th Anniversary — Celebration Service
              </h6>
              <h6 className="text-blue-500 font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tighter "></h6>
              <h6 className="text-gray-300 font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tighter ">
                09.28.25
              </h6>
            </div>
          </Link>
        </div>

        <div className="lg:w-3/5 lg:pl-24">
          <div className="relative z-10 xl:flex items-end w-full mb-4 lg:gap-10 hidden md:block">
            <Link href="">
              <p className="text-white font-headline-sans font-bold text-2xl lg:text-3xl tracking-tighter leading-tighter w-1/2 md:w-full mb-2 lg:mb-0 hover:text-blue-500 transition duration-200">
                Bible Baptist Church
              </p>
            </Link>

            <div className="hidden lg:block">
              <p className="text-gray-100 leading-normal text-base tracking-tighter mt-0 mb-8 last:mb-0 xl:px-4">
                For God. For People. For the City. For the World.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap w-full transition-opacity duration-300">
            <div className="w-full h-0.5 bg-white mb-8 hidden md:block"></div>

            <nav className="w-full md:w-1/3 pr-10 mb-4 md:mb-0">
              <h6 className="text-gray-500 font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tighter mb-3">
                Our House
              </h6>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Our Story
                </Link>
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Our Beliefs
                </Link>
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Our Leadership
                </Link>
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Join Our Team
                </Link>
              </div>
            </nav>

            <nav className="w-full md:w-1/3 pr-10 mb-4 md:mb-0">
              <h6 className="text-gray-500 font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tighter mb-3">
                Locations
              </h6>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Katipunan
                </Link>
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Bulacan
                </Link>
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Makati
                </Link>
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Manila
                </Link>
              </div>
            </nav>

            <nav className="w-full md:w-1/3 pr-10">
              <h6 className="text-gray-500 font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tighter mb-3">
                Ministries
              </h6>
              <div className="grid grid-cols-1 gap-2">
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Bible School
                </Link>
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Bible Study
                </Link>
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Discipleship
                </Link>
                <Link
                  href=""
                  className="text-white hover:text-blue-500 font-bold"
                >
                  Soul Winning
                </Link>
              </div>
            </nav>

            <div className="flex items-center mt-8 space-x-4 mb-8 lg:mb-0">
              <a
                href="https://www.facebook.com/bbcproj8officialpage"
                className="inline-flex items-center w-4 text-gray-400 hover:text-white"
              >
                <Facebook className="flex w-full fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
