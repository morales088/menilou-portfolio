export default function AboutMe() {
  return (
    <section className="section-padding bg-background-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="animate-fade-in">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-orange/20 to-pink-200/30 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">👋</div>
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
              As a dedicated Virtual Assistant specializing in Social Media Management and Advertising, I help businesses build their online presence and drive real results. With 8+ years of experience, I combine creativity with data-driven strategies to deliver campaigns that convert.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone / WhatsApp</div>
                  <div className="font-medium">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <span className="text-lg">✉️</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">hello@example.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-medium">New York, USA</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
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
