import { Award, BookOpen, Users, Shield } from "lucide-react";
import FadeInSection from "../common/FadeInSection";

const credentials = [
  {
    icon: Award,
    title: "Licensed Clinical Psychologist",
    description: "PsyD from Mumbai University, Licensed by Maharashtra Psychology Council",
    year: "2016"
  },
  {
    icon: BookOpen,
    title: "Specialized Training",
    description: "Certified in CBT, EMDR, and Trauma-Informed Care",
    year: "2018-2020"
  },
  {
    icon: Users,
    title: "Professional Memberships",
    description: "Indian Association of Clinical Psychologists, Mumbai Therapy Alliance",
    year: "Active"
  },
  {
    icon: Shield,
    title: "Ethical Standards",
    description: "Adheres to APA Code of Ethics and HIPAA Privacy Standards",
    year: "Ongoing"
  }
];

const certifications = [
  "Cognitive Behavioral Therapy (CBT) - Advanced Certification",
  "Eye Movement Desensitization and Reprocessing (EMDR) - Level II",
  "Trauma-Informed Care Specialist",
  "Couples and Family Therapy Certification",
  "Mindfulness-Based Stress Reduction (MBSR)",
  "Crisis Intervention and Suicide Prevention"
];

export default function Credentials() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-lora font-light text-[#383838] mb-4">
              Professional Credentials
            </h2>
            <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
              Committed to the highest standards of professional practice and ethical care
            </p>
          </div>
        </FadeInSection>

        {/* Main Credentials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <FadeInSection key={credential.title} delay={0.2 + index * 0.1}>
              <div className="text-center p-6 rounded-lg border border-[#1d3c2f]/10 hover:shadow-lg transition-shadow">
                <credential.icon className="w-12 h-12 text-[#89a8a9] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#1d3c2f] mb-2">
                  {credential.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm mb-2">
                  {credential.description}
                </p>
                <span className="text-[#89a8a9] font-medium text-xs">
                  {credential.year}
                </span>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Certifications */}
        <FadeInSection delay={0.6}>
          <div className="bg-[#f6f3eb] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-lora font-light text-[#383838] text-center mb-8">
              Specialized Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#89a8a9] rounded-full mt-2 flex-shrink-0" />
                  <p className="text-[#383838]">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Professional Statement */}
        <FadeInSection delay={0.7}>
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <blockquote className="text-xl text-[#383838] italic leading-relaxed">
              "My commitment to ongoing education and ethical practice ensures that every client 
              receives evidence-based, culturally sensitive, and compassionate care. I believe 
              in the power of therapy to transform lives and am honored to be part of each 
              client's healing journey."
            </blockquote>
            <p className="text-[#89a8a9] font-semibold mt-4">- Dr. Serena Blake</p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}