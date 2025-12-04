"use client";

import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
// Removed EmailJS dependency
import LoadingSpinner from "../common/LoadingSpinner";
import SuccessMessage from "../common/SuccessMessage";
import FadeInSection from "../common/FadeInSection";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    therapyType: "",
    preferredMode: "",
    concerns: "",
    emergencyContact: "",
    previousTherapy: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "7:00 PM - 8:00 PM"
  ];

  const therapyTypes = [
    "Individual Therapy (₹4,500)",
    "Couples Therapy (₹6,000)",
    "Group Therapy (₹2,500)",
    "Family Therapy (₹5,500)"
  ];

  const preferredModes = [
    "In-person (Mumbai Office)",
    "Video Call (Zoom/Google Meet)",
    "Phone Consultation"
  ];

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Valid email is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!form.date) {
      newErrors.date = "Please select a date";
    }

    if (!form.time) {
      newErrors.time = "Please select a time slot";
    }

    if (!form.therapyType) {
      newErrors.therapyType = "Please select therapy type";
    }

    if (!form.preferredMode) {
      newErrors.preferredMode = "Please select consultation mode";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      try {
        const formData = new FormData();
        formData.append('_subject', 'New Booking - Dr. Serena Blake');
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        formData.append('date', form.date);
        formData.append('time', form.time);
        formData.append('therapyType', form.therapyType);
        formData.append('preferredMode', form.preferredMode);
        formData.append('emergencyContact', form.emergencyContact || 'N/A');
        formData.append('previousTherapy', form.previousTherapy || 'N/A');
        formData.append('concerns', form.concerns || 'N/A');

        await fetch('https://formsubmit.co/shahmanan2116@gmail.com', {
          method: 'POST',
          body: formData
        });
        
        setShowSuccess(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          therapyType: "",
          preferredMode: "",
          concerns: "",
          emergencyContact: "",
          previousTherapy: ""
        });
      } catch (error) {
        console.error("Booking submission error:", error);
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
          message="Your consultation booking request has been sent! We'll contact you shortly to confirm your appointment."
          onClose={() => setShowSuccess(false)}
        />
      )}

      <FadeInSection>
        <div className="min-h-screen bg-[#f5f3ec] py-16 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1d3c2f] mb-4">
                Book Your Free Consultation
              </h1>
              <p className="text-lg text-[#1d3c2f]/80">
                Take the first step towards better mental health. Schedule a
                complimentary 15-minute consultation to discuss your needs.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-xl p-8 md:p-12 border border-[#1d3c2f]/10"
            >
              {/* Name */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-[#1d3c2f] font-semibold mb-2">
                  <User className="w-5 h-5" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
                    errors.name
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#1d3c2f]/30 focus:border-[#5a7f8a]"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-[#1d3c2f] font-semibold mb-2">
                  <Mail className="w-5 h-5" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#1d3c2f]/30 focus:border-[#5a7f8a]"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-[#1d3c2f] font-semibold mb-2">
                  <Phone className="w-5 h-5" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91-9876543210"
                  className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#1d3c2f]/30 focus:border-[#5a7f8a]"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Date & Time Row */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Preferred Date */}
                <div>
                  <label className="flex items-center gap-2 text-[#1d3c2f] font-semibold mb-2">
                    <Calendar className="w-5 h-5" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
                      errors.date
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#1d3c2f]/30 focus:border-[#5a7f8a]"
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="flex items-center gap-2 text-[#1d3c2f] font-semibold mb-2">
                    <Clock className="w-5 h-5" />
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
                      errors.time
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#1d3c2f]/30 focus:border-[#5a7f8a]"
                    }`}
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Therapy Type */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-[#1d3c2f] font-semibold mb-2">
                  <MessageSquare className="w-5 h-5" />
                  Type of Therapy *
                </label>
                <select
                  name="therapyType"
                  value={form.therapyType}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
                    errors.therapyType
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#1d3c2f]/30 focus:border-[#5a7f8a]"
                  }`}
                >
                  <option value="">Select therapy type</option>
                  {therapyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.therapyType && (
                  <p className="text-red-500 text-sm mt-1">{errors.therapyType}</p>
                )}
              </div>

              {/* Preferred Mode */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-[#1d3c2f] font-semibold mb-2">
                  <Phone className="w-5 h-5" />
                  Consultation Mode *
                </label>
                <select
                  name="preferredMode"
                  value={form.preferredMode}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-4 py-3 outline-none transition ${
                    errors.preferredMode
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#1d3c2f]/30 focus:border-[#5a7f8a]"
                  }`}
                >
                  <option value="">Select consultation mode</option>
                  {preferredModes.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
                {errors.preferredMode && (
                  <p className="text-red-500 text-sm mt-1">{errors.preferredMode}</p>
                )}
              </div>

              {/* Emergency Contact */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-[#1d3c2f] font-semibold mb-2">
                  <Phone className="w-5 h-5" />
                  Emergency Contact (Optional)
                </label>
                <input
                  type="tel"
                  name="emergencyContact"
                  value={form.emergencyContact}
                  onChange={handleChange}
                  placeholder="Emergency contact number"
                  className="w-full border border-[#1d3c2f]/30 rounded-lg px-4 py-3 outline-none focus:border-[#5a7f8a] transition"
                />
              </div>

              {/* Previous Therapy */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-[#1d3c2f] font-semibold mb-2">
                  <MessageSquare className="w-5 h-5" />
                  Previous Therapy Experience (Optional)
                </label>
                <select
                  name="previousTherapy"
                  value={form.previousTherapy}
                  onChange={handleChange}
                  className="w-full border border-[#1d3c2f]/30 rounded-lg px-4 py-3 outline-none focus:border-[#5a7f8a] transition"
                >
                  <option value="">Select your experience</option>
                  <option value="first-time">This is my first time</option>
                  <option value="previous-positive">Previous positive experience</option>
                  <option value="previous-mixed">Previous mixed experience</option>
                  <option value="previous-negative">Previous challenging experience</option>
                </select>
              </div>

              {/* Concerns */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-[#1d3c2f] font-semibold mb-2">
                  <MessageSquare className="w-5 h-5" />
                  What brings you to therapy? (Optional)
                </label>
                <textarea
                  name="concerns"
                  value={form.concerns}
                  onChange={handleChange}
                  placeholder="Share any concerns or topics you'd like to discuss..."
                  rows="4"
                  className="w-full border border-[#1d3c2f]/30 rounded-lg px-4 py-3 outline-none focus:border-[#5a7f8a] transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#5a7f8a] text-white font-semibold py-4 rounded-lg hover:bg-[#4a6f7a] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <LoadingSpinner />
                    <span>Sending Request...</span>
                  </>
                ) : (
                  "Schedule Free Consultation"
                )}
              </button>

              <p className="text-sm text-center text-[#1d3c2f]/60 mt-4">
                * By submitting this form, you agree to be contacted via email or
                phone.
              </p>
            </form>

            {/* Additional Info */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8 border border-[#1d3c2f]/10">
              <h3 className="text-2xl font-bold text-[#1d3c2f] mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-[#1d3c2f]/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#5a7f8a] font-bold">1.</span>
                  <span>
                    We'll review your request within 24 hours and reach out to
                    confirm your appointment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5a7f8a] font-bold">2.</span>
                  <span>
                    Your free 15-minute consultation will be conducted via secure
                    video call
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5a7f8a] font-bold">3.</span>
                  <span>
                    We'll discuss your needs and determine if we're a good fit to
                    work together
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
