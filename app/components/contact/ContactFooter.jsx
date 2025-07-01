export default function ContactFooter() {
  return (
    <footer className="bg-[#f4f6f7] text-center text-[#1e1e1e] font-lora pt-12">
      <div className="max-w-3xl mx-auto space-y-5 text-[15px] sm:text-[16px] leading-relaxed">
        <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-light">
          Dr. Serena Blake, PsyD, Clinical Psychologist
        </h2>
        <p>
          <a href="mailto:serena@blakepsychology.com" className="underline">
            serena@blakepsychology.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:3235550192" className="underline">
            (323) 555-0192
          </a>
        </p>
        <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>

        <div className="flex flex-wrap justify-center gap-6 text-[14px] sm:text-[15px] mt-6">
          <a href="/" className="underline">
            Home
          </a>
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          <a href="/estimate" className="underline">
            Good Faith Estimate
          </a>
        </div>

        <div className="mt-10 pt-4 border-t border-[#ddd]">
          <a
            href="/client-portal"
            className="underline inline-block text-[16px]"
          >
            Client Portal
          </a>
        </div>

        <p className="mt-10 text-[14px]">
          © 2025 Dr. Serena Blake, PsyD. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
