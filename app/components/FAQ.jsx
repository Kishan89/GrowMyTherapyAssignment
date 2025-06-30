"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

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
    <section className="bg-white py-24 px-6 font-lora text-[#184061]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-14">
          Frequently Asked Questions
        </h2>

        <h3 className="text-2xl mb-10">Therapy</h3>

        <ul className="space-y-5">
          {faqs.map((faq, index) => (
            <li key={index} className="border-b border-[#9ab4c4] pb-5">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-start justify-between text-left"
              >
                <span className="flex items-center gap-3 text-[18px] font-normal">
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
                <p className="pl-11 mt-4 text-[#444] text-[17px] font-light leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
