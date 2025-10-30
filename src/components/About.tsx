export default function About() {
  const highlights = [
    {
      icon: '🎓',
      title: 'World-Class Education',
      description: 'Our team combines expertise from Tokyo Tech, IIT Delhi, UC Berkeley, and Illinois State University with cutting-edge research credentials.'
    },
    {
      icon: '🏢',
      title: 'Fortune 500 Experience',
      description: "We've built and deployed ML systems at Amazon, Rakuten, and Toyota, serving millions of users globally."
    },
    {
      icon: '🚀',
      title: 'Innovation Focused',
      description: "We're developing next-generation AI tools for travel and privacy, and are open to early partnership opportunities."
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-gray-900 text-center mb-4">About Neural Nurture</h2>
        <p className="text-xl text-gray-600 text-center mb-16">Building the future of AI, one innovation at a time</p>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-10 leading-relaxed">
            Neural Nurture is in active development, building AI solutions that bridge academic research and industry needs. Founded in 2024 by Tokyo Institute of Technology alumni with extensive experience at Amazon, Rakuten, and Toyota, we combine academic rigor with industry pragmatism.
          </p>
          
          <p className="text-lg text-gray-600 text-center mb-12 leading-relaxed">
            Our founders bring world-class education from institutions including Tokyo Institute of Technology, UC Berkeley, IIT Delhi and Illinois State University. With over 18 years of combined experience and 10+ publications in prestigious international conferences including CVPR, WACV, ISNN, and ICSC, we are uniquely positioned to tackle complex AI challenges.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item) => (
              <div 
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
