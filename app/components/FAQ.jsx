"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import FadeInSection from "./FadeInSection";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 font-lora text-[#184061]">
      <FadeInSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-10 sm:mb-12 md:mb-14">
            Frequently Asked Questions
          </h2>

          <h3 className="text-xl sm:text-2xl mb-6 sm:mb-10">Therapy</h3>

          <ul className="space-y-5">
            {faqs.map((faq, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <li className="border-b border-[#9ab4c4] pb-5">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-start justify-between text-left"
                  >
                    <span className="flex items-center gap-3 text-[17px] sm:text-[18px] font-normal">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openIndex === index
                            ? "bg-[#dceaf0] text-[#184061]"
                            : "bg-[#f1f5f8] text-[#597b8c]"
                        }`}
                      >
                        <ChevronRight
                          size={18}
                          className={`transition-transform duration-300 ${
                            openIndex === index ? "rotate-90" : ""
                          }`}
                        />
                      </span>
                      {faq.question}
                    </span>
                  </button>

                  {openIndex === index && (
                    <p className="pl-11 mt-3 text-[#444] text-[16px] sm:text-[17px] font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </section>
  );
}
