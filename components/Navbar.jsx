import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#101A23]/80 text-white backdrop-blur-sm border-b border-[#223749]">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Link href="/" className="flex items-center gap-2">
          <svg
            className="h-8 w-8 text-blue-500"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2 className="text-2xl font-bold">InnovateAI</h2>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link href="/" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Features
          </Link>
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Pricing
          </Link>
        </nav>
        <button className="hidden lg:block px-3 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
          Join Waitlist
        </button>

        <button className="lg:hidden cursor-pointer">
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 0 256 256"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,88H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
