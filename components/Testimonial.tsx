export default function Testimonial() {
  return (
    <section className="section-padding bg-background-lavender">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Value Proposition */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Driving measurable results through innovative digital campaigns and strategic market insights.
            </h2>
          </div>

          {/* Right Column - Testimonial Card */}
          <div className="animate-slide-up">
            <div className="card bg-white shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">⭐</div>
                <div className="text-4xl">⭐</div>
                <div className="text-4xl">⭐</div>
                <div className="text-4xl">⭐</div>
                <div className="text-4xl">⭐</div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &quot;Working with Menilou has been transformative for our business. Her strategic approach to social media and email marketing doubled our engagement and significantly increased our sales. Professional, creative, and results-driven!&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-orange to-pink-400 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <div className="font-bold text-gray-900">Client</div>
                  <div className="text-sm text-gray-600">E-commerce Business Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
