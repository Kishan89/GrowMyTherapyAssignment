import { MapPin, Phone, Mail, Clock, Shield, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1d3c2f] text-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-[#89a8a9]" />
                <div>
                  <p className="font-medium">Bandra West Office</p>
                  <p className="text-sm text-gray-300">
                    123 Hill Road, Bandra West<br />
                    Mumbai, Maharashtra 400050
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#89a8a9]" />
                <div>
                  <p>+91-9876543210</p>
                  <p className="text-sm text-gray-300">WhatsApp Available</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#89a8a9]" />
                <p>hello@drserenablake.com</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Individual Therapy</li>
              <li>Couples Counseling</li>
              <li>Group Therapy</li>
              <li>Family Therapy</li>
              <li>Trauma Recovery</li>
              <li>Anxiety Treatment</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/book-consultation" className="hover:text-[#89a8a9] transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#89a8a9] transition-colors">
                  About Dr. Blake
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#89a8a9] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#89a8a9] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-[#89a8a9] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Office Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-[#89a8a9]" />
                <div>
                  <p className="font-medium">In-Person</p>
                  <p className="text-sm text-gray-300">
                    Tue & Thu: 10 AM - 7 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 text-[#89a8a9]" />
                <div>
                  <p className="font-medium">Online</p>
                  <p className="text-sm text-gray-300">
                    Mon, Wed, Fri: 1 PM - 8 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 mt-1 text-[#89a8a9]" />
                <div>
                  <p className="font-medium">Emergency</p>
                  <p className="text-sm text-gray-300">24/7 Crisis Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Disclaimers */}
        <div className="border-t border-gray-600 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#89a8a9]" />
                Professional Standards
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Dr. Serena Blake is licensed by the Maharashtra Psychology Council 
                and adheres to the highest ethical standards. All sessions are 
                confidential and HIPAA compliant.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#89a8a9]" />
                Crisis Support
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                If you're experiencing a mental health emergency, please contact 
                emergency services immediately or call the National Suicide Prevention 
                Lifeline: 9152987821
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Dr. Serena Blake, Licensed Clinical Psychologist. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            This website is for informational purposes only and does not constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}