'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formspreeWaitlistEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_WAITLIST || 'https://formspree.io/f/xwpwqaqo'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      const formData = new FormData()
      formData.append('email', email)
      formData.append('source', 'waitlist')

      const response = await fetch(formspreeWaitlistEndpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Something went wrong. Please try again later.')
      // eslint-disable-next-line no-console
      console.error('Waitlist submission error:', err)
    }
  }

  return (
    <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-gray-900 text-center mb-4">Join Our Waitlist</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Be the first to experience our AI solutions</p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200 rounded-2xl p-10 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-5xl text-white mx-auto mb-6 shadow-lg">
              🚀
            </div>
            
            <h3 className="text-3xl font-black text-gray-900 mb-4">Reimagining Travel & Privacy with AI</h3>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We&apos;re building next-generation AI solutions to completely reimagine the way we make flight reservations and protect the privacy of users. Join our waitlist to get early access, exclusive updates, and special partnership opportunities.
            </p>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6">
                Thank you for joining our waitlist! We&apos;ll be in touch soon with exclusive updates about our travel and privacy AI solutions.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                <input 
                  type="email" 
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>
            )}

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <div className="flex justify-center gap-12 pt-8 border-t border-blue-200/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">250+</div>
                <div className="text-sm text-gray-600">On Waitlist</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Q4 2025</div>
                <div className="text-sm text-gray-600">Expected Launch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
