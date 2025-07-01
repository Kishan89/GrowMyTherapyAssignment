"use client";

import FadeInSection from "../common/FadeInSection";
import ServiceCard from "./ServiceCard";
import RatesAndInsurance from "./RatesAndInsurance";
import OfficeHours from "./OfficeHours";
import QuoteSection from "./QuoteSection";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Persistent anxiety and chronic stress can silently erode your peace, making even everyday tasks feel overwhelming. Whether you’re dealing with racing thoughts, burnout, or a constant sense of pressure, therapy can offer grounding support. Together, we’ll work through the patterns fueling your anxiety and build sustainable coping strategies that foster calm, confidence, and long-term emotional resilience.",
    image: "/images/Service1.jpg",
  },
  {
    title: "Relationship Counseling",
    description:
      "Relationships are foundational to our emotional health, yet they often bring confusion, hurt, or miscommunication. Whether you're struggling with a partner, a parent, or navigating challenges in your chosen family, therapy provides a neutral space to be heard and understood. We’ll focus on developing healthier communication, rebuilding emotional safety, and deepening the connection you desire with those who matter most.",
    image: "/images/Service2.jpg",
  },
  {
    title: "Trauma Recovery",
    description:
      "Trauma can linger in both body and mind, shaping how you feel about yourself and your place in the world. Whether you're coping with recent trauma or carrying the weight of past experiences, healing is possible. Therapy offers a compassionate, non-judgmental space to process painful memories at your own pace. We’ll focus on reclaiming your sense of safety, self-worth, and personal empowerment through intentional and trauma-informed care.",
    image: "/images/Service3.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f6f3eb]" id="services">
      {/* Intro Section */}
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
            stress, past or recent trauma, grief, self-esteem issues, or
            challenges with family. Therapy offers the space to work toward
            wellness and peace.
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
            <h2 className="text-xl md:text-4xl font-lora font-light text-[#383838] mb-28 leading-snug">
              Areas of Focus
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-12">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Rates, Hours, and Quote Sections */}
      <RatesAndInsurance />
      <OfficeHours />
      <QuoteSection />
    </section>
  );
}
