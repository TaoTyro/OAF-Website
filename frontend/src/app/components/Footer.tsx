import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact-stats' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'News & Updates', href: '#blog' },
  { label: 'Contact', href: '#contact' }
];

const socialLinks = [
  { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=100066903646147', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/orphans-of-africa-foundation/', label: 'LinkedIn', target: '_blank' }
];

export function Footer() {
  return (
    <footer  className="text-white bg-blue-700 dark:bg-gray-950" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <a href="#hero">
              <img src="/src/assets/logo.png" alt="Orphans of Africa" className="w-11 h-11 gap-2 hover:opacity-80 transition-opacity" />
              </a>
              <span style={{ fontFamily: 'Poppins, sans-serif' }} className=' font-bold'>Orphans Of Africa Foundation</span>
            </div>
            <p className=" mb-4 ">
              Transforming lives and building futures for orphans in Malawi and across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold " style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className=" hover:text-yellow-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-bold " style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 ">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <span>info@orphansofafrica21.org</span>
              </li>
              <li className="flex items-start gap-2 ">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <span>+265 994 284 001</span>
              </li>
              <li className="flex items-start gap-2 ">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Bwengu, Rumphi, Malawi</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 font-bold " style={{ fontFamily: 'Poppins, sans-serif' }}>Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-blue-600 hover:translate-0.5 hover:text-yellow-600 flex items-center justify-center duration-300 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 " />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white-800 pt-8 text-center text-white-400">
          <p>&copy; {new Date().getFullYear()} Orphans of Africa Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
