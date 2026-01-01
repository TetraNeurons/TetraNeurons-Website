'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

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
    <main className="min-h-screen bg-white dark:bg-[#0a1628] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20 hero-pattern">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute inset-0 grid-pattern opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8 animate-fade-in-down">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">💬 Let&apos;s Connect</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
            <span className="text-gray-900 dark:text-white">Get in </span>
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            Have a project in mind? We&apos;d love to hear from you. Let&apos;s discuss how we can help transform your ideas into <span className="text-blue-600 dark:text-blue-400 font-semibold">reality</span>.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-[#0f172a] dark:to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-animate opacity-0 translate-y-10">
              <div className="p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-blue-900/30 shadow-xl shadow-blue-500/5">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-white dark:bg-[#0a1628] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-white dark:bg-[#0a1628] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-white dark:bg-[#0a1628] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-white dark:bg-[#0a1628] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>

                  {submitted && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl border border-green-200 dark:border-green-800 flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>Thank you! We&apos;ll get back to you soon.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="scroll-animate opacity-0 translate-y-10">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Other Ways to Connect</h2>

              {/* Social Media */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6 text-gray-700 dark:text-gray-300">Follow Us on Social Media</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 bg-white dark:bg-[#0f172a] rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
                    >
                      <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{link.icon}</div>
                      <p className="font-semibold text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{link.name}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-blue-900/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl shadow-lg">⏱️</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Response Time</h3>
                      <p className="text-gray-600 dark:text-gray-400">We typically respond to inquiries within 24-48 hours.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-blue-900/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-xl shadow-lg">🚀</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">What We Do</h3>
                      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                        <li className="flex items-center gap-2"><span className="text-blue-500">✦</span> Disaster Management Solutions</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">✦</span> Agricultural Technology</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">✦</span> Tourism Platforms</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">✦</span> SaaS Development</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-blue-900/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white text-xl shadow-lg">🤝</div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Interested in Collaboration?</h3>
                      <p className="text-gray-600 dark:text-gray-400">We&apos;re always open to exciting partnerships and hackathon collaborations. Reach out to discuss opportunities!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 hero-pattern opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">❓ FAQ</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'What services do you offer?',
                a: 'We specialize in disaster management systems, agricultural technology platforms, tourism solutions, and SaaS development.',
              },
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary based on scope and complexity. We typically provide estimates after an initial consultation.',
              },
              {
                q: 'Do you participate in hackathons?',
                a: 'Yes! We actively participate in hackathons and have won multiple awards including 1st place at INSL and 1st Runner-Up at GreenExe 3.0.',
              },
              {
                q: 'Can we collaborate with your team?',
                a: 'Absolutely! We offer both project-based work and partnerships. Contact us to discuss your specific needs.',
              },
            ].map((faq, index) => (
              <div key={index} className="scroll-animate opacity-0 translate-y-10 p-6 bg-white dark:bg-[#0f172a] rounded-2xl border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                <h3 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
