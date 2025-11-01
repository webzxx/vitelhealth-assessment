"use client";

import React, { useState } from "react";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import DropdownMenu from "./DropdownMenu"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-24 md:h-44 z-50 relative transition">
      {/* Top Navigation Bar - Desktop */}
      <nav className="hidden md:flex h-14 w-full items-center justify-center bg-[#e8e4e4] pt-4">
        {!isMenuOpen && <NavMenu />}
      </nav>

      {/* Logo and Actions */}
      <div className="px-6 md:px-24 py-4 md:py-8 relative flex mx-auto justify-between items-center gap-6 fluid-container">
        {/* Logo */}
        <div className="flex flex-row items-center gap-2">
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

          <div className="hidden md:flex flex-col items-center justify-center uppercase">
            <h1 className="font-semibold leading-none">Bible Baptist Church</h1>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-8">
          {/* Upcoming Events */}
          <div className="hidden md:block">
            <Button
              variant="default"
              className="inline-flex bg-sky-400 text-black hover:text-white py-3 px-6 font-mono leading-none uppercase text-sm rounded-3xl items-center justify-center transition select-none cursor-pointer"
            >
              Upcoming Events
            </Button>
          </div>

          {/* Hamburger Menu */}
          <button
            className="inline-flex flex-col items-center cursor-pointer group w-8"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={40} />
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && <DropdownMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Header;