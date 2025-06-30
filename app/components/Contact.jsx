"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "YOUR_SITE_KEY_HERE"; // Replace this with your actual reCAPTCHA site key

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
    if (!form.phone) newErrors.phone = "Phone is required";
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
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
      // Handle form submission logic here
    }
  };

  return (
    <>
      <section className="min-h-screen bg-[#f4f6f7] py-16 px-4 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#1d3c2f] rounded-lg shadow-md p-8 w-full max-w-xl"
        >
          <h2 className="text-3xl font-lora font-bold text-[#1d3c2f] text-center mb-2">
            Get In Touch
          </h2>
          <p className="text-center text-[#1d3c2f] text-[17px] leading-relaxed mb-8">
            Fill out the form and I’ll get back to you shortly.
          </p>

          {[
            { label: "Name", name: "name", type: "text", placeholder: "Name" },
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
              placeholder: "(555) 234–5678",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="mb-6">
              <label className="block text-[#1d3c2f] mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full border border-[#1d3c2f] px-4 py-2 rounded-md outline-none"
              />
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <div className="mb-6">
            <label className="block text-[#1d3c2f] mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              className="w-full border border-[#1d3c2f] px-4 py-2 rounded-md h-24 resize-none outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-[#1d3c2f] mb-1">
              Preferred Contact Time
            </label>
            <input
              name="time"
              value={form.time}
              onChange={handleChange}
              placeholder="e.g., Mornings, Afternoons, Evenings"
              className="w-full border border-[#1d3c2f] px-4 py-2 rounded-md outline-none"
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time}</p>
            )}
          </div>

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

          <div className="mb-6">
            <ReCAPTCHA
              sitekey="6LcwEnMrAAAAAOwFGJVHd49Qf7N-czaZys1zRe6_"
              onChange={() => setCaptchaVerified(true)}
            />
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

          <p className="text-[13px] text-center text-[#333] mt-6">
            © By clicking submit you consent to receive texts and emails.
          </p>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#f6f3eb] text-center text-[#1e1e1e] font-lora py-14 px-4 sm:px-6">
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
    </>
  );
}
