'use client'

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-border shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Mesa
            </div>
            <div className="flex items-center gap-4">
              <button className="text-neutral-medium hover:text-neutral-dark font-medium text-sm transition-colors">
                How It Works
              </button>
              <button className="btn-primary text-sm">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 sm:px-8 lg:px-12 xl:px-16 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        {/* Animated Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-40 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-40 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200 mb-6 hover:scale-105 transition-transform duration-200 shadow-soft">
                <span className="text-accent-400 font-semibold text-sm">✨ 100% Free Forever</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-neutral-dark mb-6 leading-tight animate-fade-in-up-delayed">
                Stuck on homework?{' '}
                <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                  Get help instantly.
                </span>
              </h1>
              
              <p className="text-xl text-neutral-medium mb-8 leading-relaxed animate-fade-in-up-delayed-2">
                Connect with classmates who actually explain things—not just give answers. Chat or jump into a live session with a shared whiteboard. 
                <span className="font-semibold text-primary-400"> Completely free, no strings attached.</span>
              </p>

              {/* Stats - Enhanced */}
              <div className="flex gap-8 mb-8 animate-fade-in-up-delayed-2">
                <div className="group">
                  <div className="text-4xl sm:text-5xl font-bold text-neutral-dark group-hover:scale-110 transition-transform duration-200">10K+</div>
                  <div className="text-sm text-neutral-medium mt-1">Students helped</div>
                </div>
                <div className="group">
                  <div className="text-4xl sm:text-5xl font-bold text-neutral-dark group-hover:scale-110 transition-transform duration-200">2min</div>
                  <div className="text-sm text-neutral-medium mt-1">Avg response time</div>
                </div>
                <div className="group">
                  <div className="text-4xl sm:text-5xl font-bold text-accent-400 group-hover:scale-110 transition-transform duration-200">100%</div>
                  <div className="text-sm text-neutral-medium mt-1">Free forever</div>
                </div>
              </div>
              
              {/* Social Proof near CTA */}
              <div className="flex items-center gap-3 mb-6 animate-fade-in-up-delayed-2">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                </div>
                <span className="text-sm font-medium text-neutral-dark">4.9/5 from 2,000+ students</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delayed-2">
                <button className="btn-primary text-lg px-8 py-4 hover:scale-105 hover:shadow-lg transition-all duration-200">
                  Start For Free — It's Free
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="btn-secondary text-lg px-8 py-4 hover:scale-105 hover:shadow-md transition-all duration-200"
                >
                  See How It Works
                </button>
              </div>

              <p className="text-sm text-neutral-medium mt-4 animate-fade-in-up-delayed-2">
                No signup required to browse • Join thousands of students
              </p>
            </div>

            {/* Right: Visual */}
            <div className="relative animate-fade-in-up-delayed-2">
              <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-100 shadow-soft-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Mock chat interface */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3 animate-fade-in-up">
                    <div className="w-10 h-10 rounded-full bg-primary-400 flex items-center justify-center text-white font-bold shadow-md">
                      A
                    </div>
                    <div className="flex-1 bg-white rounded-2xl p-4 shadow-soft hover:shadow-md transition-shadow">
                      <p className="text-sm text-neutral-dark mb-2"><strong>Alex</strong> • 2 min ago</p>
                      <p className="text-body text-neutral-medium">Can someone help me understand derivatives? I'm stuck on this problem...</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 flex-row-reverse animate-fade-in-up-delayed">
                    <div className="w-10 h-10 rounded-full bg-secondary-400 flex items-center justify-center text-white font-bold shadow-md">
                      S
                    </div>
                    <div className="flex-1 bg-primary-400 rounded-2xl p-4 shadow-soft hover:shadow-md transition-shadow">
                      <p className="text-sm text-white mb-2"><strong>Sam</strong> • Just now</p>
                      <p className="text-body text-white">Sure! Let's break it down step by step. What part are you confused about?</p>
                    </div>
                  </div>
                </div>
                {/* Badge overlay */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-neutral-border hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-neutral-dark">Live help available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 px-6 sm:px-8 lg:px-12 xl:px-16 bg-neutral-light border-y border-neutral-border">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-medium">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 from 2,000+ students</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-neutral-border"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>Used by students at 500+ schools</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-neutral-border"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span>1,000+ questions answered daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-dark mb-4">
              How It Works
            </h2>
            <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
              Get help in three simple steps. No complicated setup, no waiting around.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative group">
              <div className="card hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary-200">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <div className="pt-8">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📝</div>
                  <h3 className="text-2xl font-heading font-semibold text-neutral-dark mb-3">Post your question</h3>
                  <p className="text-body text-neutral-medium leading-relaxed">
                    Share what you're working on and where you're stuck. Be specific so helpers can guide you step-by-step.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="card hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary-200">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-secondary-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <div className="pt-8">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <h3 className="text-2xl font-heading font-semibold text-neutral-dark mb-3">Choose your help style</h3>
                  <p className="text-body text-neutral-medium leading-relaxed">
                    Get step-by-step guidance in chat, or connect instantly with audio and a shared whiteboard for visual explanations.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="card hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-accent-200">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-accent-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <div className="pt-8">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⭐</div>
                  <h3 className="text-2xl font-heading font-semibold text-neutral-dark mb-3">Build your reputation</h3>
                  <p className="text-body text-neutral-medium leading-relaxed">
                    Helpers earn ratings, learners get clarity. Great explanations rise to the top and build a supportive community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Split Layout */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-white to-neutral-light">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-dark mb-4">
              Why Students Love Mesa
            </h2>
            <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
              Built for real learning, not just quick answers
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-6">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="text-3xl font-heading font-bold text-neutral-dark mb-4">Message Threads</h3>
                <p className="text-lg text-neutral-medium mb-6 leading-relaxed">
                  Get calm, step-by-step explanations. Learn the process, not just the answer. Take your time, ask follow-ups, and really understand.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span className="text-body text-neutral-medium">Asynchronous help—work at your own pace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span className="text-body text-neutral-medium">Step-by-step guidance, not just answers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span className="text-body text-neutral-medium">Perfect for homework and study sessions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 border border-primary-200">
                <div className="bg-white rounded-2xl p-6 shadow-soft-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-neutral-border">
                      <div className="w-10 h-10 rounded-full bg-primary-400"></div>
                      <div>
                        <div className="font-semibold text-neutral-dark">Helper</div>
                        <div className="text-sm text-neutral-medium">Typing...</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-primary-50 rounded-xl p-4">
                        <p className="text-sm text-neutral-dark">Let's start with the basics. What do you already know about derivatives?</p>
                      </div>
                      <div className="bg-white border border-neutral-border rounded-xl p-4">
                        <p className="text-sm text-neutral-dark">I know they're about rates of change...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary-100 mb-6">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="text-3xl font-heading font-bold text-neutral-dark mb-4">Live Audio + Whiteboard</h3>
                <p className="text-lg text-neutral-medium mb-6 leading-relaxed">
                  Learn visually together in real time. Perfect for math, science, diagrams, and complex concepts that need visual explanation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span className="text-body text-neutral-medium">Real-time collaboration with shared whiteboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span className="text-body text-neutral-medium">Audio calls for instant clarification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span className="text-body text-neutral-medium">Perfect for visual learners</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-12 border border-secondary-200">
                <div className="bg-white rounded-2xl p-6 shadow-soft-lg">
                  <div className="aspect-video bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎨</div>
                      <div className="text-sm font-semibold text-neutral-dark">Shared Whiteboard</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-neutral-medium">Live session active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-100 mb-6">
                  <span className="text-4xl">⭐</span>
                </div>
                <h3 className="text-3xl font-heading font-bold text-neutral-dark mb-4">Reputation System</h3>
                <p className="text-lg text-neutral-medium mb-6 leading-relaxed">
                  Helpful students rise to the top. Build your reputation by helping others learn and earn recognition in the community.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span className="text-body text-neutral-medium">Earn ratings for helpful explanations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span className="text-body text-neutral-medium">Build your profile and showcase your expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-400 mt-1">✓</span>
                    <span className="text-body text-neutral-medium">Get recognized for helping others</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl p-12 border border-accent-200">
                <div className="bg-white rounded-2xl p-6 shadow-soft-lg">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neutral-border">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400"></div>
                    <div className="flex-1">
                      <div className="font-bold text-neutral-dark text-lg">Alex M.</div>
                      <div className="text-sm text-neutral-medium">Top Helper • 247 helped</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent-400">4.9</div>
                      <div className="text-xs text-neutral-medium">rating</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-medium">Math</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-accent-400">⭐</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-medium">Science</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-accent-400">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="card bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 border-2 border-primary-200 text-center p-12">
            <div className="text-6xl mb-6">🎁</div>
            <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-4">
              Mesa will always be free.
            </h2>
            <p className="text-xl text-neutral-medium mb-6 max-w-2xl mx-auto leading-relaxed">
              Learning help should be accessible to everyone. No matter where you are or what your situation is, you deserve support.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-body text-neutral-medium">
              <div className="flex items-center gap-2">
                <span className="text-accent-400">✓</span>
                <span>No subscription</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-400">✓</span>
                <span>No paywalls</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-400">✓</span>
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-400">✓</span>
                <span>Free forever</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-neutral-light">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-dark mb-4">
              Loved by Students Everywhere
            </h2>
            <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
              Real stories from real students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center mr-4 text-white font-bold">
                  A
                </div>
                <div>
                  <div className="font-semibold text-neutral-dark">Alex</div>
                  <div className="text-sm text-neutral-medium">High School • Math</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-400">⭐</span>
                ))}
              </div>
              <p className="text-body text-neutral-medium leading-relaxed">
                "Mesa saved my grade. The live whiteboard made calculus finally make sense. I went from failing to acing my test!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="card hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500 flex items-center justify-center mr-4 text-white font-bold">
                  S
                </div>
                <div>
                  <div className="font-semibold text-neutral-dark">Sam</div>
                  <div className="text-sm text-neutral-medium">College • Helper</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-400">⭐</span>
                ))}
              </div>
              <p className="text-body text-neutral-medium leading-relaxed">
                "Helping others on Mesa is so rewarding. Explaining concepts helps me learn too, and I've built a great reputation!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="card hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center mr-4 text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-neutral-dark">Maya</div>
                  <div className="text-sm text-neutral-medium">Middle School • Science</div>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-400">⭐</span>
                ))}
              </div>
              <p className="text-body text-neutral-medium leading-relaxed">
                "I was too shy to ask my teacher. Mesa made it easy to get help without feeling embarrassed. Now I actually understand!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-primary-400 to-secondary-400">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            Ready to get unstuck?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students getting help right now. Start your first question—it's completely free.
          </p>
          <button className="bg-white text-primary-400 hover:bg-neutral-light px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
            Get Started Now — It's Free
          </button>
          <p className="text-white/80 text-sm mt-6">
            No credit card • No signup required • 100% free forever
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-8 lg:px-12 xl:px-16 border-t border-neutral-border bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-heading font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
                Mesa
              </div>
              <p className="text-sm text-neutral-medium">
                Free student help network. Get explanations, not just answers.
              </p>
            </div>
            <div>
              <div className="font-semibold text-neutral-dark mb-4">Product</div>
              <div className="space-y-2 text-sm text-neutral-medium">
                <a href="#" className="block hover:text-primary-400 transition-colors">How it works</a>
                <a href="#" className="block hover:text-primary-400 transition-colors">Features</a>
                <a href="#" className="block hover:text-primary-400 transition-colors">Pricing</a>
              </div>
            </div>
            <div>
              <div className="font-semibold text-neutral-dark mb-4">Company</div>
              <div className="space-y-2 text-sm text-neutral-medium">
                <a href="#" className="block hover:text-primary-400 transition-colors">About</a>
                <a href="#" className="block hover:text-primary-400 transition-colors">Blog</a>
                <a href="#" className="block hover:text-primary-400 transition-colors">Careers</a>
              </div>
            </div>
            <div>
              <div className="font-semibold text-neutral-dark mb-4">Legal</div>
              <div className="space-y-2 text-sm text-neutral-medium">
                <a href="#" className="block hover:text-primary-400 transition-colors">Privacy</a>
                <a href="#" className="block hover:text-primary-400 transition-colors">Terms</a>
                <a href="#" className="block hover:text-primary-400 transition-colors">Safety</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-border text-center text-sm text-neutral-medium">
            © 2024 Mesa. Built for students, by students. 100% free forever.
          </div>
        </div>
      </footer>
    </div>
  )
}
