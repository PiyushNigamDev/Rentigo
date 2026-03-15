import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCar,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white">
              <FaCar className="text-blue-500 text-2xl" />
              <h2 className="text-2xl font-bold text-white">REN<span className="text-blue-400">
                TIGO</span> </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Premium car rental service offering affordable, reliable, and
              luxury vehicles for every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Cars", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-blue-500 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>Daily Car Rental</li>
              <li>Luxury Vehicles</li>
              <li>Airport Pickup</li>
              <li>Long-Term Rental</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" />
                Lucknow,Uttar Pradesh,India
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                support@rentigo.com
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a className="social-icon hover:bg-blue-600">
                <FaFacebookF />
              </a>
              <a className="social-icon hover:bg-sky-500">
                <FaTwitter />
              </a>
              <a className="social-icon hover:bg-pink-600">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CarRental. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
