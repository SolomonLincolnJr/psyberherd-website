import { ArrowRight, Target, Users, Trophy, CheckCircle, Mail } from 'lucide-react';
import { useState } from 'react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export default function HomePage({ onPageChange }: HomePageProps) {
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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Master Your Mind.<br />
              Fulfill Your Purpose.<br />
              <span className="text-orange-400">Rise Up.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              I was crushed by an 18-wheeler. Seven years later, I walked 10 marathons in 30 days.
              This isn't motivation. This is methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onPageChange('book')}
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 group"
              >
                Get Chapter One Free
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => onPageChange('about')}
                className="border border-slate-600 hover:border-orange-400 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Read My Story
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              From Catastrophic Injury to High Performance
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              This isn't just another success story. This is documented proof that you can overcome anything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">4 High Schools</h3>
              <p className="text-slate-400">3 states, latchkey kid, single mother</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">US Army Veteran</h3>
              <p className="text-slate-400">Served with honor and distinction</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">TBI Recovery</h3>
              <p className="text-slate-400">Overcame traumatic brain injury and dysexecutive syndrome</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">733,997 Steps</h3>
              <p className="text-slate-400">425+ consecutive days, systems over motivation</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Method Preview */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Master Mind Motivator Framework
              </h2>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                25+ years of documented struggle, failure, and breakthrough distilled into a systematic approach
                to mental toughness tested in the fire of real adversity, not theory.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Not motivation. Methodology.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Consistent action when it matters most</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Systems that create sustained excellence</span>
                </div>
              </div>
              <button
                onClick={() => onPageChange('method')}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                Learn The Method
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <div className="text-center">
                <div className="bg-slate-700 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Target className="text-orange-400" size={64} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-400">425+</div>
                    <div className="text-slate-400 text-sm">Consecutive Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">10</div>
                    <div className="text-slate-400 text-sm">Marathons/30 Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">285</div>
                    <div className="text-slate-400 text-sm">Page Manuscript</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-400">7</div>
                    <div className="text-slate-400 text-sm">Years Recovery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Chapter One Free
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Start your transformation today. Get the first chapter of "The Master Mind Motivator"
            plus exclusive insights on building unbreakable mental toughness.
          </p>

          {subscribed ? (
            <div className="bg-white/20 p-6 rounded-lg max-w-md mx-auto">
              <CheckCircle className="text-white mx-auto mb-2" size={48} />
              <p className="text-white font-semibold">Thank you! Check your email.</p>
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
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-orange-200 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Get Chapter One
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">What People Are Saying</h2>
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-orange-400">★</div>
              ))}
            </div>
            <blockquote className="text-xl text-slate-300 italic mb-6">
              "Solomon's approach isn't about temporary motivation - it's about building systems that work when
              everything else fails. His story proves that no obstacle is permanent if you have the right methodology."
            </blockquote>
            <footer className="text-slate-400">
              <strong className="text-white">Brian Redway</strong>, Real Estate Professional
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}