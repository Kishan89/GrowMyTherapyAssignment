"use client";

import FadeInSection from "./FadeInSection";

export default function Hero() {
  return (
    <FadeInSection>
      <section className="relative bg-[#f5f3ec] min-h-screen font-serif px-4 sm:px-6 md:px-12 pb-20">
        {/* Logo Header */}
        <header className="w-full max-w-[1400px] mx-auto pt-6 pb-4">
          <div>
            <img
              src="/image/logo.png"
              alt="Logo"
              className="h-[60px] sm:h-[70px] md:h-[80px] object-contain ml-1 mt-6 mb-6"
            />
          </div>
        </header>

        {/* Video Background */}
        <div className="relative max-w-[1400px] mx-auto h-[calc(100vh-90px)] overflow-hidden rounded-none">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Hero Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md">
              Professional Psychological Care
            </h2>
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-md">
              Empowering Change, Insight & Well-Being
            </h1>
            <p className="text-sm sm:text-base md:text-xl font-medium mb-8 max-w-xl drop-shadow-sm">
              Personalized therapy for adults across Michigan and PSYPACT states
              — all from the comfort of your home.
            </p>

            <a
              href="#contact"
              className="bg-[#5a7f8a] text-white text-xs sm:text-sm md:text-base font-semibold inline-flex items-center justify-center transition duration-300 hover:opacity-75"
              style={{
                width: "260px",
                height: "90px",
                borderRadius: "50% / 50%",
                fontFamily: "Lato, sans-serif",
                letterSpacing: "0.05em",
                fontWeight: "lighter",
              }}
            >
              BOOK A FREE CONSULT
            </a>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
