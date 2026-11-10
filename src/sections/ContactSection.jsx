/**
 * ContactSection.jsx
 * ------------------
 * Simple contact form section.
 *
 * Form submission goes through api.js → submitContact(formData).
 * When backend is live: POST /api/contact
 * Body: { name, email, company, message }
 */
import { useState } from "react";
import Button from "../components/Button";
import SectionLabel from "../components/SectionLabel";
import { submitContact } from "../services/api";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitContact(form);
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-24 px-5 md:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <SectionLabel text="Get in Touch" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Let's build something together.
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-brand transition-colors"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email address"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-brand transition-colors"
            />
          </div>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company (optional)"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-brand transition-colors"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Describe your project…"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-brand transition-colors resize-none"
          />

          {/* Submit */}
          <Button
            type="submit"
            variant="primary"
            className="w-full justify-center py-3 text-base"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </Button>

          {/* Feedback messages */}
          {status === "success" && (
            <p className="text-green-600 text-sm text-center font-medium">
              ✓ Message sent! We'll be in touch within 24 hours.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-sm text-center font-medium">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

