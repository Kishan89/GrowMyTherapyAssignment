import FadeInSection from "../common/FadeInSection";

export default function RatesAndInsurance() {
  return (
    <div className="bg-[#89a8a9] text-[#1a1a1a] font-lora text-center px-4 sm:px-6 py-20 mt-32">
      {/* Heading */}
      <FadeInSection delay={0.7}>
        <h2 className="text-[36px] font-light mb-10">Rates and Insurance</h2>
      </FadeInSection>

      <div className="text-[17px] font-light leading-relaxed space-y-6 max-w-3xl mx-auto px-2">
        {/* Paragraph 1 */}
        <FadeInSection delay={0.75}>
          <p>$200 / individual session</p>
        </FadeInSection>

        {/* Paragraph 2 */}
        <FadeInSection delay={0.8}>
          <p>$240 / couples session</p>
        </FadeInSection>

        {/* Paragraph 3 */}
        <FadeInSection delay={0.85}>
          <p>
            I accept both private pay and insurance. I am in-network with BCBS
            and Aetna.
          </p>
        </FadeInSection>

        {/* Paragraph 4 with link */}
        <FadeInSection delay={0.9}>
          <p>
            For out-of-network plans, I’ve partnered with Mentaya using{" "}
            <a
              href="https://www.mentaya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              this tool
            </a>{" "}
            to help you check your eligibility for reimbursement for my
            services.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}
