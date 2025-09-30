import { Target, Heart, Award, Calendar, MapPin, Users } from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export default function AboutPage({ onPageChange }: AboutPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Meet Solomon E. Lincoln Jr.
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                From a latchkey kid bouncing between schools to a US Army veteran,
                from being crushed by an 18-wheeler to walking 10 marathons in 30 days - this is the raw, unfiltered
                story of transformation through systematic excellence, not motivation.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-orange-400">
                  <Award size={20} />
                  <span className="font-semibold">US Army Veteran</span>
                </div>
                <div className="flex items-center gap-2 text-orange-400">
                  <Target size={20} />
                  <span className="font-semibold">TBI Survivor</span>
                </div>
                <div className="flex items-center gap-2 text-orange-400">
                  <Heart size={20} />
                  <span className="font-semibold">ServiceNow Specialist</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <div className="bg-slate-700 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Target className="text-orange-400 mx-auto mb-4" size={64} />
                  <p className="text-slate-300 text-lg font-semibold">Solomon E. Lincoln Jr.</p>
                  <p className="text-slate-400">Founder, Psyberherd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            The Origin Story
          </h2>

          <div className="space-y-12">
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Early Years: Building Resilience</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Grew up a latchkey kid in a single-mother household, attended four high schools across three states.
                    This constant change taught me early that stability was something you created, not something you found. While other kids
                    complained about moving, I learned to adapt, survive, and eventually thrive in chaos. These experiences built
                    the foundation for everything that would come later.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Military Service: Finding Structure</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Joined the US Army seeking structure and purpose. Military service provided the discipline and systematic
                    approach to challenges that would become fundamental to the Master Mind Motivator framework. The Army taught
                    me that success isn't about talent - it's about systems, consistency, and showing up when it matters most.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">The Crash: When Everything Changes</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-4">
                    I was crushed by an 18-wheeler. Traumatic brain injury. Dysexecutive syndrome. The kind of accident where doctors
                    question if you'll ever be the same. The medical reality was harsh - TBI and cognitive challenges that would
                    define the next phase of my life.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    But I had something they didn't account for: a systematic approach to rebuilding myself from the ground up.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">04</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">The Recovery: Systems Over Motivation</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-4">
                    Seven years later, I walked 10 marathons in 30 days. This wasn't about inspiration or motivation.
                    This was about developing a methodology - the Master Mind Motivator framework - built through 25+ years
                    of documented struggle, failure, and breakthrough.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    The process wasn't pretty. It wasn't motivational quotes. It was systematic, daily work to
                    rebuild my mind, body, and spirit using proven methods, not wishful thinking.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">05</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">The Proof: Living Systems</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-4">
                    733,997 steps in June alone. Every single day completed. This wasn't a comeback story - this is a life system.
                    425+ consecutive days closing my activity rings. 733,000+ steps per month. Monthly fitness challenges
                    completed without fail since 2023. The 10 marathons weren't a one-time achievement - they're a lifestyle.
                  </p>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    This wasn't about running. This was about proving that consistent action when it matters most creates
                    sustained excellence, not temporary motivation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Professional Focus */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What I Do Now
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Combining military discipline, recovery experience, and technology expertise to drive transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">ServiceNow Specialist & Innovation Catalyst</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                ServiceNow RiseUp Graduate and current university student pursuing Associate-level certifications.
                Earned 40+ badges in platform implementation, administration, and process optimization.
              </p>
              <div className="space-y-2 text-slate-300">
                <div>• Platform Administration: ITSM, CMDB, governance</div>
                <div>• Automation & Scripting: JavaScript workflows, Flow Designer</div>
                <div>• Analytics & Insights: Performance Analytics, KPIs</div>
                <div>• Advanced Capabilities: CSDM, ATF, Generative AI, Now Assist</div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Author & Speaker</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                285-page manuscript documenting the Master Mind Motivator framework. Speaking to veteran organizations,
                corporate teams, and anyone who's been told their limitations are permanent.
              </p>
              <div className="space-y-2 text-slate-300">
                <div>• Mental toughness and resilience training</div>
                <div>• Veteran transition programs</div>
                <div>• Corporate leadership development</div>
                <div>• Overcoming catastrophic setbacks</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-slate-300 mb-6">
              <strong className="text-white">My message:</strong> Your mind is more powerful than your circumstances,
              but mastery requires method, not just motivation.
            </p>
            <p className="text-slate-400">
              Based in Kearneysville, WV | Speaking nationwide | Serving veteran and Appalachian communities
            </p>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Why I Share This Story
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            I don't just teach discipline. I live it. Every day is proof that age, injury, and circumstances
            are starting points, not finishing lines. The Master Mind Motivator framework isn't theory -
            it's a systematic approach tested in the fire of real adversity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 p-6 rounded-lg">
              <Calendar className="text-white mx-auto mb-3" size={32} />
              <h3 className="text-white font-bold mb-2">Daily Systems</h3>
              <p className="text-orange-100">Consistent action over motivation</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Users className="text-white mx-auto mb-3" size={32} />
              <h3 className="text-white font-bold mb-2">Proven Methods</h3>
              <p className="text-orange-100">25+ years of documented results</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <MapPin className="text-white mx-auto mb-3" size={32} />
              <h3 className="text-white font-bold mb-2">Real Purpose</h3>
              <p className="text-orange-100">Empowering veteran and rural communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl text-slate-300 mb-8">
            The Master Mind Motivator framework isn't just my story - it's your roadmap to systematic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('book')}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Get The Book
            </button>
            <button
              onClick={() => onPageChange('contact')}
              className="border border-slate-600 hover:border-orange-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Speaking Inquiry
            </button>
          </div>
        </div>
      </section>
    </>
  );
}