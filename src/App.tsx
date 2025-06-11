import React, { useState, useEffect } from 'react';
import { Play, Star, Users, Trophy, Zap, Shield, Clock, Smartphone, Sun, Moon } from 'lucide-react';

const games = [
  {
    id: 'classic-2048',
    title: 'Classic 2048',
    description: 'The original addictive number puzzle game',
    iframe: '<iframe src="https://www.crazygames.com/embed/2048" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
  },
  {
    id: 'get-1000',
    title: 'Get 1000',
    description: 'Challenge yourself to reach 1000 in this twist on 2048',
    iframe: '<iframe src="https://www.crazygames.com/embed/get-1000" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
  },
  {
    id: 'drop-merge',
    title: 'Drop Merge Numbers',
    description: 'Drop and merge numbers in this exciting physics-based variant',
    iframe: '<iframe src="https://www.crazygames.com/embed/drop-merge-the-numbers" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
  },
  {
    id: 'qube-2048',
    title: 'Qube 2048 Elf',
    description: 'A magical 3D take on the classic 2048 formula',
    iframe: '<iframe src="https://www.crazygames.com/embed/qube-2048-elf" style="width: 100%; height: 100%;" frameborder="0" allow="gamepad *;"></iframe>'
  }
];

function App() {
  const [activeGame, setActiveGame] = useState(games[0]);
  const [isGameFullscreen, setIsGameFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Save theme preference and apply to document
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-morandi-cream dark:bg-morandi-charcoal transition-colors duration-300">
      {/* Header */}
      <header className="bg-morandi-cream/95 dark:bg-morandi-charcoal/95 backdrop-blur-md border-b border-morandi-sage/20 dark:border-morandi-lavender/20 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-morandi-sage to-morandi-dusty-blue dark:from-morandi-lavender dark:to-morandi-mauve rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">2048</span>
              </div>
              <span className="text-xl font-semibold text-morandi-charcoal dark:text-morandi-cream transition-colors duration-300">2048 Space</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#games" className="text-morandi-slate dark:text-morandi-mist hover:text-morandi-sage dark:hover:text-morandi-lavender transition-colors duration-200">Games</a>
              <a href="#features" className="text-morandi-slate dark:text-morandi-mist hover:text-morandi-sage dark:hover:text-morandi-lavender transition-colors duration-200">Features</a>
              <a href="#pricing" className="text-morandi-slate dark:text-morandi-mist hover:text-morandi-sage dark:hover:text-morandi-lavender transition-colors duration-200">Pricing</a>
              <a href="#faq" className="text-morandi-slate dark:text-morandi-mist hover:text-morandi-sage dark:hover:text-morandi-lavender transition-colors duration-200">FAQ</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-morandi-sage/10 dark:bg-morandi-lavender/10 hover:bg-morandi-sage/20 dark:hover:bg-morandi-lavender/20 transition-all duration-200 border border-morandi-sage/20 dark:border-morandi-lavender/20"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-morandi-sage dark:text-morandi-lavender" />
                ) : (
                  <Moon className="w-5 h-5 text-morandi-sage dark:text-morandi-lavender" />
                )}
              </button>
              <button className="bg-gradient-to-r from-morandi-sage to-morandi-dusty-blue dark:from-morandi-lavender dark:to-morandi-mauve text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-morandi-cream via-morandi-pearl to-morandi-sage/10 dark:from-morandi-charcoal dark:via-morandi-slate/20 dark:to-morandi-lavender/10 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-morandi-charcoal dark:text-morandi-cream mb-6 transition-colors duration-300">
              All 2048 Online Games
            </h1>
            <p className="text-xl text-morandi-slate dark:text-morandi-mist mb-8 max-w-3xl mx-auto transition-colors duration-300">
              Experience the ultimate collection of 2048 puzzle games. Play classic 2048 and exciting variants completely free in your browser. No downloads, no registration required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-morandi-sage to-morandi-dusty-blue dark:from-morandi-lavender dark:to-morandi-mauve text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Start Playing Now
              </button>
              <button className="border-2 border-morandi-sage dark:border-morandi-lavender text-morandi-sage dark:text-morandi-lavender px-8 py-4 rounded-xl hover:bg-morandi-sage dark:hover:bg-morandi-lavender hover:text-white dark:hover:text-morandi-charcoal transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 bg-morandi-pearl dark:bg-morandi-slate/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-morandi-charcoal dark:text-morandi-cream mb-4 transition-colors duration-300">
              Choose Your 2048 Adventure
            </h2>
            <p className="text-xl text-morandi-slate dark:text-morandi-mist max-w-2xl mx-auto transition-colors duration-300">
              Select from our curated collection of the best 2048 games, each offering unique gameplay mechanics and challenges.
            </p>
          </div>

          {/* Game Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setActiveGame(game)}
                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                  activeGame.id === game.id
                    ? 'border-morandi-sage dark:border-morandi-lavender bg-morandi-sage/10 dark:bg-morandi-lavender/10 shadow-lg'
                    : 'border-morandi-sage/20 dark:border-morandi-lavender/20 hover:border-morandi-sage/40 dark:hover:border-morandi-lavender/40 hover:shadow-md bg-morandi-cream dark:bg-morandi-charcoal'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-morandi-sage to-morandi-dusty-blue dark:from-morandi-lavender dark:to-morandi-mauve rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-morandi-charcoal dark:text-morandi-cream mb-2 transition-colors duration-300">{game.title}</h3>
                <p className="text-morandi-slate dark:text-morandi-mist text-sm transition-colors duration-300">{game.description}</p>
              </button>
            ))}
          </div>

          {/* Game Player */}
          <div className="bg-morandi-charcoal dark:bg-morandi-charcoal rounded-2xl p-2 shadow-2xl">
            <div className="bg-morandi-cream dark:bg-morandi-slate/20 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-morandi-sage/20 dark:border-morandi-lavender/20">
                <div>
                  <h3 className="text-lg font-semibold text-morandi-charcoal dark:text-morandi-cream transition-colors duration-300">{activeGame.title}</h3>
                  <p className="text-morandi-slate dark:text-morandi-mist text-sm transition-colors duration-300">{activeGame.description}</p>
                </div>
                <button
                  onClick={() => setIsGameFullscreen(!isGameFullscreen)}
                  className="bg-gradient-to-r from-morandi-sage to-morandi-dusty-blue dark:from-morandi-lavender dark:to-morandi-mauve text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  {isGameFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                </button>
              </div>
              <div className={`transition-all duration-300 ${isGameFullscreen ? 'h-screen' : 'h-96 md:h-[600px]'}`}>
                <div 
                  dangerouslySetInnerHTML={{ __html: activeGame.iframe }}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-morandi-cream dark:bg-morandi-charcoal transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-morandi-charcoal dark:text-morandi-cream mb-4 transition-colors duration-300">
              Why Choose 2048 Space?
            </h2>
            <p className="text-xl text-morandi-slate dark:text-morandi-mist max-w-2xl mx-auto transition-colors duration-300">
              We've crafted the ultimate 2048 gaming experience with features that matter most to players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lightning Fast',
                description: 'Instant loading with no delays. Jump into your favorite 2048 variant immediately.'
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Mobile Optimized',
                description: 'Perfect touch controls and responsive design for seamless mobile gaming.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Safe & Secure',
                description: 'No downloads, no personal information required. Play safely in your browser.'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: '24/7 Available',
                description: 'Access your favorite 2048 games anytime, anywhere with our reliable platform.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Community Driven',
                description: 'Join thousands of players enjoying the best 2048 gaming experience online.'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Premium Quality',
                description: 'Curated selection of the highest quality 2048 games with smooth gameplay.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-morandi-pearl dark:bg-morandi-slate/20 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-morandi-sage/10 dark:border-morandi-lavender/10">
                <div className="w-16 h-16 bg-gradient-to-br from-morandi-sage/20 to-morandi-dusty-blue/20 dark:from-morandi-lavender/20 dark:to-morandi-mauve/20 rounded-2xl flex items-center justify-center mb-6 text-morandi-sage dark:text-morandi-lavender">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-morandi-charcoal dark:text-morandi-cream mb-4 transition-colors duration-300">{feature.title}</h3>
                <p className="text-morandi-slate dark:text-morandi-mist transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-morandi-pearl dark:bg-morandi-slate/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-morandi-charcoal dark:text-morandi-cream mb-4 transition-colors duration-300">
              How It Works
            </h2>
            <p className="text-xl text-morandi-slate dark:text-morandi-mist max-w-2xl mx-auto transition-colors duration-300">
              Getting started with 2048 Space is incredibly simple. Follow these three easy steps to begin your puzzle adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose Your Game',
                description: 'Browse our collection of 2048 variants and select the one that catches your interest.'
              },
              {
                step: '02',
                title: 'Start Playing',
                description: 'Click to begin immediately. No registration, downloads, or complex setup required.'
              },
              {
                step: '03',
                title: 'Master the Challenge',
                description: 'Combine tiles, reach higher numbers, and compete for the highest scores possible.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-morandi-sage to-morandi-dusty-blue dark:from-morandi-lavender dark:to-morandi-mauve rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-morandi-charcoal dark:text-morandi-cream mb-4 transition-colors duration-300">{step.title}</h3>
                <p className="text-morandi-slate dark:text-morandi-mist transition-colors duration-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-morandi-cream dark:bg-morandi-charcoal transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-morandi-charcoal dark:text-morandi-cream mb-4 transition-colors duration-300">
              What Players Say
            </h2>
            <p className="text-xl text-morandi-slate dark:text-morandi-mist max-w-2xl mx-auto transition-colors duration-300">
              Join thousands of satisfied players who have made 2048 Space their go-to puzzle gaming destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Puzzle Enthusiast',
                content: 'The best collection of 2048 games I\'ve found online. The interface is clean and the games load instantly.',
                rating: 5
              },
              {
                name: 'Mike Chen',
                role: 'Mobile Gamer',
                content: 'Perfect for mobile gaming during commutes. The touch controls are responsive and the games are addictive.',
                rating: 5
              },
              {
                name: 'Emma Davis',
                role: 'Casual Player',
                content: 'I love how I can switch between different 2048 variants. Each one offers a unique challenge that keeps me coming back.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-morandi-pearl dark:bg-morandi-slate/20 p-8 rounded-2xl shadow-sm border border-morandi-sage/10 dark:border-morandi-lavender/10 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-morandi-sage dark:text-morandi-lavender fill-current" />
                  ))}
                </div>
                <p className="text-morandi-slate dark:text-morandi-mist mb-6 transition-colors duration-300">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-morandi-charcoal dark:text-morandi-cream transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-morandi-slate/70 dark:text-morandi-mist/70 text-sm transition-colors duration-300">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-morandi-pearl dark:bg-morandi-slate/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-morandi-charcoal dark:text-morandi-cream mb-4 transition-colors duration-300">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-morandi-slate dark:text-morandi-mist max-w-2xl mx-auto transition-colors duration-300">
              Enjoy unlimited access to all our 2048 games with our straightforward pricing options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'forever',
                features: [
                  'Access to all 4 games',
                  'Mobile responsive design',
                  'No time limits',
                  'Basic support'
                ],
                popular: false,
                cta: 'Start Playing Free'
              },
              {
                name: 'Premium',
                price: '$4.99',
                period: 'per month',
                features: [
                  'Everything in Free',
                  'Ad-free experience',
                  'Priority support',
                  'Exclusive game updates',
                  'Advanced statistics'
                ],
                popular: true,
                cta: 'Go Premium'
              },
              {
                name: 'Lifetime',
                price: '$29.99',
                period: 'one time',
                features: [
                  'Everything in Premium',
                  'Lifetime access',
                  'Future game additions',
                  'VIP support',
                  'Early access to new features'
                ],
                popular: false,
                cta: 'Get Lifetime Access'
              }
            ].map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-morandi-sage dark:border-morandi-lavender bg-morandi-sage/10 dark:bg-morandi-lavender/10 shadow-lg' 
                  : 'border-morandi-sage/20 dark:border-morandi-lavender/20 bg-morandi-cream dark:bg-morandi-charcoal'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-morandi-sage to-morandi-dusty-blue dark:from-morandi-lavender dark:to-morandi-mauve text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-morandi-charcoal dark:text-morandi-cream mb-2 transition-colors duration-300">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-morandi-charcoal dark:text-morandi-cream transition-colors duration-300">{plan.price}</span>
                    <span className="text-morandi-slate dark:text-morandi-mist ml-2 transition-colors duration-300">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-morandi-sage dark:bg-morandi-lavender rounded-full flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-morandi-slate dark:text-morandi-mist transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-morandi-sage to-morandi-dusty-blue dark:from-morandi-lavender dark:to-morandi-mauve text-white hover:shadow-lg'
                    : 'border-2 border-morandi-sage dark:border-morandi-lavender text-morandi-sage dark:text-morandi-lavender hover:bg-morandi-sage dark:hover:bg-morandi-lavender hover:text-white dark:hover:text-morandi-charcoal'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-morandi-cream dark:bg-morandi-charcoal transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-morandi-charcoal dark:text-morandi-cream mb-4 transition-colors duration-300">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-morandi-slate dark:text-morandi-mist transition-colors duration-300">
              Everything you need to know about playing 2048 games on our platform.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'Are the games really free to play?',
                answer: 'Yes! All our 2048 games are completely free to play. You can enjoy unlimited gaming sessions without any cost or registration requirements.'
              },
              {
                question: 'Do I need to download anything?',
                answer: 'No downloads required! All games run directly in your web browser. Simply visit our website and start playing immediately.'
              },
              {
                question: 'Are the games mobile-friendly?',
                answer: 'Absolutely! Our games are fully optimized for mobile devices with responsive touch controls and adaptive layouts that work perfectly on smartphones and tablets.'
              },
              {
                question: 'Can I play offline?',
                answer: 'The games require an internet connection to load initially, but once loaded, most games can continue running even with a poor connection.'
              },
              {
                question: 'Are my game scores saved?',
                answer: 'Game progress and scores are saved locally in your browser. For cloud saving and cross-device sync, consider upgrading to our Premium plan.'
              },
              {
                question: 'What makes these 2048 games different?',
                answer: 'We\'ve curated the best 2048 variants available, each offering unique gameplay mechanics while maintaining the addictive puzzle elements that make 2048 so popular.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-morandi-pearl dark:bg-morandi-slate/20 p-8 rounded-2xl shadow-sm border border-morandi-sage/10 dark:border-morandi-lavender/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-morandi-charcoal dark:text-morandi-cream mb-4 transition-colors duration-300">{faq.question}</h3>
                <p className="text-morandi-slate dark:text-morandi-mist leading-relaxed transition-colors duration-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-morandi-charcoal dark:bg-morandi-charcoal text-morandi-cream py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-morandi-sage to-morandi-dusty-blue dark:from-morandi-lavender dark:to-morandi-mauve rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">2048</span>
                </div>
                <span className="text-2xl font-semibold text-morandi-cream">2048 Space</span>
              </div>
              <p className="text-morandi-mist mb-6 max-w-md">
                The ultimate destination for 2048 puzzle games. Play the best collection of number puzzle games online, completely free.
              </p>
              <div className="text-sm text-morandi-mist/70">
                © 2024 2048 Space. All rights reserved.
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-morandi-cream">Games</h4>
              <ul className="space-y-3 text-morandi-mist">
                <li><a href="#" className="hover:text-morandi-lavender transition-colors duration-200">Classic 2048</a></li>
                <li><a href="#" className="hover:text-morandi-lavender transition-colors duration-200">Get 1000</a></li>
                <li><a href="#" className="hover:text-morandi-lavender transition-colors duration-200">Drop Merge Numbers</a></li>
                <li><a href="#" className="hover:text-morandi-lavender transition-colors duration-200">Qube 2048 Elf</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-morandi-cream">Company</h4>
              <ul className="space-y-3 text-morandi-mist">
                <li><a href="#" className="hover:text-morandi-lavender transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-morandi-lavender transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-morandi-lavender transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="hover:text-morandi-lavender transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-morandi-slate/30 mt-12 pt-8 text-center text-morandi-mist">
            <p>Made with ❤️ for puzzle game enthusiasts worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;