import FadeInSection from "../common/FadeInSection";

export default function OfficeHours() {
  return (
    <div className="bg-white text-center py-16 px-4 sm:px-6">
      <FadeInSection delay={1.0}>
        <h2 className="text-[28px] font-lora font-light text-[#383838] mb-8">
          Office Hours & Availability
        </h2>
      </FadeInSection>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <FadeInSection delay={1.05}>
          <div className="bg-[#f6f3eb] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1d3c2f] mb-4">
              In-Person Sessions
            </h3>
            <div className="space-y-2 text-[#6b6b6b]">
              <p>📍 Bandra West, Mumbai</p>
              <p>🗓️ Tuesday & Thursday</p>
              <p>🕐 10:00 AM – 7:00 PM IST</p>
              <p>💰 Individual: ₹4,500 | Couples: ₹6,000</p>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={1.1}>
          <div className="bg-[#89a8a9]/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#1d3c2f] mb-4">
              Online Sessions
            </h3>
            <div className="space-y-2 text-[#6b6b6b]">
              <p>💻 Secure Video Calls</p>
              <p>🗓️ Monday, Wednesday & Friday</p>
              <p>🕐 1:00 PM – 8:00 PM IST</p>
              <p>🌐 Available across India</p>
            </div>
          </div>
        </FadeInSection>
      </div>

      <FadeInSection delay={1.15}>
        <div className="mt-8 bg-[#1d3c2f] text-white rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-3">Emergency Support</h3>
          <p className="text-sm">
            Crisis support available 24/7 via WhatsApp: +91-9876543210
          </p>
          <p className="text-xs mt-2 opacity-80">
            For immediate mental health emergencies, please contact your local emergency services
          </p>
        </div>
      </FadeInSection>
    </div>
  );
}
