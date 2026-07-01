import { CheckCircle, Clock, Loader2, Mail, Phone } from "lucide-react";
import React, { useState } from "react";

import Footer from "../components/Footer";
import { banners } from "../lib/bannerConfig";
import { supabase } from "../lib/supabase";

interface ContactFormData {
  fullName: string;
  email: string;
  type: string;
  message: string;
}

const INQUIRY_TYPES = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Support Request" },
  { value: "business", label: "Business Inquiry" },
];

export default function Contact({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [typeError, setTypeError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.type) {
      setTypeError(true);
      return;
    }
    setTypeError(false);
    setLoading(true);
    try {
      const { error } = await supabase.from("contact_enquiries").insert({
        full_name: formData.fullName,
        email: formData.email,
        type: formData.type,
        message: formData.message,
      });
      if (error) throw error;
      setFormData({ fullName: "", email: "", type: "", message: "" });
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-xl border-2 bg-white text-gray-900 placeholder-gray-400 " +
    "transition-all duration-200 outline-none text-[15px] leading-snug";

  const inputClass = (field: string) =>
    inputBase +
    (focused === field || formData[field as keyof ContactFormData]
      ? " border-[#1a5fa8] ring-4 ring-[#1a5fa8]/10"
      : " border-gray-200 hover:border-gray-300");

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{ background: "linear-gradient(160deg, #eaf3ff 0%, #f5f9ff 40%, #dce9ff 100%)" }}
    >
      <style>{`
        @keyframes zoom-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
        @keyframes slowFloat { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-60px,40px)} }
        @keyframes slowFloatReverse { 0%,100%{transform:translate(0,0)} 50%{transform:translate(60px,-40px)} }
        .animate-zoom-pulse { animation: zoom-pulse 12s ease-in-out infinite; }
        .animate-slowFloat { animation: slowFloat 18s ease-in-out infinite; }
        .animate-slowFloatReverse { animation: slowFloatReverse 22s ease-in-out infinite; }
      `}</style>

      {/* ── HERO BANNER ── */}
      <section className="relative pt-80 pb-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoom-pulse"
          style={{ backgroundImage: `url(${banners.contact})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3d73]/90 to-[#1a5fa8]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-300 font-semibold text-sm uppercase tracking-widest mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white">
            We'd love to
          </h1>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-orange-400 mt-2">
            hear from you.
          </h1>
          <p className="mt-5 text-blue-100 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed font-semibold">
            We'll get back to you within 1 business day.
          </p>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section className="relative flex-1 py-24">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[900px] h-[900px] rounded-full opacity-[0.12] blur-3xl animate-slowFloat"
            style={{
              background: "radial-gradient(circle, #1a5fa8 0%, transparent 70%)",
              top: "-20%",
              right: "-10%",
            }}
          />
          <div
            className="absolute w-[700px] h-[700px] rounded-full opacity-[0.10] blur-3xl animate-slowFloatReverse"
            style={{
              background: "radial-gradient(circle, #4aa3ff 0%, transparent 70%)",
              bottom: "5%",
              left: "-10%",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* LEFT — info panel */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                  Let's talk business.
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed font-semibold">
                  Have a project in mind? Want to place an order or just ask a question?
                  Fill out the form and our team will be in touch.
                </p>
              </div>

              {[
                { icon: Clock, label: "Response Time", value: "Within 1 business day" },
                { icon: Mail, label: "Email Us", value: "info@thebiznessedge.com" },
                { icon: Phone, label: "Call Us", value: "+1 (905) 595-0085" },
               
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-orange-200 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1a5fa8]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#1a5fa8]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5 font-bold">
                      {label}
                    </p>
                    <p className="text-gray-800 text-sm font-bold">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT — form card */}
            <div className="lg:col-span-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-orange-200 overflow-hidden">

              {success ? (
                /* ── SUCCESS STATE ── */
                <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-8 font-semibold">
                    Thanks for reaching out. We'll get back to you within 1 business day.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2.5 bg-[#1a5fa8] text-white rounded-xl text-sm font-bold hover:bg-[#164f8a] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* ── FORM ── */
                <>
                  <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                    <h3 className="text-xl font-extrabold text-gray-900">
                      Send a Message
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 font-semibold">
                      All fields are required.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5">

                    {/* Full Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onFocus={() => setFocused("fullName")}
                          onBlur={() => setFocused(null)}
                          required
                          placeholder="Jane Smith"
                          className={inputClass("fullName")}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          required
                          placeholder="you@example.com"
                          className={inputClass("email")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Inquiry Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {INQUIRY_TYPES.map(({ value, label }) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => { setFormData({ ...formData, type: value }); setTypeError(false); }}
                            className={`px-4 py-2.5 rounded-xl border-2 text-sm transition-all duration-150 font-bold ${
                              formData.type === value
                                ? "border-[#1a5fa8] bg-[#1a5fa8] text-white shadow-md"
                                : typeError
                                  ? "border-red-400 text-gray-600 hover:border-[#1a5fa8]/50 hover:text-[#1a5fa8] bg-white"
                                  : "border-gray-200 text-gray-600 hover:border-[#1a5fa8]/50 hover:text-[#1a5fa8] bg-white"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                      {typeError && (
                        <p className="text-red-500 text-xs font-semibold mt-1.5">Please select an inquiry type.</p>
                      )}
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="sr-only"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value="" />
                        {INQUIRY_TYPES.map(({ value, label }) => (
                          <option key={value} value={value}>{label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Message
                        </label>
                        <span className={`text-xs font-bold transition-colors ${formData.message.length > 0 ? "text-[#1a5fa8]" : "text-gray-300"}`}>
                          {formData.message.length} chars
                        </span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        required
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className={inputClass("message") + " resize-none"}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl font-extrabold text-[15px] text-white bg-[#1a5fa8] hover:bg-[#164f8a] active:scale-[0.98] disabled:opacity-60 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin h-5 w-5" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate ?? (() => {})} />
    </div>
  );
}
