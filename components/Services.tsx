"use client";

export default function Services() {
  const services = [
    {
      title: "Social Media Management",
      description:
        "Complete social media management including content creation, scheduling, and community engagement across all platforms.",
      icon: "📱",
      bgColor: "bg-pink-50",
    },
    {
      title: "Paid Advertising",
      description:
        "Strategic ad campaigns on Facebook, Instagram, Google, and TikTok that drive conversions and maximize ROI.",
      icon: "🎯",
      bgColor: "bg-blue-50",
    },
    {
      title: "Content Creation",
      description:
        "Eye-catching graphics, engaging captions, and compelling video content that resonates with your audience.",
      icon: "✨",
      bgColor: "bg-purple-50",
    },
    {
      title: "Analytics & Reporting",
      description:
        "In-depth performance analysis and monthly reports to track growth and optimize your social media strategy.",
      icon: "📊",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
            WHAT I OFFER
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Services That Drive Results
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive social media and advertising solutions tailored to grow your business and engage your audience effectively.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card ${service.bgColor} group cursor-pointer animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
