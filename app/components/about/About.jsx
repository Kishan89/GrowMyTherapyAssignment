import Image from "next/image";
import dynamic from "next/dynamic";
const FadeInSection = dynamic(() => import("../common/FadeInSection"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-10 sm:pt-16 md:pt-28 pb-16 sm:pb-20 pl-4 pr-4 sm:pl-10 sm:pr-6 md:pl-20 md:pr-10 lg:pl-36 lg:pr-20 xl:pl-52 xl:pr-32 2xl:pl-64 2xl:pr-44 font-lora text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start gap-8">
          {/* Left - Text */}
          <div className="md:w-1/2 w-full text-left">
            <FadeInSection delay={0.2}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-500">
                About Dr. Serena Blake
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <p className="text-[16px] sm:text-[17px] leading-[1.8rem] mb-5 sm:mb-6">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                based in Los Angeles, CA, with eight years of experience and
                over 500 client sessions. She blends evidence-based
                approaches—like cognitive-behavioral therapy and
                mindfulness—with compassionate, personalized care.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <p className="text-[16px] sm:text-[17px] leading-[1.8rem] mb-5 sm:mb-6">
                Dr. Blake specializes in helping individuals overcome anxiety,
                strengthen relationships, and heal from trauma. Her approach
                centers on building a safe, supportive space where clients can
                explore their challenges and discover lasting growth.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <p className="text-[16px] sm:text-[17px] leading-[1.8rem]">
                Whether you meet her in-person at her Maplewood Drive office or
                connect virtually via Zoom, Dr. Blake is dedicated to providing
                thoughtful, tailored guidance to help you thrive—mentally,
                emotionally, and relationally.
              </p>
            </FadeInSection>
          </div>

          {/* Right - Image */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            <Image
              src="/images/sarena.jpg"
              alt="Dr. Serena Blake"
              width={420}
              height={560}
              className="w-[80%] max-w-[260px] sm:max-w-[320px] md:max-w-[420px] aspect-[3/4] object-cover xl:h-[600px] xl:aspect-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Line below the section */}
      <FadeInSection delay={0.6}>
        <div className="mt-12 sm:mt-16 h-[2.5px] bg-[#5c3a1e] mx-6 sm:mx-12 md:mx-20" />
      </FadeInSection>
    </>
  );
}
