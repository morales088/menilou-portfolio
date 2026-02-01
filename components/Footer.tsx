export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: "📘" },
    { name: "Instagram", icon: "📷" },
    { name: "Dribbble", icon: "🏀" },
    { name: "Twitter", icon: "🐦" },
    { name: "YouTube", icon: "📺" },
  ];

  return (
    <footer className="bg-background-dark text-white py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="text-3xl font-bold mb-4">MENILOU MARVIDA</div>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl">
                ⭐
              </span>
            ))}
          </div>
          <p className="text-gray-400 max-w-md mx-auto">
            Marketing Strategist | Helping businesses grow through data-driven social media and email marketing strategies.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href="#"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent-orange transition-all duration-300 hover:scale-110"
              aria-label={social.name}
            >
              <span className="text-lg">{social.icon}</span>
            </a>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Menilou Marvida. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
