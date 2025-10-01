import { Target, Brain, Zap, Shield, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MethodPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Master Mind<br />
            <span className="text-orange-400">Motivator Framework</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            25+ years of documented struggle, failure, and breakthrough distilled into a systematic approach
            to mental toughness tested in the fire of real adversity, not theory.
          </p>
          <div className="flex justify-center items-center gap-8 text-slate-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">425+</div>
              <div className="text-sm">Consecutive Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">733K</div>
              <div className="text-sm">Steps Per Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">7</div>
              <div className="text-sm">Years Recovery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Systems Over Motivation
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Motivation gets you started. Systems keep you going. The Master Mind Motivator framework
            is built on one fundamental truth: consistent action when it matters most creates sustained excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <Zap className="text-orange-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-4">Not Motivation</h3>
              <p className="text-slate-300">
                Motivation is temporary. It comes and goes based on how you feel.
                We build systems that work regardless of mood or circumstances.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <Target className="text-orange-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-4">Methodology</h3>
              <p className="text-slate-300">
                A proven, systematic approach tested through 25+ years of real-world
                application, including recovery from catastrophic injury.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <Shield className="text-orange-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-4">Sustainability</h3>
              <p className="text-slate-300">
                Built for the long haul. These aren't quick fixes - they're life systems
                that create lasting transformation and unbreakable mental toughness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Four Pillars of Mental Mastery
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Each pillar is designed to build upon the others, creating an integrated system
              for sustained high performance and unbreakable resilience.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Mind Management</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Master your internal dialogue. Learn to identify and interrupt destructive thought patterns
                  before they sabotage your progress. This isn't positive thinking - it's strategic thinking.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li>• Thought pattern recognition and interruption</li>
                  <li>• Strategic mental frameworks for decision-making</li>
                  <li>• Building mental resilience under pressure</li>
                  <li>• Cognitive flexibility and adaptation techniques</li>
                </ul>
              </div>
              <div className="bg-slate-700 h-64 rounded-lg flex items-center justify-center">
                <Brain className="text-orange-400" size={96} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-slate-700 h-64 rounded-lg flex items-center justify-center lg:order-first">
                <Calendar className="text-orange-400" size={96} />
              </div>
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">System Design</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Build systems that make success inevitable. When willpower fails, systems prevail.
                  Learn how to architect your environment for automatic wins.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li>• Environment design for automatic behavior</li>
                  <li>• Daily routine optimization and automation</li>
                  <li>• Progress tracking and measurement systems</li>
                  <li>• Accountability structures that actually work</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Physical Foundation</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Your body is the vehicle for your mind. Physical discipline creates mental discipline.
                  Learn the minimum effective dose for maximum mental clarity and resilience.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li>• Movement as mental training, not just fitness</li>
                  <li>• Energy management and optimization protocols</li>
                  <li>• Sleep and recovery as performance enhancers</li>
                  <li>• Physical challenges as confidence builders</li>
                </ul>
              </div>
              <div className="bg-slate-700 h-64 rounded-lg flex items-center justify-center">
                <Target className="text-orange-400" size={96} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-slate-700 h-64 rounded-lg flex items-center justify-center lg:order-first">
                <Shield className="text-orange-400" size={96} />
              </div>
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">04</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Purpose Alignment</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Connect your daily actions to something bigger than yourself. Purpose provides the fuel
                  when motivation runs dry. Learn to tap into unshakeable drive.
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li>• Values identification and clarification</li>
                  <li>• Long-term vision and strategic planning</li>
                  <li>• Legacy thinking and contribution mindset</li>
                  <li>• Mission-driven decision making frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-300">
              The Master Mind Motivator framework follows a proven implementation process
              that has been refined through real-world testing and documented results.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Assessment & Baseline</h3>
                <p className="text-slate-300">
                  Start with honest assessment of current mental patterns, systems, and obstacles.
                  You can't change what you don't acknowledge. This phase builds self-awareness
                  without judgment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">System Implementation</h3>
                <p className="text-slate-300">
                  Deploy one pillar at a time, building momentum through small, consistent wins.
                  This prevents overwhelm while creating sustainable change. Each system reinforces
                  the others.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Integration & Testing</h3>
                <p className="text-slate-300">
                  Apply the framework under real-world pressure. True mental toughness is revealed
                  and built through challenges, not comfort. This phase builds unshakeable confidence
                  in your abilities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Mastery & Evolution</h3>
                <p className="text-slate-300">
                  Continuous refinement and adaptation of your systems as you grow. Mental mastery
                  is not a destination - it's a way of being that evolves with your expanding capabilities
                  and changing circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Real Results from Real Application
          </h2>
          <p className="text-xl text-orange-100 mb-12">
            The Master Mind Motivator framework isn't theoretical. It's been tested and proven
            through extreme challenges and everyday struggles alike.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">7</div>
              <div className="text-orange-100 text-sm">Years to full recovery from TBI</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">10</div>
              <div className="text-orange-100 text-sm">Marathons completed in 30 days</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">425+</div>
              <div className="text-orange-100 text-sm">Consecutive days of system execution</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">733K</div>
              <div className="text-orange-100 text-sm">Average steps per month</div>
            </div>
          </div>

          <p className="text-orange-100 mt-8 italic">
            "This wasn't about one exceptional day — it's about building sustainable habits over time."
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Mental Mastery?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            The complete Master Mind Motivator framework is detailed in Solomon's upcoming book,
            along with practical implementation guides and real-world case studies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/book"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2 group"
            >
              Get the Complete Framework
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              to="/contact"
              className="border border-slate-600 hover:border-orange-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Speaking & Workshops
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <CheckCircle className="text-orange-400 mb-3" size={24} />
              <h3 className="text-white font-semibold mb-2">For Individuals</h3>
              <p className="text-slate-400 text-sm">
                Personal transformation and mental toughness development
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <CheckCircle className="text-orange-400 mb-3" size={24} />
              <h3 className="text-white font-semibold mb-2">For Teams</h3>
              <p className="text-slate-400 text-sm">
                Corporate resilience training and leadership development
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <CheckCircle className="text-orange-400 mb-3" size={24} />
              <h3 className="text-white font-semibold mb-2">For Veterans</h3>
              <p className="text-slate-400 text-sm">
                Transition support and post-service purpose alignment
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}