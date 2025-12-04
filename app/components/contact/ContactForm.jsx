"use client";

import { useState } from "react";
import Captcha from "./Captcha";
import ContactFooter from "./ContactFooter";
import FadeInSection from "../common/FadeInSection";
import LoadingSpinner from "../common/LoadingSpinner";
import SuccessMessage from "../common/SuccessMessage";

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
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^\+91[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone =
        "Valid Indian phone number required (e.g., +919876543210)";
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        form.email.trim()
      )
    ) {
      newErrors.email = "Valid email is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!form.time.trim()) {
      newErrors.time = "Preferred time is required";
    }

    if (!form.agree) {
      newErrors.agree = "Consent is required";
    }

    if (!captchaVerified) {
      newErrors.captcha = "Please verify you're not a robot";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    setForm((prev) => ({ ...prev, [name]: updatedValue }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "name" && value.trim()) {
        delete newErrors.name;
      }

      if (name === "phone" && /^\+91[6-9]\d{9}$/.test(value.trim())) {
        delete newErrors.phone;
      }

      if (
        name === "email" &&
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())
      ) {
        delete newErrors.email;
      }

      if (name === "message" && value.trim()) {
        delete newErrors.message;
      }

      if (name === "time" && value.trim()) {
        delete newErrors.time;
      }

      if (name === "agree" && checked) {
        delete newErrors.agree;
      }

      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      try {
        const formData = new FormData();
        formData.append('_subject', 'New Contact - Dr. Serena Blake');
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        formData.append('time', form.time);
        formData.append('message', form.message);

        await fetch('https://formsubmit.co/shahmanan2116@gmail.com', {
          method: 'POST',
          body: formData
        });
        
        setShowSuccess(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
          time: "",
          agree: false,
        });
        setCaptchaVerified(false);
      } catch (error) {
        console.error("Form submission error:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {showSuccess && (
        <SuccessMessage
          message="Thank you! Your message has been sent to shahmanan2116@gmail.com. We'll get back to you shortly."
          onClose={() => setShowSuccess(false)}
        />
      )}

      <section className="bg-[#f4f6f7] px-4 py-16">
        <FadeInSection>
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#1d3c2f] rounded-lg shadow-md p-8 w-full max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-lora font-bold text-[#1d3c2f] text-center mb-2">
              Get In Touch
            </h2>
            <p className="text-center text-[#1d3c2f] text-[17px] leading-relaxed mb-8">
              Fill out the form and I'll get back to you shortly.
            </p>

            {["name", "email", "phone", "message", "time"].map((field) => (
              <div key={field} className="mb-6">
                <label className="block text-[#1d3c2f] mb-1 capitalize">
                  {field === "time" ? "Preferred Contact Time" : field}
                </label>

                {field === "message" ? (
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className={`w-full border px-4 py-2 rounded-md h-24 resize-none outline-none ${
                      errors.message ? "border-red-500" : "border-[#1d3c2f]"
                    }`}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={
                      field === "phone"
                        ? "+919876543210"
                        : field === "email"
                        ? "you@example.com"
                        : ""
                    }
                    className={`w-full border px-4 py-2 rounded-md outline-none ${
                      errors[field] ? "border-red-500" : "border-[#1d3c2f]"
                    }`}
                  />
                )}

                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

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

            <Captcha
              onVerify={() => {
                setCaptchaVerified(true);
                setErrors((prev) => {
                  const updated = { ...prev };
                  delete updated.captcha;
                  return updated;
                });
              }}
              error={errors.captcha}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#1d3c2f] text-white px-6 py-3 rounded-md w-full hover:bg-[#173024] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  <span>Sending...</span>
                </>
              ) : (
                "Submit"
              )}
            </button>

            <p className="text-[13px] text-center text-[#333] mt-4">
              © By clicking submit you consent to receive texts and emails.
            </p>
          </form>
        </FadeInSection>

        <div className="mt-10 pt-4 border-t-[2px] border-[#ddd]"></div>

        <FadeInSection>
          <ContactFooter />
        </FadeInSection>
      </section>
    </>
  );
}
