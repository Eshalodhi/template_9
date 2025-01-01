"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white  top-0 left-0 right-0 h-[2920] w-[90] z-50">
      <div className="container mx-auto px-6 py-8 flex items-center justify-between h-[80px]">
        {/* Logo Section */}
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <span className="text-white text-2xl font-bold">
              Food
              <span className="text-orange-500">tuck</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10">
          {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.toLowerCase()}`} // Make sure paths match your page structure
                  className="text-white hover:text-orange-500 font-medium"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* Icons Section */}
        <div className="flex items-center space-x-8 text-lg hover:text-orange-500 cursor-pointer">
          <FaSearch />
          <Link href="/signin" passHref className="text-white hover:text-orange-500 cursor-pointer">
          <FaUser />
          </Link>

          <Link href="/cart" passHref className="text-white hover:text-orange-500 cursor-pointer">
  <HiOutlineShoppingBag  />
</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-orange-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6">
          <ul className="space-y-4">
            {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="block text-white hover:text-orange-500 px-2 py-2 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
