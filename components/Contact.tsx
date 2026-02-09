"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-white border-t border-black/5 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Start a Conversation
          </h2>
          <p className="text-xl sm:text-2xl text-black/80 leading-relaxed text-left">
            Tell us about your project or business needs. We&apos;ll respond promptly.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-base font-medium mb-2 text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-black/20 bg-white text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium mb-2 text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-black/20 bg-white text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-base font-medium mb-2 text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-black/20 bg-white text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors resize-y"
              placeholder="Tell us about your project or business needs..."
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full sm:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
