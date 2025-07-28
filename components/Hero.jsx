"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const refCode = searchParams.get("ref");
    if (refCode) {
      setReferralCode(refCode);
      console.log(refCode);
    }

    // Trigger animations on mount
    setIsVisible(true);
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { email };
      if (referralCode) {
        payload.referredBy = referralCode;
      }

      const response = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      console.log(response);
      if (response.ok) {
        toast.success("Email added to waitlist");
        setEmail("");
        router.push("/thank-you");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || response.statusText);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16, 26, 35, 0.8) 0%, rgba(16, 26, 35, 1) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoTmzPLfjjZupSBFML6XcqPfvsdtmrmMr7FDO8Wrylvle6l574Ti_Gs8ePFRz-96NbejwelrIcJaNGpELO9wHd9MSSR5G5Oj0NLua99HrGY_jcG7-Tp5NImTWzHTmptXJfFLJDYEHsTB8ndgTSpz-m-423slcsaS9o3idUyMQ18Q8W-axm2Kh6apMAJYODboQ8r1Ex46lp7jxB0B2geewv-y4y5PbIgbmsiVpiD9m6va-PImI-x5KSlhQIb1-7MOmX1b0BcXpBDQLr')",
        }}
      ></div>

      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-blue-400/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative container mx-auto px-4 sm:px-6 text-center">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          Revolutionizing the Future of Work
        </h1>
        <p
          className={`text-base sm:text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up-delay-1" : "opacity-0"}`}
        >
          Join our waitlist to be the first to experience the next generation of
          productivity tools.
        </p>
        <form
          onSubmit={handleSubmit}
          className={`max-w-xl mt-8 mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 ${isVisible ? "animate-fade-in-up-delay-2" : "opacity-0"}`}
        >
          <div className="relative w-full sm:w-auto flex-grow group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-[#90b0cb] transition-colors duration-200 group-focus-within:text-[#2094f3]">
              <svg
                fill="currentColor"
                height="20"
                viewBox="0 0 256 256"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-200 group-focus-within:scale-110"
              >
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,88H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                <path
                  d="M192,24H64A16,16,0,0,0,48,40V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V40A16,16,0,0,0,192,24Zm0,192H64V40H192ZM176,80H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0,48H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0,48H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z"
                  opacity="0.3"
                ></path>
                <path
                  d="M216,40H40a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V56H208V192H48V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V48A8,8,0,0,0,216,40Z"
                  transform="rotate(90 128 128)"
                ></path>
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              type="email"
              className="w-full h-12 sm:h-14 pl-12 rounded-lg bg-[#182834] border-2 border-[#223749] focus:border-[#2094f3] focus:ring-2 focus:ring-[#2094f3]/80 smooth-focus text-base outline-none hover:border-[#2094f3]/50 hover:shadow-lg hover:shadow-[#2094f3]/10"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto flex-shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 sm:h-14 px-6 bg-blue-500 text-base font-bold tracking-wide hover:bg-blue-600 btn-hover-effect smooth-hover hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
          >
            <span className="truncate relative z-10">Join Waitlist</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
