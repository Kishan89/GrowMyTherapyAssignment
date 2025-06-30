"use client";

import FadeInSection from "./FadeInSection";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Persistent anxiety and chronic stress can silently erode your peace, making even everyday tasks feel overwhelming. Whether you’re dealing with racing thoughts, burnout, or a constant sense of pressure, therapy can offer grounding support. Together, we’ll work through the patterns fueling your anxiety and build sustainable coping strategies that foster calm, confidence, and long-term emotional resilience.",
    image: "/image/Service1.jpg",
  },
  {
    title: "Relationship Counseling",
    description:
      "Relationships are foundational to our emotional health, yet they often bring confusion, hurt, or miscommunication. Whether you're struggling with a partner, a parent, or navigating challenges in your chosen family, therapy provides a neutral space to be heard and understood. We’ll focus on developing healthier communication, rebuilding emotional safety, and deepening the connection you desire with those who matter most.",
    image: "/image/Service2.jpg",
  },
  {
    title: "Trauma Recovery",
    description:
      "Trauma can linger in both body and mind, shaping how you feel about yourself and your place in the world. Whether you're coping with recent trauma or carrying the weight of past experiences, healing is possible. Therapy offers a compassionate, non-judgmental space to process painful memories at your own pace. We’ll focus on reclaiming your sense of safety, self-worth, and personal empowerment through intentional and trauma-informed care.",
    image: "/image/Service3.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f6f3eb]" id="services">
      {/* Hero Text */}
      <FadeInSection delay={0.1}>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8 pt-12">
          <h1 className="text-[36px] leading-snug font-lora font-light text-[#383838] mb-10">
            Therapy can be a space where you invest in yourself—
            <br />
            <span className="block mt-2">
              one of the highest forms of self-care.
            </span>
          </h1>
          <p className="text-[16.5px] text-[#6b6b6b] font-light leading-relaxed mt-4 max-w-4xl mx-auto">
            You may be led to therapy by anxiety, depression, relationship
            stress, past or recent trauma, grief and loss, self-esteem issues,
            or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don't have to face it alone.
            Therapy offers you the time and space to work toward wellness and
            peace.
          </p>
        </div>
      </FadeInSection>

      {/* Divider */}
      <FadeInSection delay={0.2}>
        <div className="mt-16 h-[0.5px] bg-[#5c3a1e] mx-6 sm:mx-12 md:mx-20" />
      </FadeInSection>

      {/* Areas of Focus */}
      <FadeInSection delay={0.3}>
        <div className="pt-32 px-6 sm:px-10 md:px-20">
          <div className="text-center">
            <FadeInSection delay={0.35}>
              <h2 className="text-xl md:text-4xl font-lora font-light text-[#383838] mb-28 leading-snug">
                Areas of Focus
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-12">
              {services.map((service, index) => (
                <FadeInSection key={service.title} delay={0.4 + index * 0.1}>
                  <div className="text-center flex flex-col items-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-[330px] sm:w-[370px] md:w-[370px] lg:w-[370px] xl:w-[370px] aspect-square object-cover rounded-full mb-8 shadow-md"
                    />
                    <h3 className="text-xl font-lora font-medium text-[#2a2a2a] mb-4">
                      {service.title}
                    </h3>
                    <FadeInSection delay={0.5 + index * 0.1}>
                      <p className="text-[#6b6b6b] text-[16px] font-light leading-relaxed max-w-sm">
                        {service.description}
                      </p>
                    </FadeInSection>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Rates and Insurance */}
      <FadeInSection delay={0.4}>
        <div className="bg-[#89a8a9] text-[#1a1a1a] font-lora text-center px-4 sm:px-6 py-20 mt-32">
          <FadeInSection delay={0.45}>
            <h2 className="text-[36px] font-lora font-light mb-10">
              Rates and Insurance
            </h2>
          </FadeInSection>
          <div className="text-[17px] font-light leading-relaxed space-y-6 max-w-3xl mx-auto px-2">
            <FadeInSection delay={0.5}>
              <p>$200 / individual session</p>
            </FadeInSection>
            <FadeInSection delay={0.55}>
              <p>$240 / couples session</p>
            </FadeInSection>
            <FadeInSection delay={0.6}>
              <p>
                I accept both private pay and insurance. I am in-network with
                BCBS and Aetna.
              </p>
            </FadeInSection>
            <FadeInSection delay={0.65}>
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
      </FadeInSection>

      {/* Office Hours */}
      <FadeInSection delay={0.7}>
        <div className="bg-white text-center py-16 px-4 sm:px-6">
          <FadeInSection delay={0.75}>
            <h2 className="text-[28px] font-lora font-light text-[#383838] mb-6">
              Office Hours
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.8}>
            <p className="text-[15.5px] text-[#6b6b6b] font-light mb-2">
              In-person: Tue & Thu, 10 AM–6 PM
            </p>
          </FadeInSection>
          <FadeInSection delay={0.85}>
            <p className="text-[15.5px] text-[#6b6b6b] font-light">
              Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
            </p>
          </FadeInSection>
        </div>
      </FadeInSection>

      {/* Quote Section */}
      <FadeInSection delay={0.9}>
        <div
          className="relative w-full bg-cover bg-center min-h-[520px] px-4 sm:px-6 flex items-center justify-center text-center"
          style={{ backgroundImage: `url("/image/bg.png")` }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-white opacity-30" />

          {/* Quote Content */}
          <FadeInSection delay={1.0}>
            <div className="relative z-10 max-w-4xl px-2 text-center">
              <p className="text-[22px] md:text-[28px] leading-relaxed font-lora font-light text-[#444]">
                “I have come to believe that caring for myself is not
                self-indulgent.
                <br />
                Caring for myself is an act of survival.”
              </p>
              <FadeInSection delay={1.1}>
                <p className="text-[16px] text-black mt-6 font-light">
                  — Audre Lorde
                </p>
              </FadeInSection>
            </div>
          </FadeInSection>
        </div>
      </FadeInSection>
    </section>
  );
}
