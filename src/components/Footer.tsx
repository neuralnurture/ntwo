import Image from 'next/image'
import logo from '../../assets/images/nn-logo.png'

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Social Links Section - Now on Left */}
          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex gap-6 flex-wrap">
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

          {/* Logo Section - Now on Right */}
          <div className="flex flex-col md:items-end">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src={logo} 
                alt="Neural Nurture Logo" 
                width={60} 
                height={60}
                className="logo-mark-footer"
              />
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Neural Nurture
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-right">
              Building the future of AI, one innovation at a time.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          © 2025 Neural Nurture. All rights reserved.
        </div>
      </div>
    </footer>
  )
}