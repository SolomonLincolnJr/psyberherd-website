import { Search, Calendar, Clock, User, ArrowRight, Target, Brain, Shield } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Articles' },
    { key: 'mental-toughness', label: 'Mental Toughness' },
    { key: 'veteran-transition', label: 'Veteran Transition' },
    { key: 'leadership', label: 'Leadership' },
    { key: 'systems', label: 'Systems & Habits' },
  ];

  const articles = [
    {
      id: 1,
      title: "The Power of 425 Consecutive Days: What My Fitness Streak Taught Me About Professional Success",
      excerpt: "Looking at my Apple Watch, one number jumped out: 425x – that's 425 times I've hit my daily activity goal. This wasn't about 425 perfect days. It was about 425 ordinary days where I chose to show up.",
      category: "systems",
      readTime: "5 min read",
      date: "2024-03-15",
      featured: true
    },
    {
      id: 2,
      title: "733,997 Steps in June: Building Life Systems, Not Comeback Stories",
      excerpt: "Every single day completed. This wasn't a comeback story - this is a life system. After being crushed by an 18-wheeler and surviving TBI, I developed a method for sustained excellence when your body and mind want to quit.",
      category: "mental-toughness",
      readTime: "7 min read",
      date: "2024-03-10",
      featured: true
    },
    {
      id: 3,
      title: "From ServiceNow RiseUp to Strategic Innovation: Bridging Military Discipline with Tech Excellence",
      excerpt: "Completing the ServiceNow RiseUp program while pursuing Associate-level certifications taught me that systematic excellence transfers across domains - from recovery to technology implementation.",
      category: "veteran-transition",
      readTime: "6 min read",
      date: "2024-03-05",
      featured: false
    },
    {
      id: 4,
      title: "Expectancy Theory in Action: Why Motivation Fails and Systems Succeed",
      excerpt: "Victor Vroom's Expectancy Theory shows motivation relies on three beliefs: Expectancy, Instrumentality, and Valence. When all three collapsed for me during a major project, I discovered the game-changing difference leadership makes.",
      category: "leadership",
      readTime: "8 min read",
      date: "2024-02-28",
      featured: false
    },
    {
      id: 5,
      title: "The Master Mind Motivator Framework: 25 Years of Documented Transformation",
      excerpt: "Not motivation. Methodology. The Master Mind Motivator framework is built on consistent action when it matters most - a systematic approach tested in the fire of real adversity.",
      category: "mental-toughness",
      readTime: "10 min read",
      date: "2024-02-20",
      featured: false
    },
    {
      id: 6,
      title: "Celebrating Small Victories: Why 5,000 Daily Steps Matters More Than You Think",
      excerpt: "Research consistently shows that even modest increases in daily activity can yield significant health benefits. Moving from a sedentary lifestyle to 5,000 daily steps represents meaningful progress.",
      category: "systems",
      readTime: "4 min read",
      date: "2024-02-15",
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Insights & Strategy
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Real-world applications of the Master Mind Motivator framework.
            Systems-based thinking for sustained excellence in leadership, recovery, and life.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-orange-400"
            />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Articles</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <article key={article.id} className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden hover:border-orange-400 transition-colors">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
                      FEATURED
                    </span>
                    <span className="text-slate-400 text-sm">{article.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-slate-400 text-sm">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>Solomon Lincoln</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1">
                      Read Article
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-orange-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:text-orange-400 hover:bg-slate-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {selectedCategory === 'all' ? 'All Articles' :
             categories.find(cat => cat.key === selectedCategory)?.label}
          </h2>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400 text-xl">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden hover:border-orange-400 transition-colors group">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {article.category === 'mental-toughness' && <Brain className="text-orange-400" size={20} />}
                      {article.category === 'veteran-transition' && <Shield className="text-orange-400" size={20} />}
                      {article.category === 'leadership' && <Target className="text-orange-400" size={20} />}
                      {article.category === 'systems' && <Target className="text-orange-400" size={20} />}
                      <span className="text-orange-400 text-sm font-semibold capitalize">
                        {article.category.replace('-', ' ')}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-orange-400 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                      {article.excerpt.substring(0, 120)}...
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-slate-500 text-xs">
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <button className="text-orange-400 hover:text-orange-300 text-sm font-semibold flex items-center gap-1">
                        Read More
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get the latest insights on mental toughness, systems thinking, and leadership
            delivered directly to your inbox. No fluff, just actionable strategies.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-orange-200 focus:outline-none focus:border-white"
              />
              <button className="bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <p className="text-orange-100 text-sm mt-4">
            Join 1,000+ readers getting weekly insights on systematic excellence
          </p>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Topics We Cover</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mental Toughness</h3>
              <p className="text-slate-400 text-sm">
                Building unbreakable resilience through systematic approaches, not temporary motivation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Veteran Transition</h3>
              <p className="text-slate-400 text-sm">
                Practical guidance for military-to-civilian transitions and post-service purpose
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Leadership</h3>
              <p className="text-slate-400 text-sm">
                Strategic leadership principles tested in military, corporate, and recovery environments
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Systems & Habits</h3>
              <p className="text-slate-400 text-sm">
                Daily protocols and environment design for automatic progress and sustained excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Systematic Excellence?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            These articles are just the beginning. Get the complete Master Mind Motivator framework
            and start building your own systems for sustained high performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Get The Book
            </Link>
            <Link
              to="/contact"
              className="border border-slate-600 hover:border-orange-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Speaking Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}