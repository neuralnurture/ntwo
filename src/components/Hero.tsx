export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center"
      style={{
        background: 'linear-gradient(180deg, #dbeafe 0%, #e0e7ff 15%, #f3e8ff 30%, #fce7f3 45%, #fef3f2 60%, #ffffff 85%, #ffffff 100%)'
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)'
      }} />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-100/50 to-purple-100/50 border border-blue-200 rounded-full text-sm font-semibold text-blue-600 mb-8 animate-fadeInUp">
          ✨ Pioneering AI Research & Education
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          Where AI Research Meets Real-World Impact
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          An emerging AI research lab developing next-generation solutions in Machine Learning, NLP, and Computer Vision - building the foundation for intelligent systems in travel and privacy.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {['PhD-Led Research Team', 'Cutting-Edge AI Solutions', 'Research-Backed Solutions'].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-gray-700 font-medium">
              <span className="flex items-center justify-center w-7 h-7 bg-green-100 text-green-600 rounded-full text-lg font-bold">
                ✓
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#services" 
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Engage with us
          </a>
          <a 
            href="#waitlist" 
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 hover:-translate-y-0.5 transition-all"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  )
}
