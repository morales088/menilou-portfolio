"use client";

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding bg-background-peach">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Information */}
          <div className="animate-fade-in">
            <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
              INQUIRY
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-10">
              Let&apos;s Get in Touch
            </h2>

            {/* Contact Info Grid - 2x2 */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 mb-2">Mobile Number</div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="font-medium text-gray-900">+63 931 181 6804</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 mb-2">WhatsApp Number</div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="font-medium text-gray-900">+63 931 181 6804</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 mb-2">Business Email</div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="font-medium text-gray-900 text-sm">meni.digitalmarketing@gmail.com</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 mb-2">Location</div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-gray-900">Quezon, Philippines</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988876.4906794783!2d120.89493687499998!3d14.026660599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6e4c2c0e51a9%3A0x87d3b880a2cc4f3f!2sQuezon%2C%20Philippines!5e0!3m2!1sen!2sph!4v1706847000000!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Quezon Province, Philippines"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-slide-up">
            <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
              SHARE YOUR IDEAS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Share your idea or requirement.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Tell me about your business challenges and objectives. Together, we&apos;ll create marketing strategies that deliver measurable growth.
            </p>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white"
                />
              </div>
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white resize-none"
              />
              <button type="submit" className="bg-accent-orange text-white px-8 py-3.5 rounded-lg font-medium hover:bg-accent-orange/90 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 w-full justify-center">
                Send your inquiry
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
