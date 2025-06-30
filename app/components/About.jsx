"use client";

export default function About() {
  return (
    <>
      <section className="bg-white pt-32 pb-20 pl-56 pr-44 font-lora text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
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
              className="w-full max-w-md h-[640px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Line below the section */}
      <div className="mt-24 h-[1.5px] bg-[#7a5133] mx-16" />
    </>
  );
}
