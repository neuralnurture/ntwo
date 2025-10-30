export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/neuralnurture' },
    { name: 'Twitter', url: 'https://x.com/NeuralNurture' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/neuralnurture' },
    { name: 'YouTube', url: 'https://www.youtube.com/@NeuralNurture' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h4 className="text-lg font-bold mb-6">Follow Us</h4>
          <div className="flex gap-8 flex-wrap">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          © 2024 Neural Nurture. All rights reserved.
        </div>
      </div>
    </footer>
  )
}