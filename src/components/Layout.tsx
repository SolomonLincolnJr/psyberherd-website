import { Menu, X, Target, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  children: React.ReactNode;
}

export default function Layout({ currentPage, onPageChange, children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', key: 'home' },
    { name: 'About', key: 'about' },
    { name: 'The Method', key: 'method' },
    { name: 'Book', key: 'book' },
    { name: 'Blog', key: 'blog' },
    { name: 'Contact', key: 'contact' },
  ];

  const handleNavClick = (pageKey: string) => {
    onPageChange(pageKey);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
            >
              <Target className="text-orange-400" size={28} />
              <span className="text-xl font-bold">PSYBERHERD</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.key
                      ? 'text-orange-400 border-b-2 border-orange-400'
                      : 'text-slate-300 hover:text-orange-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-700">
                {navigation.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                      currentPage === item.key
                        ? 'text-orange-400 bg-slate-800'
                        : 'text-slate-300 hover:text-orange-400 hover:bg-slate-800'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-orange-400" size={24} />
                <span className="text-xl font-bold text-white">PSYBERHERD</span>
              </div>
              <p className="text-slate-400 mb-4">
                Master your mind. Fulfill your purpose. Rise up from adversity with systematic excellence.
              </p>
              <p className="text-slate-500 text-sm">
                Founded by Solomon E. Lincoln Jr. - US Army Veteran, TBI Survivor, Author
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin size={18} />
                  <span>Kearneysville, West Virginia</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Mail size={18} />
                  <span>info@psyberherd.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <Phone size={18} />
                  <span>Speaking Nationwide</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className="block text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © 2024 Psyberherd. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm mt-2 sm:mt-0">
              "Systems over motivation" - Solomon E. Lincoln Jr.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}