'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mzzelegy'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setSubmitted(true)
        form.reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-gray-900 text-center mb-4">Get in Touch</h2>
        <p className="text-xl text-gray-600 text-center mb-16">Let&apos;s discuss how we can help you</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Office Address & Map */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Address</h3>
              
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200 p-6 rounded-xl flex gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="font-bold text-gray-900">Neural Nurture Pvt. Ltd.</p>
                  <p className="text-gray-700">311 Shekhar Central 4-5, Manorama Ganj</p>
                  <p className="text-gray-700">Indore, MP, India - 452001</p>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location</h3>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.142225231275!2d75.88431927625562!3d22.722954479384928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd739ee4b3a1%3A0xf6349d27b46dc183!2sNeural%20Nurture%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1748408016439!5m2!1sen!2sin" 
                  width="100%" 
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  Thank you for your message! We&apos;ll get back to you shortly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
