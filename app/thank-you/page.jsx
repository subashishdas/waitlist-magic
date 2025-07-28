"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ThankYouPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-[#101a23] to-[#182834]">
      <div className="w-full max-w-md text-center relative">
        {/* Floating background elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-green-400/10 rounded-full animate-float"></div>
        <div
          className="absolute -bottom-10 -right-10 w-16 h-16 bg-blue-400/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div
            className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#2a3641] border-2 border-green-400/20 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <svg
              className="h-10 w-10 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="animate-check"
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
          <h1
            className={`text-4xl font-extrabold text-white sm:text-5xl ${isVisible ? "animate-fade-in-up-delay-1" : "opacity-0"}`}
          >
            You're on the waitlist!
          </h1>
          <p
            className={`mt-4 text-lg text-slate-300 ${isVisible ? "animate-fade-in-up-delay-2" : "opacity-0"}`}
          >
            Thank you for joining the InnovateAI waitlist. We're working hard to
            bring you the future of innovation and will notify you the moment we
            launch.
          </p>
          <div
            className={`mt-8 ${isVisible ? "animate-fade-in-up-delay-3" : "opacity-0"}`}
          >
            <Link
              href="/"
              className="inline-block rounded-lg bg-blue-500 px-8 py-3 shadow-lg btn-hover-effect smooth-hover hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95 font-semibold"
            >
              <span className="relative z-10">Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
