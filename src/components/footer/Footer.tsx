import { Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full overflow-x-hidden bg-[#e2e3da] pt-10 lg:pt-20 text-black">
      <div className="fluid-container">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start my-8 md:my-16 lg:space-x-8 space-y-16 lg:space-y-0">
          <div className="flex flex-col">
            <div className="max-w-xs">
              <p className="text-gray-800 leading-snug text-lg tracking-tighter mb-6 opacity-60">
                Stay up to date with the Church.
              </p>

              <h6 className="text-current font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tighter ">
                Sign up for email updates from Bible Baptist Church
              </h6>
            </div>

            <div className="w-auto md:w-96"></div>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row sm:justify-between lg:justify-end w-full sm:w-auto max-w-sm sm:max-w-full mx-auto sm:space-x-8 xl:space-x-24 space-y-10 sm:space-y-0">
            <nav>
              <p className="text-gray-800 leading-snug text-lg tracking-tighter mb-6 opacity-60">
                Our House
              </p>
              <div className="flex flex-col space-y-2">
                <Link
                  href=""
                  className="font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Our Story
                </Link>
                <Link
                  href=""
                  className="font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Our Beliefs
                </Link>
                <Link
                  href=""
                  className="font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Our Leadership
                </Link>
                <Link
                  href=""
                  className="font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500 "
                >
                  Join Our Team
                </Link>
              </div>
            </nav>

            <nav>
              <p className="text-gray-800 leading-snug text-lg tracking-tighter mb-6 opacity-60">
                Locations
              </p>
              <div className="flex flex-col space-y-2">
                <Link
                  href=""
                  className="font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Katipunan
                </Link>
                <Link
                  href=""
                  className="font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Bulacan
                </Link>
                <Link
                  href=""
                  className="font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Makati
                </Link>
                <Link
                  href=""
                  className="font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Manila
                </Link>
              </div>
            </nav>

            <nav>
              <p className="text-gray-800 leading-snug text-lg tracking-tighter mb-6 opacity-60">Ministries</p>
              <div className="flex flex-col space-y-2">
                <Link
                  href=""
                  className="font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Bible School
                </Link>
                <Link
                  href=""
                  className="font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Bible Study
                </Link>
                <Link
                  href=""
                  className="font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Discipleship
                </Link>
                <Link
                  href=""
                  className="font-bold text-xl lg:text-2xl tracking-tighter leading-tight hover:text-blue-500"
                >
                  Soul Winning
                </Link>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:justify-between items-center w-full pt-12 xl:space-x-12 space-y-8 xl:space-y-0">
          <div className="flex flex-col xl:flex-row xl:space-x-12 space-y-2 xl:space-y-0">
            <span className="text-sm text-center opacity-60">
              {" "}
              © 2025 Webster Navarro{" "}
            </span>

            <div className="flex flex-col sm:flex-row sm:space-x-10">
              <Link
                href="/"
                className="text-sm text-center sm:text-right opacity-60 hover:opacity-100"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-sm text-center sm:text-right opacity-60 hover:opacity-100"
              >
                Terms + Conditions
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/bbcproj8officialpage"
              className="inline-flex items-center w-6 opacity-60 hover:opacity-100"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full mt-12 lg:mt-32 text-white"></div>
    </footer>
  );
};

export default Footer;
