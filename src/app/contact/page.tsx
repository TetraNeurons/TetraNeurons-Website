'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/tetraneurons/',
      icon: '💼',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/p/TetraNeurons-61579161331157/',
      icon: '👥',
      color: 'hover:bg-blue-500',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tetra_neurons/',
      icon: '📸',
      color: 'hover:bg-pink-500',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@tetra.neurons',
      icon: '🎵',
      color: 'hover:bg-black',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCNgwCDYf-UsstDY2ffe9BWg',
      icon: '📺',
      color: 'hover:bg-red-600',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Let&apos;s discuss how we can help transform your ideas into reality.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
                    ✓ Thank you! We&apos;ll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Other Ways to Connect</h2>

              {/* Social Media */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Follow Us on Social Media</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-6 bg-gray-100 dark:bg-gray-900 rounded-lg text-center hover:text-white transition-all transform hover:scale-110 ${link.color}`}
                    >
                      <div className="text-4xl mb-2">{link.icon}</div>
                      <p className="font-semibold text-sm">{link.name}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Response Time</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We typically respond to inquiries within 24-48 hours.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">What We Do</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    <li>✓ AI-Driven Software Development</li>
                    <li>✓ Web3 & Blockchain Solutions</li>
                    <li>✓ Enterprise Applications</li>
                    <li>✓ Cloud Infrastructure</li>
                    <li>✓ Consulting & Strategy</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">Interested in Collaboration?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We&apos;re always open to exciting partnerships and hackathon collaborations. Reach out to discuss opportunities!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What services do you offer?',
                a: 'We specialize in AI-driven software development, Web3 solutions, enterprise applications, cloud infrastructure, and strategic consulting.',
              },
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary based on scope and complexity. We typically provide estimates after an initial consultation.',
              },
              {
                q: 'Do you participate in hackathons?',
                a: 'Yes! We actively participate in hackathons and have won multiple awards. We love collaborating on innovative projects.',
              },
              {
                q: 'Can we hire your team?',
                a: 'We offer both project-based work and dedicated team augmentation. Contact us to discuss your specific needs.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-3 text-blue-600">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
