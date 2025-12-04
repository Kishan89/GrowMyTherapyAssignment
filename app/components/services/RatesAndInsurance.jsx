import FadeInSection from "../common/FadeInSection";

export default function RatesAndInsurance() {
  return (
    <div className="bg-[#89a8a9] text-[#1a1a1a] font-lora text-center px-4 sm:px-6 py-20 mt-32">
      {/* Heading */}
      <FadeInSection delay={0.7}>
        <h2 className="text-[36px] font-light mb-10">Rates and Insurance</h2>
      </FadeInSection>

      <div className="text-[17px] font-light leading-relaxed space-y-6 max-w-4xl mx-auto px-2">
        {/* Individual Session */}
        <FadeInSection delay={0.75}>
          <div className="bg-white/20 rounded-lg p-6 mb-4">
            <h3 className="text-2xl font-semibold mb-2">Individual Therapy</h3>
            <p className="text-3xl font-bold text-[#1d3c2f]">₹4,500 / session</p>
            <p className="text-sm mt-2">50-minute session</p>
          </div>
        </FadeInSection>

        {/* Couples Session */}
        <FadeInSection delay={0.8}>
          <div className="bg-white/20 rounded-lg p-6 mb-4">
            <h3 className="text-2xl font-semibold mb-2">Couples Therapy</h3>
            <p className="text-3xl font-bold text-[#1d3c2f]">₹6,000 / session</p>
            <p className="text-sm mt-2">60-minute session</p>
          </div>
        </FadeInSection>

        {/* Group Session */}
        <FadeInSection delay={0.82}>
          <div className="bg-white/20 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-2">Group Therapy</h3>
            <p className="text-3xl font-bold text-[#1d3c2f]">₹2,500 / session</p>
            <p className="text-sm mt-2">90-minute group session</p>
          </div>
        </FadeInSection>

        {/* Insurance Info */}
        <FadeInSection delay={0.85}>
          <p className="mb-4">
            I accept both private pay and major health insurance plans including
            Star Health, HDFC ERGO, and ICICI Lombard.
          </p>
        </FadeInSection>

        {/* Payment Options */}
        <FadeInSection delay={0.87}>
          <p className="mb-4">
            <strong>Payment Options:</strong> UPI, Net Banking, Credit/Debit Cards, 
            and EMI options available for therapy packages.
          </p>
        </FadeInSection>

        {/* Package Deals */}
        <FadeInSection delay={0.9}>
          <div className="bg-[#1d3c2f] text-white rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold mb-3">Therapy Packages</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">4-Session Package</p>
                <p>₹16,200 (10% discount)</p>
              </div>
              <div>
                <p className="font-semibold">8-Session Package</p>
                <p>₹32,400 (10% discount)</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Reimbursement */}
        <FadeInSection delay={0.92}>
          <p className="mt-4">
            For corporate insurance plans, I provide detailed invoices for 
            reimbursement claims. Contact me for assistance with your specific plan.
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}