"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import FadeInSection from "../common/FadeInSection";

const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    location: "Mumbai",
    rating: 5,
    text: "Dr. Blake helped me overcome my anxiety and build confidence. Her approach is both professional and deeply caring. The online sessions were convenient and effective.",
    therapy: "Individual Therapy"
  },
  {
    id: 2,
    name: "Rahul & Meera K.",
    location: "Delhi",
    rating: 5,
    text: "Our marriage was struggling, but Dr. Blake's couples therapy sessions transformed our relationship. We learned to communicate better and rebuild trust.",
    therapy: "Couples Therapy"
  },
  {
    id: 3,
    name: "Arjun M.",
    location: "Bangalore",
    rating: 5,
    text: "After my accident, I was dealing with trauma and depression. Dr. Blake's trauma-informed approach helped me heal and find my strength again.",
    therapy: "Trauma Recovery"
  },
  {
    id: 4,
    name: "Sneha R.",
    location: "Pune",
    rating: 5,
    text: "The group therapy sessions were incredibly supportive. Dr. Blake creates a safe space where everyone feels heard and understood.",
    therapy: "Group Therapy"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#f6f3eb] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-lora font-light text-[#383838] mb-4">
              What My Clients Say
            </h2>
            <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
              Real experiences from individuals and couples who have found healing and growth through therapy
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-[#89a8a9] mb-6 mx-auto" />
            
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-[#383838] text-center mb-8 leading-relaxed font-light">
              "{currentTestimonial.text}"
            </blockquote>

            <div className="text-center">
              <p className="font-semibold text-[#1d3c2f] text-lg">
                {currentTestimonial.name}
              </p>
              <p className="text-[#6b6b6b] mb-2">{currentTestimonial.location}</p>
              <p className="text-[#89a8a9] font-medium text-sm">
                {currentTestimonial.therapy}
              </p>
            </div>

            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-[#89a8a9] text-white hover:bg-[#7a9899] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-[#89a8a9]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-[#89a8a9] text-white hover:bg-[#7a9899] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <p className="text-3xl font-bold text-[#1d3c2f]">500+</p>
              <p className="text-[#6b6b6b]">Sessions Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1d3c2f]">8+</p>
              <p className="text-[#6b6b6b]">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1d3c2f]">95%</p>
              <p className="text-[#6b6b6b]">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1d3c2f]">24/7</p>
              <p className="text-[#6b6b6b]">Emergency Support</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}