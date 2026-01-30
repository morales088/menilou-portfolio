"use client";

export default function Partners() {
  const partners = Array.from({ length: 12 }, (_, i) => ({
    name: `Partner ${i + 1}`,
    icon: "🏢",
  }));

  return (
    <section className="section-padding bg-background-light">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
            TRUSTED BY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Brands That Trust My Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I&apos;ve had the privilege of working with amazing businesses across various industries, helping them achieve their social media and advertising goals.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="card bg-white/50 flex items-center justify-center h-24 group cursor-pointer animate-scale-in opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
                {partner.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
