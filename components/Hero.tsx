"use client";

export default function Hero() {
  const stats = [
    { number: "08+", label: "Years Experience in Social Media Management & Advertising", icon: "💼" },
    { number: "500+", label: "Successful Ad Campaigns Delivered Worldwide", icon: "🎯" },
    { number: "100%", label: "Client Satisfaction With Result-Driven Strategies", icon: "⭐" },
  ];

  return (
    <section
      id="home"
      className="section-padding bg-background-pink pt-32 md:pt-40 relative overflow-visible"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1">
            <div className="inline-block">
              <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
                HI THERE!
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              I&apos;M{" "}
              <span className="text-accent-orange">Menilou Marvida</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Your Virtual Assistant for Social Media & Ads
            </p>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              I help businesses grow their online presence through strategic social media management and high-converting ad campaigns. Let&apos;s turn your followers into customers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">BOOK A CONSULTATION</button>
              <button className="btn-secondary">VIEW CASE STUDIES</button>
            </div>
          </div>

          {/* Right Column - Image with Floating Stats Cards */}
          <div className="relative order-1 lg:order-2 animate-fade-in min-h-[500px] lg:min-h-[600px]">
            {/* Profile Image - Left Side */}
            <div className="relative lg:absolute lg:left-0 lg:top-0 w-full lg:w-[60%] h-full">
              <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
                <img
                  src="/hero-image.png"
                  alt="Professional portrait"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: "center 20%" }}
                  onError={(e) => {
                    // Fallback gradient if image not found
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.style.background = 'linear-gradient(135deg, #f5e6d3 0%, #d4a574 100%)';
                    }
                  }}
                />
              </div>
            </div>

            {/* Floating Stats Cards - Right Side, overlaying the image area */}
            <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 space-y-6 mt-6 lg:mt-0 lg:w-[55%]">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                      {stat.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
