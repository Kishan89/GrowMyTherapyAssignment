"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import FadeInSection from "./FadeInSection";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone || !/^\+91[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone =
        "Valid Indian phone number required (e.g., +919876543210)";
    }

    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email is required";
    if (!form.message) newErrors.message = "Message is required";
    if (!form.time) newErrors.time = "Preferred time is required";
    if (!form.agree) newErrors.agree = "Consent is required";
    if (!captchaVerified)
      newErrors.captcha = "Please verify you're not a robot";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    setForm((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      switch (name) {
        case "phone":
          if (/^\+91[6-9]\d{9}$/.test(updatedValue.trim())) {
            delete updatedErrors.phone;
          }
          break;
        case "name":
        case "message":
        case "time":
          if (updatedValue.trim() !== "") delete updatedErrors[name];
          break;
        case "email":
          if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updatedValue)) {
            delete updatedErrors.email;
          }
          break;
        case "agree":
          if (updatedValue) delete updatedErrors.agree;
          break;
        default:
          break;
      }
      return updatedErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
        time: "",
        agree: false,
      });
      setCaptchaVerified(false);
    }
  };

  return (
    <section className="bg-[#f4f6f7] px-4 py-16">
      {/* Contact Form */}
      <FadeInSection delay={0.1}>
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#1d3c2f] rounded-lg shadow-md p-8 w-full max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-lora font-bold text-[#1d3c2f] text-center mb-2">
            Get In Touch
          </h2>
          <p className="text-center text-[#1d3c2f] text-[17px] leading-relaxed mb-8">
            Fill out the form and I’ll get back to you shortly.
          </p>

          {[
            {
              label: "Name",
              name: "name",
              type: "text",
              placeholder: "Name",
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "you@example.com",
            },
            {
              label: "Phone",
              name: "phone",
              type: "tel",
              placeholder: "+919876543210",
              inputMode: "tel",
              pattern: "\\+91[6-9]\\d{9}",
            },
          ].map(({ label, name, type, placeholder, inputMode, pattern }) => (
            <div key={name} className="mb-6">
              <label className="block text-[#1d3c2f] mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                inputMode={inputMode}
                pattern={pattern}
                className={`w-full border px-4 py-2 rounded-md outline-none ${
                  errors[name] ? "border-red-500" : "border-[#1d3c2f]"
                }`}
              />
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Message */}
          <div className="mb-6">
            <label className="block text-[#1d3c2f] mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              className={`w-full border px-4 py-2 rounded-md h-24 resize-none outline-none ${
                errors.message ? "border-red-500" : "border-[#1d3c2f]"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Preferred Time */}
          <div className="mb-6">
            <label className="block text-[#1d3c2f] mb-1">
              Preferred Contact Time
            </label>
            <input
              name="time"
              value={form.time}
              onChange={handleChange}
              placeholder="e.g., Mornings, Afternoons, Evenings"
              className={`w-full border px-4 py-2 rounded-md outline-none ${
                errors.time ? "border-red-500" : "border-[#1d3c2f]"
              }`}
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time}</p>
            )}
          </div>

          {/* Agreement */}
          <div className="mb-6 flex items-start gap-3">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-[#1d3c2f] text-sm">
              I agree to be contacted
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm mb-4">{errors.agree}</p>
          )}

          {/* reCAPTCHA */}
          <div className="mb-6">
            <div className="overflow-hidden max-w-full">
              <ReCAPTCHA
                sitekey="6LcwEnMrAAAAAOwFGJVHd49Qf7N-czaZys1zRe6_"
                onChange={() => {
                  setCaptchaVerified(true);
                  setErrors((prev) => {
                    const updated = { ...prev };
                    delete updated.captcha;
                    return updated;
                  });
                }}
              />
            </div>
            {errors.captcha && (
              <p className="text-red-500 text-sm mt-2">{errors.captcha}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#1d3c2f] text-white px-6 py-3 rounded-md w-full hover:bg-[#173024] transition"
          >
            Submit
          </button>

          <p className="text-[13px] text-center text-[#333] mt-4">
            © By clicking submit you consent to receive texts and emails.
          </p>
        </form>
      </FadeInSection>

      <div className="mt-10 pt-4 border-t-[2px] border-[#ddd]"></div>

      {/* Footer */}
      <FadeInSection delay={0.2}>
        <footer className="mt-12 bg-[#f4f6f7] text-center text-[#1e1e1e] font-lora pt-12">
          <div className="max-w-3xl mx-auto space-y-5 text-[15px] sm:text-[16px] leading-relaxed">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-light">
              Dr. Serena Blake, PsyD, Clinical Psychologist
            </h2>
            <p>
              <a href="mailto:serena@blakepsychology.com" className="underline">
                serena@blakepsychology.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:3235550192" className="underline">
                (323) 555-0192
              </a>
            </p>
            <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>

            <div className="flex flex-wrap justify-center gap-6 text-[14px] sm:text-[15px] mt-6">
              <a href="/" className="underline">
                Home
              </a>
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
              <a href="/estimate" className="underline">
                Good Faith Estimate
              </a>
            </div>

            <div className="mt-10 pt-4 border-t border-[#ddd]">
              <a
                href="/client-portal"
                className="underline inline-block text-[16px]"
              >
                Client Portal
              </a>
            </div>

            <p className="mt-10 text-[14px]">
              © 2025 Dr. Serena Blake, PsyD. All rights reserved.
            </p>
          </div>
        </footer>
      </FadeInSection>
    </section>
  );
}
