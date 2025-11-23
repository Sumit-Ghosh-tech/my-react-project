"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl opacity-90">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Send us an email and we'll respond as soon as possible.</p>
              <a
                href="mailto:support@shopmatrix.com"
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                support@shopmatrix.com
              </a>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">Call us during business hours (Mon-Fri, 9am-5pm BD).</p>
              <a href="tel:018459558876" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                018459558876
              </a>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-muted-foreground">Dhaka Nikunja -2</p>
              <p className="text-muted-foreground">Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-card rounded-lg border border-border p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
            <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you soon.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <Button
                type="submit"
                className="w-full py-3 text-lg flex items-center justify-center gap-2"
                disabled={submitted}
              >
                {submitted ? "Message Sent!" : "Send Message"}
                {!submitted && <Send className="w-4 h-4" />}
              </Button>

              {submitted && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-semibold">
                  Thank you! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/50 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "What are your business hours?",
                a: "We operate 24/7 online. Our support team is available Mon-Fri, 9am-5pm EST.",
              },
              {
                q: "How long does shipping take?",
                a: "Standard shipping takes 5-7 business days. Express shipping available for 2-3 days.",
              },
              {
                q: "What is your return policy?",
                a: "We offer a 30-day return policy on all items. No questions asked refunds.",
              },
              {
                q: "Do you offer international shipping?",
                a: "Yes! We ship to 50+ countries worldwide with competitive rates.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}