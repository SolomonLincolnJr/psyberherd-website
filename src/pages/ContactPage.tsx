import { Mail, MessageCircle, Mic, Users, CheckCircle, Send, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export default function ContactPage({ onPageChange }: ContactPageProps) {
  const [activeForm, setActiveForm] = useState<'general' | 'speaking'>('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    organization: '',
    eventDate: '',
    eventType: '',
    audience: '',
    budget: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      organization: '',
      eventDate: '',
      eventType: '',
      audience: '',
      budget: ''
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to bring systematic excellence to your organization?
            Speaking to veteran organizations, corporate teams, and anyone who's been told their limitations are permanent.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="text-orange-400" size={20} />
              <span>Based in Kearneysville, WV</span>
            </div>
            <div className="flex items-center gap-2">
              <Mic className="text-orange-400" size={20} />
              <span>Speaking Nationwide</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-orange-400" size={20} />
              <span>info@psyberherd.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Selection */}
            <div>
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveForm('general')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                    activeForm === 'general'
                      ? 'bg-orange-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <MessageCircle size={18} />
                  General Inquiry
                </button>
                <button
                  onClick={() => setActiveForm('speaking')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                    activeForm === 'speaking'
                      ? 'bg-orange-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <Mic size={18} />
                  Speaking Request
                </button>
              </div>

              {submitted ? (
                <div className="bg-slate-900 p-8 rounded-lg border border-green-500/20">
                  <div className="text-center">
                    <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-300">
                      Thank you for reaching out. I'll get back to you within 24-48 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Common Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-400"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  {activeForm === 'speaking' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="organization" className="block text-sm font-semibold text-slate-300 mb-2">
                            Organization
                          </label>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-400"
                            placeholder="Company or Organization"
                          />
                        </div>
                        <div>
                          <label htmlFor="eventDate" className="block text-sm font-semibold text-slate-300 mb-2">
                            Event Date
                          </label>
                          <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-orange-400"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="eventType" className="block text-sm font-semibold text-slate-300 mb-2">
                            Event Type
                          </label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-orange-400"
                          >
                            <option value="">Select event type</option>
                            <option value="keynote">Keynote Presentation</option>
                            <option value="workshop">Workshop/Training</option>
                            <option value="panel">Panel Discussion</option>
                            <option value="conference">Conference</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="veteran">Veteran Organization</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="audience" className="block text-sm font-semibold text-slate-300 mb-2">
                            Audience Size
                          </label>
                          <select
                            id="audience"
                            name="audience"
                            value={formData.audience}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-orange-400"
                          >
                            <option value="">Select audience size</option>
                            <option value="small">Small (10-50)</option>
                            <option value="medium">Medium (50-200)</option>
                            <option value="large">Large (200-500)</option>
                            <option value="xlarge">Extra Large (500+)</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {activeForm === 'general' && (
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-400"
                        placeholder="What's this about?"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-400 resize-none"
                      placeholder={
                        activeForm === 'speaking'
                          ? 'Please describe your event, audience, and what specific topics you would like me to address. Include any relevant details about your organization challenges or goals.'
                          : 'Your message here...'
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Mic className="text-orange-400" size={24} />
                  Speaking Topics
                </h2>
                <div className="space-y-4 text-slate-300">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Mental Toughness & Resilience</h3>
                    <p className="text-sm">Building unbreakable resilience through systematic approaches, not temporary motivation.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Veteran Transition</h3>
                    <p className="text-sm">Practical strategies for military-to-civilian career transitions and finding post-service purpose.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Leadership Under Pressure</h3>
                    <p className="text-sm">Strategic leadership principles tested in military, corporate, and recovery environments.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Overcoming Catastrophic Setbacks</h3>
                    <p className="text-sm">The Master Mind Motivator framework for transforming adversity into unstoppable strength.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <MapPin className="text-orange-400" size={24} />
                  Speaking Availability
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-white">Based in:</strong> Kearneysville, West Virginia
                  </p>
                  <p>
                    <strong className="text-white">Travel:</strong> Available worldwide for the right opportunity
                  </p>
                  <p>
                    <strong className="text-white">Format:</strong> Keynotes, workshops, panels, corporate training
                  </p>
                  <p>
                    <strong className="text-white">Specializes in:</strong> Veteran organizations, corporate leadership teams,
                    academic institutions, and Appalachian communities
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Users className="text-orange-400" size={24} />
                  About Solomon
                </h2>
                <div className="space-y-3 text-slate-300">
                  <p>• US Army Veteran</p>
                  <p>• TBI Survivor & Recovery Expert</p>
                  <p>• ServiceNow Specialist & Innovation Catalyst</p>
                  <p>• Author of "The Master Mind Motivator" (2026)</p>
                  <p>• Founder of Psyberherd methodology</p>
                  <p>• Completed 10 marathons in 30 days</p>
                  <p>• 425+ consecutive days of systematic excellence</p>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Clock className="text-orange-400" size={24} />
                  Response Time
                </h2>
                <div className="space-y-3 text-slate-300">
                  <p>
                    <strong className="text-white">Speaking Inquiries:</strong> 24-48 hours
                  </p>
                  <p>
                    <strong className="text-white">General Questions:</strong> 48-72 hours
                  </p>
                  <p>
                    <strong className="text-white">Media Requests:</strong> Same day
                  </p>
                  <p className="text-sm text-slate-400 border-t border-slate-700 pt-3 mt-4">
                    For urgent requests, please mention "URGENT" in your subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Trusted by Organizations Worldwide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <blockquote className="text-lg text-slate-300 italic mb-4">
                "I had the privilege of working under Solomon Lincoln's leadership. Solomon blends strategic vision
                with hands-on expertise, fostering a collaborative and inclusive work culture."
              </blockquote>
              <footer className="text-slate-400">
                <strong className="text-white">Brian Redway</strong>, Real Estate Professional
              </footer>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <blockquote className="text-lg text-slate-300 italic mb-4">
                "I was impressed with his ability to navigate complex scenarios, consistently achieve targets
                and motivate the group around him. He was positive, collaborative, and goal-driven."
              </blockquote>
              <footer className="text-slate-400">
                <strong className="text-white">Brian Delman</strong>, Sales & Revenue Growth Leader
              </footer>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-slate-400 text-sm">People Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-slate-400 text-sm">Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">15</div>
              <div className="text-slate-400 text-sm">States Visited</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
              <div className="text-slate-400 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Bring the Master Mind Motivator framework to your team. Available for keynotes,
            workshops, and corporate training programs nationwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setActiveForm('speaking')}
              className="bg-white text-orange-600 font-bold px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-2"
            >
              <Mic size={18} />
              Book Speaking Engagement
            </button>
            <button
              onClick={() => onPageChange('book')}
              className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors flex items-center gap-2"
            >
              Get The Book
              <ArrowRight size={18} />
            </button>
          </div>

          <p className="text-orange-100 text-sm mt-6">
            "Your mind is more powerful than your circumstances, but mastery requires method, not just motivation."
          </p>
        </div>
      </section>
    </>
  );
}