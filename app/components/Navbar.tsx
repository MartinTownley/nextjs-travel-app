"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/SparrowhawkNarrow.svg"
          alt="logo"
          width={74}
          height={100}
        />
      </Link>
      {/* conditioally render side menu */}
      {isMenuOpen ? (
        <ul className="h-full gap-12 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-15 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      ) : (
        <ul className="hidden h-full gap-12 lg:flex">
          {/* default hidden, height full, 12 gap between, flex on large devices*/}
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:bg-black"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </nav>
  );
};

export default Navbar;
