import { useState } from "react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4 shrink-0 mt-0.5"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4 shrink-0"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.46-1.46a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4 shrink-0"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
  </svg>
);

// Logo placeholder
const Logo = () => (
  <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center">
    <span className="text-red-600 font-black text-xs text-center leading-tight px-1">
      CM
    </span>
  </div>
);

const socialLinks = [
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <TwitterIcon />, label: "Twitter / X" },
  { icon: <TikTokIcon />, label: "TikTok" },
];

const quickLinks = [
  "Menu",
  "About Us",
  "Reviews",
  "Reservations",
  "Track Order",
];

const contactItems = [
  { icon: <MapPinIcon />, text: "123 Chicken Lane, Victoria Island, Lagos" },
  { icon: <PhoneIcon />, text: "+234 801 234 5678" },
  { icon: <MailIcon />, text: "hello@chikinimonie.com" },
  { icon: <ClockIcon />, text: "Mon – Sun: 9am – 10pm" },
];

export default function ChikiniMonieFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="font-sans">
      {/* Newsletter Banner */}
      <section className="bg-red-600 py-14 px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
          Get Weekly Deals Straight to Your Inbox
        </h2>
        <p className="text-red-200 text-base mb-8">
          Join 5,000+ chicken lovers for exclusive offers
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
            className="w-full sm:flex-1 px-6 py-3.5 rounded-full bg-red-500 text-white placeholder-red-300 border border-red-400 focus:outline-none focus:border-white text-sm transition-colors"
          />
          <button
            onClick={handleSubscribe}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-red-600 font-bold text-sm hover:bg-red-50 active:scale-95 transition-all duration-150 whitespace-nowrap"
          >
            {subscribed ? "Subscribed! 🎉" : "Subscribe"}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-300 px-6 pt-14 pb-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Serving the best chicken in town since 2020. Fresh, spicy, and
              always delicious.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-150"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">Contact Us</h3>
            <ul className="space-y-3.5">
              {contactItems.map(({ icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-2.5 text-sm text-gray-400"
                >
                  <span className="text-gray-500 mt-0.5">{icon}</span>
                  <span className="leading-snug">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-[#2e2e2e] flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-200"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2e2e2e] pt-6 flex items-center justify-center relative">
          <p className="text-gray-500 text-xs text-center">
            © 2025 Chikini Monie. All rights reserved.
          </p>

          {/* Chat bubble */}
        </div>
      </footer>
    </div>
  );
}
