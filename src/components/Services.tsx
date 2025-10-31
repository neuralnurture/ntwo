export default function Services() {
  const services = [
    {
      icon: '🎓',
      title: 'Research Workshops',
      description: 'Intensive training programs and expert-led instruction designed to bridge theory and practice. From hands-on bootcamps to guest lectures, we bring cutting-edge AI research to your team.'
    },
    {
      icon: '🔬',
      title: 'Research Consulting',
      description: "Strategic AI consulting from researchers who've built ML systems serving millions. We help you navigate from concept to production-ready solutions."
    },
    {
      icon: '🎤',
      title: 'Keynote Speaking',
      description: "Engaging keynote presentations on AI research, industry trends, and real-world ML deployment. Share insights from our experience at top tech companies and cutting-edge research at your conference or event."
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-gray-900 text-center mb-4">Let&apos;s Collaborate</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Advancing AI together through research and innovation</p>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            While we focus on developing our core AI products, we collaborate with select universities and organizations to advance the broader AI ecosystem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 transition-all relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Discuss Opportunities
          </a>
        </div>
      </div>
    </section>
  )
}
