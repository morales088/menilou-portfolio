"use client";

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding bg-background-peach">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="animate-fade-in">
            <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
              CONTACT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Let&apos;s discuss how I can help you dominate social media and create high-converting ad campaigns. Fill out the form below or reach out directly!
            </p>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white resize-none"
              />
            </form>
          </div>

          {/* Right Column */}
          <div className="animate-slide-up">
            <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
              SHARE YOUR IDEAS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Share Your Goals
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Tell me about your business and social media goals. Let&apos;s create a strategy that delivers measurable results.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-orange focus:outline-none transition-colors bg-white"
              />
              <input
                type="email"
                placeholder="Email"
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
              <button type="submit" className="btn-primary w-full">
                LET&apos;S GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
