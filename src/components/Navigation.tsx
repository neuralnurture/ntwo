'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../assets/images/nn-logo.png'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-md py-3' 
        : 'bg-white/90 backdrop-blur-lg shadow-sm py-6'
    } ${darkMode ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src={logo} 
              alt="Neural Nurture Logo" 
              width={40} 
              height={40}
              className="logo-mark"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Neural Nurture
            </div>
          </div>
          
          <div className="flex items-center gap-10">
            <ul className="hidden md:flex gap-8">
              <li><a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a></li>
              <li><a href="#team" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Team</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Collaboration</a></li>
              <li><a href="#careers" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a></li>
            </ul>
            
            <button 
              onClick={toggleDarkMode}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>{darkMode ? '☀️' : '🌙'}</span>
              <span className="text-sm font-medium">{darkMode ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
