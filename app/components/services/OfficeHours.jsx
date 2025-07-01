import FadeInSection from "../common/FadeInSection";

export default function OfficeHours() {
  return (
    <div className="bg-white text-center py-16 px-4 sm:px-6">
      <FadeInSection delay={1.0}>
        <h2 className="text-[28px] font-lora font-light text-[#383838] mb-6">
          Office Hours
        </h2>
      </FadeInSection>

      <FadeInSection delay={1.05}>
        <p className="text-[15.5px] text-[#6b6b6b] font-light mb-2">
          In-person: Tue & Thu, 10 AM–6 PM
        </p>
      </FadeInSection>

      <FadeInSection delay={1.1}>
        <p className="text-[15.5px] text-[#6b6b6b] font-light">
          Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
        </p>
      </FadeInSection>
    </div>
  );
}
