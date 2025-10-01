import { ArrowRight, Brain, Shield, Users, Mail, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Navigate the Digital Herd with Intention
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Break free from digital overwhelm and build a healthier relationship with technology.
              Discover the PSYBERHERD method for mindful digital living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/method"
                className="bg-white text-blue-600 text-lg font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all flex items-center gap-2 group shadow-lg"
              >
                Explore the Method
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/book"
                className="border-2 border-white text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all"
              >
                Pre-order Book
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Reclaim Your Digital Life
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              In a world of constant notifications and endless scrolling, learn to use technology intentionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Understand Your Patterns</h3>
              <p className="text-slate-600 leading-relaxed">
                Discover the psychological triggers that keep you trapped in digital habits and learn
                to recognize when technology serves you vs. when it distracts you.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Build Healthy Boundaries</h3>
              <p className="text-slate-600 leading-relaxed">
                Create sustainable systems that protect your time, attention, and mental wellbeing
                without completely disconnecting from the digital world.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Join the Movement</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect with a community of people committed to intentional technology use and
                support each other in building healthier digital habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get exclusive insights on digital wellness, early access to new content, and practical
            exercises delivered to your inbox.
          </p>

          {subscribed ? (
            <div className="bg-white/20 p-6 rounded-lg max-w-md mx-auto">
              <CheckCircle className="text-white mx-auto mb-2" size={48} />
              <p className="text-white font-semibold">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail size={18} />
                  Subscribe
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Break Free?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Discover the PSYBERHERD framework and transform your relationship with technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-all"
            >
              Learn Solomon's Story
            </Link>
            <Link
              to="/contact"
              className="border-2 border-slate-600 hover:border-blue-400 text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-slate-800 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
