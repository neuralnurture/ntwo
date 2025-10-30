export default function Careers() {
  const jobs = [
    {
      title: 'Applied Scientist',
      location: 'Indore/Hybrid',
      duration: 'Full-time',
      level: 'Entry to Mid-level',
      requirements: [
        "Bachelor's, Master's, or PhD in CS, ML, or related field",
        'Strong proficiency in Python and deep learning frameworks',
        'Experience in NLP, Computer Vision, or Multimodal AI',
        'Research experience with publications preferred',
        'Strong analytical and problem-solving skills'
      ]
    },
    {
      title: 'Natural Language Processing Intern',
      location: 'Remote/Hybrid',
      duration: '3-6 months',
      level: 'Student/Graduate',
      requirements: [
        'Strong foundation in Python and machine learning',
        'Experience with NLP libraries (NLTK, spaCy, transformers)',
        'Understanding of deep learning frameworks',
        'Research experience or academic background in NLP'
      ]
    },
    {
      title: 'Computer Vision Intern',
      location: 'Remote/Hybrid',
      duration: '3-6 months',
      level: 'Student/Graduate',
      requirements: [
        'Proficiency in Python and computer vision libraries',
        'Experience with OpenCV, PIL, and deep learning',
        'Knowledge of image processing techniques',
        'Academic background in computer vision or related field'
      ]
    }
  ]

  return (
    <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-gray-900 text-center mb-4">Join Our Team</h2>
        <p className="text-xl text-gray-600 text-center mb-16">Help us build the future of AI</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div 
              key={job.title}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-blue-600 transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{job.title}</h3>
              
              <div className="flex flex-wrap gap-3 mb-6 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  📍 {job.location}
                </span>
                <span className="flex items-center gap-1">
                  ⏰ {job.duration}
                </span>
                <span className="flex items-center gap-1">
                  {job.level.includes('Student') ? '🎓' : '💼'} {job.level}
                </span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Requirements</h4>
                <ul className="space-y-2">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:font-bold">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#contact" 
                className="block w-full text-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
