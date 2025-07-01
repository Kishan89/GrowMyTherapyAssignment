import FadeInSection from "../common/FadeInSection";

export default function QuoteSection() {
  return (
    <div
      className="relative w-full bg-cover bg-center min-h-[520px] px-4 sm:px-6 flex items-center justify-center text-center"
      style={{ backgroundImage: `url("/images/bg.jpg")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-2">
        <FadeInSection delay={1.2}>
          <p className="text-[22px] md:text-[28px] leading-relaxed font-lora font-light text-[#444]">
            “I have come to believe that caring for myself is not
            self-indulgent. <br />
            Caring for myself is an act of survival.”
          </p>
        </FadeInSection>

        <FadeInSection delay={1.3}>
          <p className="text-[16px] text-black mt-6 font-light">
            — Audre Lorde
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}
