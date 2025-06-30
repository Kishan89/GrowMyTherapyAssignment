"use client";

export default function About() {
  return (
    <>
      <section className="bg-white pt-32 pb-20 pl-8 pr-4 sm:pl-12 sm:pr-6 md:pl-20 md:pr-10 lg:pl-36 lg:pr-20 xl:pl-52 xl:pr-32 2xl:pl-64 2xl:pr-44 font-lora text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start gap-8">
          {/* Left - Text */}
          <div className="md:w-1/2 w-full text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-500">
              About Dr. Serena Blake
            </h2>
            <p className="text-[17px] leading-[1.9rem] mb-6">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care.
            </p>
            <p className="text-[17px] leading-[1.9rem] mb-6">
              Dr. Blake specializes in helping individuals overcome anxiety,
              strengthen relationships, and heal from trauma. Her approach
              centers on building a safe, supportive space where clients can
              explore their challenges and discover lasting growth.
            </p>
            <p className="text-[17px] leading-[1.9rem]">
              Whether you meet her in-person at her Maplewood Drive office or
              connect virtually via Zoom, Dr. Blake is dedicated to providing
              thoughtful, tailored guidance to help you thrive—mentally,
              emotionally, and relationally.
            </p>
          </div>

          {/* Right - Image */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            <img
              src="/image/sarena.jpg"
              alt="Dr. Serena Blake"
              className="w-[85%] max-w-[320px] sm:max-w-[360px] md:max-w-[420px] aspect-[3/4] object-cover xl:h-[640px] xl:aspect-auto"
            />
          </div>
        </div>
      </section>

      {/* Line below the section */}
      <div className="mt-16 h-[2px] bg-[#5c3a1e] mx-6 sm:mx-12 md:mx-20" />
    </>
  );
}
