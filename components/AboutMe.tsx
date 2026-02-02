"use client";

export default function AboutMe() {
  return (
    <section className="section-padding bg-background-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="animate-fade-in">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-orange/20 to-pink-200/30 flex items-center justify-center overflow-hidden p-6">
                <img
                  src="/lets-connect.png"
                  alt="Let's Connect"
                  className="w-[100%] h-[100%] object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="text-6xl">👋</div>';
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-orange/10 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 animate-slide-up">
            <span className="text-sm font-semibold text-accent-orange uppercase tracking-wider">
              ABOUT ME
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Marketing strategist with 4 years of proven experience driving sales and brand visibility through innovative digital campaigns. I specialize in social media management, email marketing automation, and lead generation strategies that deliver measurable business growth. From content creation to analytics, I bring data-driven insights and creative execution to every project.
            </p>

            <div className="flex gap-4 pt-6">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
                (social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent-orange hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social}
                  >
                    <span className="text-sm">🔗</span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
