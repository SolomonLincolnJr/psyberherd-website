import { Book, Calendar, Users, CheckCircle, Star, Mail, ArrowRight, Award, Target, Heart } from 'lucide-react';
import { useState } from 'react';

interface BookPageProps {
  onPageChange: (page: string) => void;
}

export default function BookPage({ onPageChange }: BookPageProps) {
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <Calendar size={20} />
                <span className="font-semibold">Launching 2026</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                The Master Mind Motivator
              </h1>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                285 pages documenting the journey from catastrophic injury to high performance.
                Raw, honest, built on what actually worked when nothing else did.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-white font-semibold">Pre-orders Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-orange-400" size={20} />
                  <span className="text-slate-300">Based on 25+ Years Research</span>
                </div>
              </div>
              <button
                onClick={() => document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold px-8 py-4 rounded-lg transition-colors flex items-center gap-2 group"
              >
                Get Chapter One Free
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            {/* Book Cover Mockup */}
            <div className="relative">
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 transform hover:scale-105 transition-transform">
                <div className="bg-gradient-to-br from-orange-600 to-orange-800 h-96 w-72 mx-auto rounded-lg shadow-2xl flex flex-col justify-between p-6">
                  <div>
                    <Target className="text-white mb-4" size={32} />
                    <h3 className="text-white text-xl font-bold mb-2">THE MASTER MIND MOTIVATOR</h3>
                    <p className="text-orange-100 text-sm">From Catastrophic Injury to High Performance</p>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-lg font-semibold">Solomon E. Lincoln Jr.</div>
                    <div className="text-orange-100 text-sm">US Army Veteran • TBI Survivor • Author</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                285 Pages
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside the Book */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What's Inside The Book
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              285 pages of raw truth, practical strategies, and documented proof from 25+ years of systematic transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <Award className="text-orange-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">The Crash & Recovery</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Detailed account of the 18-wheeler accident, TBI diagnosis, and the 7-year systematic recovery process.
                No sugar-coating, no false hope - just documented reality.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <Target className="text-orange-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">The Framework</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Complete Master Mind Motivator methodology with step-by-step implementation guides.
                The four pillars, assessment tools, and progression protocols.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <Heart className="text-orange-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Real-World Application</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Case studies from military service, corporate environments, and extreme physical challenges.
                How the framework works under real pressure.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <Book className="text-orange-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Daily Systems</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Practical routines and habits that create automatic progress. Morning protocols,
                decision frameworks, and environment design principles.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <Users className="text-orange-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">For Veterans</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Specific chapters addressing veteran transition challenges, PTSD management,
                and finding purpose after service. Written by someone who's been there.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
              <CheckCircle className="text-orange-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Proof & Metrics</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Documentation of 425+ consecutive days, 733K+ steps per month, 10 marathons in 30 days.
                The receipts are real and verifiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What Early Readers Are Saying</h2>

          <div className="space-y-8">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <blockquote className="text-xl text-slate-300 italic mb-6 text-center">
                "I had the privilege of working under Solomon Lincoln's leadership at PSYBERHERD and highly recommend him as a supervisor.
                Solomon blends strategic vision with hands-on expertise, fostering a collaborative and inclusive work culture."
              </blockquote>
              <footer className="text-center text-slate-400">
                <strong className="text-white">Brian Redway</strong>, Real Estate Transaction Engineer
              </footer>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <blockquote className="text-xl text-slate-300 italic mb-6 text-center">
                "I was impressed with his ability to navigate complex sales scenarios, consistently achieve and surpass his sales targets
                as well as motivate the group around him. He was positive, collaborative, goal driven, and a positive influence within the team."
              </blockquote>
              <footer className="text-center text-slate-400">
                <strong className="text-white">Brian Delman</strong>, Sales & Revenue Growth Leader
              </footer>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-order Section */}
      <section id="preorder" className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Chapter One Free
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Start reading today. Get the first chapter plus exclusive updates on the book launch
            and early access to the Master Mind Motivator community.
          </p>

          {subscribed ? (
            <div className="bg-white/20 p-8 rounded-lg max-w-md mx-auto">
              <CheckCircle className="text-white mx-auto mb-4" size={48} />
              <h3 className="text-white font-bold text-xl mb-2">Thank You!</h3>
              <p className="text-orange-100">
                Check your email for Chapter One and exclusive updates. Welcome to the community.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for Chapter One"
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6 rounded-lg">
                  <Book className="text-white mx-auto mb-3" size={32} />
                  <h3 className="text-white font-bold mb-2">Chapter One</h3>
                  <p className="text-orange-100 text-sm">The crash and the moment everything changed</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <Users className="text-white mx-auto mb-3" size={32} />
                  <h3 className="text-white font-bold mb-2">Exclusive Updates</h3>
                  <p className="text-orange-100 text-sm">Behind-the-scenes and launch notifications</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <Target className="text-white mx-auto mb-3" size={32} />
                  <h3 className="text-white font-bold mb-2">Early Access</h3>
                  <p className="text-orange-100 text-sm">First access to courses and community</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Book Details */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Book Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Publication Details</h3>
                <div className="space-y-2 text-slate-300">
                  <p><strong className="text-white">Length:</strong> 285 pages</p>
                  <p><strong className="text-white">Format:</strong> Hardcover, Paperback, Digital</p>
                  <p><strong className="text-white">Launch:</strong> 2026</p>
                  <p><strong className="text-white">Genre:</strong> Personal Development, Military Memoir</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Author Background</h3>
                <div className="space-y-2 text-slate-300">
                  <p><strong className="text-white">Solomon E. Lincoln Jr.</strong></p>
                  <p>• US Army Veteran</p>
                  <p>• TBI Survivor and Recovery Expert</p>
                  <p>• ServiceNow Specialist & Innovation Catalyst</p>
                  <p>• Founder of Psyberherd</p>
                  <p>• Speaker and Leadership Developer</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">What Makes This Different</h3>
                <div className="space-y-2 text-slate-300">
                  <p>• <strong className="text-white">Real Documentation:</strong> 25+ years of verified data</p>
                  <p>• <strong className="text-white">Systematic Approach:</strong> Not motivation, methodology</p>
                  <p>• <strong className="text-white">Tested Under Fire:</strong> Proven in extreme circumstances</p>
                  <p>• <strong className="text-white">Military Precision:</strong> Discipline-based framework</p>
                  <p>• <strong className="text-white">Veteran Focus:</strong> Specific chapters for military transitions</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">Perfect For</h3>
                <div className="space-y-2 text-slate-300">
                  <p>• Veterans transitioning to civilian life</p>
                  <p>• Anyone recovering from trauma or setbacks</p>
                  <p>• Leaders seeking authentic resilience training</p>
                  <p>• People tired of temporary motivation</p>
                  <p>• Those wanting systematic excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            The Master Mind Motivator framework has been tested in the fire of real adversity.
            Your transformation starts with Chapter One.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Get Chapter One Free
            </button>
            <Link
              to="/contact"
              className="border border-slate-600 hover:border-orange-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Speaking Inquiry
            </Link>
          </div>

          <p className="text-slate-400 mt-8 text-sm">
            "Your mind is more powerful than your circumstances, but mastery requires method, not just motivation."
            <br />
            <strong className="text-orange-400">- Solomon E. Lincoln Jr.</strong>
          </p>
        </div>
      </section>
    </>
  );
}