import { useState } from 'react'
import {
  Zap,
  Phone,
  MapPin,
  Clock,
  Star,
  AlertCircle,
  ChevronDown,
  Menu,
  X,
  Wrench,
  Home,
  Briefcase,
  Shield,
  CheckCircle,
  MessageSquare,
  Award,
  CheckCircle2
} from 'lucide-react'
import heroImg from './assets/hero.webp'
import image2 from './assets/image2.webp'
import image3 from './assets/image3.webp'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isEmergency, setIsEmergency] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    postcode: '',
    mobile: '',
    service: '',
    details: '',
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formData.fullName && formData.mobile && formData.service) {
      setFormSubmitted(true)
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({ fullName: '', postcode: '', mobile: '', service: '', details: '' })
      }, 6000)
    }
  }

  const faqItems = [
    {
      question: 'How fast can an emergency electrician arrive in Manchester?',
      answer:
        'Our average response time is 45 minutes across Greater Manchester. For emergencies, we dispatch the nearest available engineer immediately upon your call. Call 0161 700 9234 and expect a technician within 60 minutes in most cases.',
    },
    {
      question: 'Do you charge a call-out fee if the issue cannot be fixed?',
      answer:
        "We charge an upfront diagnostic fee of £85 for the first hour of emergency fault diagnosis. If you proceed with the suggested repair work, this fee is deducted from your final invoice. We maintain total transparency with zero surprise costs.",
    },
    {
      question: 'Are your electricians NICEIC certified?',
      answer:
        'Yes. All Apex Electrical technicians are fully certified NICEIC Approved Contractors, holding full City & Guilds Level 3 qualifications and carrying £5M public liability insurance.',
    },
    {
      question: 'Which areas of Greater Manchester do you cover?',
      answer:
        'We cover all M postcodes including Manchester City Centre, Salford, Stockport, Trafford, Altrincham, Didsbury, Chorlton, Sale, Bolton, and Oldham with no travel surcharges.',
    },
  ]

  const services = [
    {
      icon: AlertCircle,
      title: '24/7 Emergency Fault Finding & Tripping Breakers',
      description: 'Immediate diagnostic and safe restoration for domestic power outages, burnt sockets, and tripping safety switches.',
      price: 'From £85',
      action: 'Emergency Call',
    },
    {
      icon: Zap,
      title: 'Consumer Unit (Fuse Board) Upgrades',
      description: 'Modern 18th Edition metal consumer units with SPD (Surge Protection) and RCBOs for superior domestic safety.',
      price: 'From £450',
      action: 'Get Quote',
    },
    {
      icon: Wrench,
      title: 'EV Home & Workplace Charger Installation',
      description: 'Approved OZEV installers for Tesla, Hypervolt, and Pod Point chargers with full DNO notification handled.',
      price: 'From £395',
      action: 'Get Quote',
    },
    {
      icon: Home,
      title: 'Full & Partial Domestic Rewiring',
      description: 'Complete home rewiring with minimal disruption, building regulations sign-off, and 10-year guarantees.',
      price: 'From £2,500',
      action: 'Get Quote',
    },
    {
      icon: Shield,
      title: 'Landlord EICR Safety Testing & Certificates',
      description: 'Mandatory 5-year Electrical Installation Condition Reports for Manchester landlords with fast digital certificate delivery.',
      price: 'From £140',
      action: 'Book Test',
    },
    {
      icon: Briefcase,
      title: 'Commercial Fit-Outs & Maintenance',
      description: 'Emergency commercial lighting, three-phase power, retail store fit-outs, and planned electrical servicing.',
      price: 'From £1,200',
      action: 'Consult',
    },
  ]

  const reviews = [
    {
      name: 'Sarah Mitchell',
      area: 'Didsbury, Manchester',
      rating: 5,
      text: 'Our kitchen circuit kept tripping on a Sunday night. Apex arrived in 40 minutes and replaced a blown RCD breaker. Fast, friendly, and charged exactly what they quoted.',
    },
    {
      name: 'James Powell',
      area: 'Altrincham',
      rating: 5,
      text: 'Getting our rental property EICR certified was completely hassle-free. Detailed report sent to my email the next morning. Top-tier Manchester electricians.',
    },
    {
      name: 'Emma Davies',
      area: 'Salford Quays, Manchester',
      rating: 5,
      text: 'Installed our home EV wallbox. Very clean wiring and took the time to show us how the app works. Extremely professional team.',
    },
  ]

  return (
    <div className="bg-slate-950 text-white font-sans min-h-screen">
      {/* SECTION 1: TOP ANNOUNCEMENT BAR */}
      <header>
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 py-2.5 px-4 text-center font-bold text-xs sm:text-sm md:text-base">
          ⚡ 24/7 Emergency Dispatch Across Greater Manchester | 45-Min Average Response |{' '}
          <a href="tel:01617009234" className="underline hover:text-slate-800">
            Call 0161 700 9234
          </a>
        </div>

        {/* SECTION 2: NAVBAR */}
        <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40" aria-label="Main Navigation">
          <div className="max-w-7xl mx-auto px-4 py-3.5 flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2" aria-label="Apex Electrical Home">
              <div className="bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">APEX</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center font-medium text-sm">
              <a href="#services" className="text-slate-300 hover:text-amber-400 transition">Services</a>
              <a href="#about" className="text-slate-300 hover:text-amber-400 transition">Standards</a>
              <a href="#pricing" className="text-slate-300 hover:text-amber-400 transition">Pricing</a>
              <a href="#reviews" className="text-slate-300 hover:text-amber-400 transition">Reviews</a>
              <a href="#quote" className="text-slate-300 hover:text-amber-400 transition">Emergency</a>
              <a href="#faq" className="text-slate-300 hover:text-amber-400 transition">FAQ</a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-lg font-bold text-sm transition shadow-lg shadow-amber-500/20"
              >
                Get Fast Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-amber-400 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-5 flex flex-col gap-4 font-medium text-base">
              <a href="#services" className="text-slate-200 hover:text-amber-400" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="text-slate-200 hover:text-amber-400" onClick={() => setMobileMenuOpen(false)}>Standards</a>
              <a href="#pricing" className="text-slate-200 hover:text-amber-400" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#reviews" className="text-slate-200 hover:text-amber-400" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#quote" className="text-slate-200 hover:text-amber-400" onClick={() => setMobileMenuOpen(false)}>Emergency</a>
              <a href="#faq" className="text-slate-200 hover:text-amber-400" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a
                href="tel:01617009234"
                className="bg-amber-500 text-slate-950 font-bold text-center py-3 rounded-lg mt-2 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call 0161 700 9234
              </a>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* SECTION 3: HERO SECTION WITH HERO.WEBP */}
        <section className="bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 px-4 py-12 md:py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Engineers On Call Across Greater Manchester
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Manchester's Certified 24/7 Emergency Electricians
              </h1>

              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
                From sudden power outages and tripping consumer units to fast EV installations. NICEIC approved, fully insured engineers at your door in under 60 minutes.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:01617009234"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-xl font-bold text-base transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25"
                  aria-label="Call emergency electrician dispatch directly"
                >
                  <Phone className="w-5 h-5" />
                  Call Emergency Dispatch
                </a>
                <button
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-slate-800/80 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-base transition border border-slate-700 hover:border-amber-400"
                >
                  Request Fixed-Price Quote
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl text-center">
                  <div className="text-xs sm:text-sm font-bold text-amber-400">✓ NICEIC Approved</div>
                  <div className="text-xs text-slate-400">Contractor</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl text-center">
                  <div className="text-xs sm:text-sm font-bold text-amber-400">✓ City & Guilds</div>
                  <div className="text-xs text-slate-400">Level 3 Certified</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl text-center">
                  <div className="text-xs sm:text-sm font-bold text-amber-400">5.0 ★ Google</div>
                  <div className="text-xs text-slate-400">142 Reviews</div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl text-center">
                  <div className="text-xs sm:text-sm font-bold text-amber-400">£5M Liability</div>
                  <div className="text-xs text-slate-400">Full Insurance</div>
                </div>
              </div>
            </div>

            {/* Right Image Container (Uses hero.webp with SEO Alt Text) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                <img
                  src={heroImg}
                  alt="Certified emergency electrician in Manchester inspecting electrical panel and circuit wiring"
                  loading="eager"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Rapid Dispatch Status</p>
                      <p className="text-sm font-bold text-white">Salford & Central Manchester</p>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-full font-bold">
                      Available Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: MOBILE STICKY BOTTOM BAR */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-slate-950/90 backdrop-blur-lg border-t border-slate-800 z-50">
          <a
            href="tel:01617009234"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 py-3.5 px-4 rounded-xl font-bold text-sm text-center transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30"
            aria-label="Tap to call emergency electrician"
          >
            <Phone className="w-5 h-5" />
            Tap to Call Emergency Electrician (0161 700 9234)
          </a>
        </div>

        {/* SECTION 5: SERVICES GRID */}
        <section id="services" className="bg-slate-950 px-4 py-16 md:py-24 border-t border-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-white">Our Services</h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive domestic and commercial electrical solutions across Greater Manchester
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={idx}
                    className="bg-slate-900 hover:bg-slate-800/80 transition border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <span className="text-xs sm:text-sm font-extrabold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                          {service.price}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                      <p className="text-slate-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                    </div>
                    <button
                      onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 py-2.5 rounded-xl font-bold text-sm transition"
                    >
                      {service.action}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5.5: WORKMANSHIP STANDARDS & IMAGE 2 INTEGRATION */}
        <section id="about" className="bg-slate-900/40 px-4 py-16 md:py-20 border-t border-slate-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image 2 Container */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                <img
                  src={image2}
                  alt="NICEIC certified Manchester electrician conducting electrical safety diagnostics and consumer board inspection"
                  loading="lazy"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-amber-500 text-slate-950 px-4 py-2 rounded-lg font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <Award className="w-4 h-4" /> 100% Part P & 18th Edition Compliant
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                Manchester Trade Standards
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                No Guesswork. Certified Safety by Trained Engineers.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Electrical faults are serious hazards. At Apex Electrical, every call-out is attended by a City & Guilds qualified technician carrying calibrated diagnostic multimeters, replacement RCD breakers, and compliant metal consumer units on board.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-200">
                    <strong className="text-white">Fully stocked emergency vans:</strong> 92% of domestic faults diagnosed and repaired on the first visit.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-200">
                    <strong className="text-white">Digital sign-off certificates:</strong> Instant email delivery of electrical safety documentation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-200">
                    <strong className="text-white">£5,000,000 indemnity protection:</strong> Total peace of mind for private homeowners and commercial landlords.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: TRANSPARENT PRICING PREVIEW */}
        <section id="pricing" className="bg-slate-900/60 px-4 py-16 md:py-24 border-t border-slate-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-white">Fixed-Price Guarantee</h2>
            <p className="text-center text-slate-400 mb-12 text-sm sm:text-base">
              Clear, transparent UK trade pricing with zero hidden surcharges
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 border-2 border-amber-500/80 rounded-2xl p-6 relative">
                <span className="absolute -top-3 right-6 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase">
                  Emergency Priority
                </span>
                <h3 className="text-lg font-bold text-amber-400 mb-1">Emergency Callout (1st Hour Diagnosis)</h3>
                <p className="text-3xl font-black text-white mb-3">From £85</p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  First-hour diagnostic fee included. Deducted from your final invoice if you proceed with repair work.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-1">Landlord EICR Inspection</h3>
                <p className="text-3xl font-black text-amber-400 mb-3">From £140</p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Full 5-year electrical safety certificate for residential landlords.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-1">Consumer Unit Replacement</h3>
                <p className="text-3xl font-black text-amber-400 mb-3">From £450</p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Full 18th Edition dual RCD metal board replacement with Part P certification.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-1">Home EV Charger Installation</h3>
                <p className="text-3xl font-black text-amber-400 mb-3">From £395</p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Smart 7kW domestic tethered/untethered EV chargers with electrical safety sign-off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: CUSTOMER REVIEWS */}
        <section id="reviews" className="bg-slate-950 px-4 py-16 md:py-24 border-t border-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-white">
              Trusted Across Greater Manchester
            </h2>
            <p className="text-center text-slate-400 mb-12 text-sm sm:text-base">Real verified reviews from local home and business owners</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4 gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic text-sm leading-relaxed">"{review.text}"</p>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{review.name}</p>
                    <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {review.area}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: INTERACTIVE EMERGENCY QUOTE FORM WITH IMAGE 3 INTEGRATION */}
        <section id="quote" className="bg-slate-900/80 px-4 py-16 md:py-24 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">Get a Fast Quote Today</h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Submit your request below. An on-call engineer will review and call you within 15 minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Image 3 & Emergency Reassurance Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                  <img
                    src={image3}
                    alt="Commercial and residential electrical contractor testing high-voltage circuitry in Manchester"
                    loading="lazy"
                    className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                  <div className="p-6 bg-slate-900">
                    <h3 className="font-bold text-white text-lg mb-2">Manchester Emergency Rapid Response</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      Power tripping, smelling burning plastic near sockets, or consumer unit sparking? Do not attempt DIY repairs. Turn off your main isolator switch and call our dispatch number directly.
                    </p>
                    <a
                      href="tel:01617009234"
                      className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm hover:underline"
                    >
                      <Phone className="w-4 h-4" /> Immediate Callout: 0161 700 9234
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: The Quote Form */}
              <div className="lg:col-span-7">
                {formSubmitted ? (
                  <div className="bg-emerald-950/60 border border-emerald-500 rounded-2xl p-8 text-center animate-fadeIn">
                    <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                    <p className="text-slate-300 text-sm">
                      Our Manchester dispatch engineer has been notified and will call your mobile within 15 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5">
                    <div>
                      <label className="block text-slate-200 text-sm font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="e.g. David Harrison"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-200 text-sm font-semibold mb-2">Manchester Postcode *</label>
                        <input
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleFormChange}
                          placeholder="e.g. M20 2RN"
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-slate-200 text-sm font-semibold mb-2">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleFormChange}
                          placeholder="07XXX XXXXXX"
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-200 text-sm font-semibold mb-2">Service Needed *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm"
                        required
                      >
                        <option value="">Select a service...</option>
                        <option value="emergency">24/7 Emergency Fault Finding</option>
                        <option value="consumer-unit">Consumer Unit / Fuseboard Upgrade</option>
                        <option value="ev-charger">EV Charger Installation</option>
                        <option value="rewiring">Domestic Rewiring</option>
                        <option value="eicr">Landlord EICR Safety Test</option>
                        <option value="commercial">Commercial Electrical Service</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-200 text-sm font-semibold mb-2">Is this an active emergency?</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setIsEmergency(false)}
                          className={`py-3 rounded-xl font-bold text-sm transition ${
                            !isEmergency ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                          }`}
                        >
                          No
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEmergency(true)}
                          className={`py-3 rounded-xl font-bold text-sm transition ${
                            isEmergency ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' : 'bg-slate-950 text-slate-400 border border-slate-800'
                          }`}
                        >
                          Yes — Active Emergency
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-200 text-sm font-semibold mb-2">Brief Details</label>
                      <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleFormChange}
                        placeholder="Describe the issue or service needed..."
                        rows="3"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 py-4 rounded-xl font-extrabold text-base transition shadow-xl shadow-amber-500/20"
                    >
                      Get Instant Quote
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: LOCAL SEO / FAQ ACCORDION */}
        <section id="faq" className="bg-slate-950 px-4 py-16 md:py-24 border-t border-slate-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-center text-slate-400 mb-12 text-sm sm:text-base">
              Answers to common emergency electrical questions in Greater Manchester
            </p>

            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-white hover:bg-slate-800/50 transition text-sm sm:text-base"
                    aria-expanded={expandedFaq === idx}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                        expandedFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedFaq === idx && (
                    <div className="px-5 pb-5 text-slate-300 text-xs sm:text-sm border-t border-slate-800/80 pt-3 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mt-12 text-center">
              <MessageSquare className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-white font-bold mb-1 text-base">Still have questions?</p>
              <p className="text-slate-300 text-sm">
                Call our dispatch team 24/7 at{' '}
                <a href="tel:01617009234" className="font-bold text-amber-400 hover:underline">
                  0161 700 9234
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 10: FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-6 h-6 text-amber-400" />
                <span className="font-extrabold text-lg text-white">APEX ELECTRICAL</span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Apex Electrical Services Ltd. Registered in England & Wales.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm font-bold mt-1">Company Number: 15042899</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3 text-sm">Contact & Hours</h4>
              <div className="space-y-2 text-slate-400 text-xs sm:text-sm">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Deansgate, Manchester, M3 2JA</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <a href="tel:01617009234" className="hover:text-amber-400 transition">0161 700 9234</a>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Open 24/7, 365 days</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3 text-sm">Accreditations</h4>
              <div className="space-y-2 text-slate-400 text-xs sm:text-sm">
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" /> NICEIC Approved Contractor
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" /> City & Guilds Certified
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400" /> £5M Public Liability Insurance
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center text-slate-400 text-xs">
            &copy; 2026 Apex Electrical Services Ltd. All rights reserved.
          </div>
        </div>

        {/* SCHEMA.ORG JSON-LD STRUCTURED DATA (INDEXES ALL 3 WEBP IMAGES) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Electrician',
              name: 'Apex Electrical Services',
              image: [
                'https://apexelectricalmanchester.vercel.app/hero.webp',
                'https://apexelectricalmanchester.vercel.app/image2.webp',
                'https://apexelectricalmanchester.vercel.app/image3.webp',
              ],
              description:
                "Manchester's certified 24/7 emergency electricians. NICEIC approved contractor serving Greater Manchester.",
              url: 'https://apexelectricalmanchester.vercel.app',
              telephone: '+441617009234',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Deansgate',
                addressLocality: 'Manchester',
                addressRegion: 'Greater Manchester',
                postalCode: 'M3 2JA',
                addressCountry: 'GB',
              },
              priceRange: '£85-£5000',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                ratingCount: '142',
              },
              areaServed: ['Manchester', 'Stockport', 'Salford', 'Trafford', 'Oldham', 'Bolton', 'Altrincham', 'Didsbury', 'Sale'],
            }),
          }}
        />
      </footer>
    </div>
  )
}