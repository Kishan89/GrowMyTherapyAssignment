"use client";

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
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8 pt-12">
        <h1 className="text-[36px] leading-snug font-lora font-light text-[#383838] mb-10">
          Therapy can be a space where you invest in yourself—
          <br />
          <span className="block mt-2">
            one of the highest forms of self-care.
          </span>
        </h1>

        <p className="text-[16.5px] text-[#6b6b6b] font-light leading-relaxed mt-4 max-w-4xl mx-auto">
          You may be led to therapy by anxiety, depression, relationship stress,
          past or recent trauma, grief and loss, self-esteem issues, or
          challenges with family, parenting, or parental relationships. Whatever
          the source of your stress, you don't have to face it alone. Therapy
          offers you the time and space to work toward wellness and peace.
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 h-[0.5px] bg-[#5c3a1e] mx-6 sm:mx-12 md:mx-20" />

      {/* Areas of Focus */}
      {/* Areas of Focus */}
      <div className="pt-32">
        <div className="text-center">
          <h2 className="text-xl md:text-4xl font-lora font-light text-[#383838] mb-28 leading-snug">
            Areas of Focus
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-2 gap-y-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="text-center flex flex-col items-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[330px] sm:w-[370px] md:w-[370px] lg:w-[370px] xl:w-[370px] aspect-square object-cover rounded-full mb-8 shadow-md"
                />
                <h3 className="text-xl font-lora font-medium text-[#2a2a2a] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#6b6b6b] text-[16px] font-light leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rates & Insurance */}
      <div className="bg-[#89a8a9] text-[#1a1a1a] font-lora text-center px-4 sm:px-6 py-20 mt-32">
        <h2 className="text-[36px] font-lora font-light mb-10">
          Rates and Insurance
        </h2>
        <div className="text-[17px] font-light leading-relaxed space-y-6 max-w-3xl mx-auto px-2">
          <p>$200 / individual session</p>
          <p>$240 / couples session</p>
          <p>
            I accept both private pay and insurance. I am in-network with BCBS
            and Aetna.
          </p>
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
        </div>
      </div>

      {/* Office Hours */}
      <div className="bg-white text-center py-16 px-4 sm:px-6">
        <h2 className="text-[28px] font-lora font-light text-[#383838] mb-6">
          Office Hours
        </h2>
        <p className="text-[15.5px] text-[#6b6b6b] font-light mb-2">
          In-person: Tue & Thu, 10 AM–6 PM
        </p>
        <p className="text-[15.5px] text-[#6b6b6b] font-light">
          Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
        </p>
      </div>

      {/* Quote Section */}
      <div
        className="relative w-full bg-cover bg-center text-center px-4 sm:px-6 min-h-[520px] flex items-center"
        style={{ backgroundImage: `url("/image/bg.png")` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-2">
          <p className="text-[22px] md:text-[28px] leading-relaxed font-lora font-light text-[#444]">
            “I have come to believe that caring for myself is not
            self-indulgent.
            <br />
            Caring for myself is an act of survival.”
          </p>
          <p className="text-[16px] text-black mt-6 font-light">
            — Audre Lorde
          </p>
        </div>
      </div>
    </section>
  );
}
