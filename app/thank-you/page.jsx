import Link from "next/link";
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-md text-center">
        <div className="animate-fade-in-up">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#2a3641]">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold  text-white sm:text-5xl">
            You're on the waitlist!
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Thank you for joining the InnovateAI waitlist. We're working hard to
            bring you the future of innovation and will notify you the moment we
            launch.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block rounded-lg bg-blue-500 px-8 py-3 shadow-lg transition-colors hover:bg-blue-600"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
