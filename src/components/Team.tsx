'use client'

import { useState } from 'react'
import Image from 'next/image'
import vijayPhoto from '../../assets/images/vijay-daultani.jpg'
import dineshPhoto from '../../assets/images/dinesh-daultani.jpeg'

export default function Team() {
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null)

  const founders = [
    {
      id: 'vijay',
      initials: 'VD',
      name: 'Vijay Daultani',
      title: 'Co-Founder | NLP Expert',
      photo: vijayPhoto,
      bio: "Vijay completed his PhD in Natural Language Processing at the Tokyo Institute of Technology in 2024, focusing on linguistic acceptability modeling. From 2021 to 2023, he was Group Manager for NLP at Rakuten, leading initiatives in E-Commerce, Finance, and Travel. From 2019 to 2021, he served as Senior Technical Program Manager at Amazon Japan, managing ML projects across 13 countries. He holds an M.Tech from IIT Delhi and a Computer Science degree from TCET Indore, with expertise in NLP, deep learning, and applied AI."
    },
    {
      id: 'dinesh',
      initials: 'DD',
      name: 'Dinesh Daultani',
      title: 'Co-Founder | Computer Vision Expert',
      photo: dineshPhoto,
      bio: "Dinesh completed his PhD from the Tokyo Institute of Technology, Japan in 2024. His PhD focused on narrowing the performance gap across diverse computer vision tasks, bridging the disparity between real-world and pristine/clean images. Previously, he worked at Woven by Toyota as a Data Scientist in the autonomous driving team from 2021 to 2022. He worked at Rakuten as a Research Scientist from 2018 to 2021, utilizing deep learning, machine learning, and reinforcement learning to solve computer vision, finance, cybersecurity, and e-commerce research problems. He received his Master of Science in Information Systems from Illinois State University in 2015 and his Bachelor of Engineering in Computer Science from CDGI, Indore in 2010."
    }
  ]

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-gray-900 text-center mb-4">Our Team</h2>
        <p className="text-xl text-gray-600 text-center mb-8">Founded by Tokyo Tech PhDs with extensive industry experience</p>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Founded by Tokyo Tech PhDs with extensive experience at leading tech companies, our team combines academic rigor with industry pragmatism to tackle real-world AI challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <div 
              key={founder.id}
              className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-xl hover:-translate-y-2 transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              
              <div className="w-28 h-28 rounded-full mx-auto mb-6 shadow-lg overflow-hidden border-4 border-gradient-to-br from-blue-600 to-purple-600">
                <Image 
                  src={founder.photo} 
                  alt={founder.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{founder.title}</p>
              
              <p className={`text-gray-600 text-sm leading-relaxed text-left ${
                expandedProfile === founder.id ? '' : 'line-clamp-3'
              }`}>
                {founder.bio}
              </p>
              
              <button 
                onClick={() => setExpandedProfile(expandedProfile === founder.id ? null : founder.id)}
                className="mt-4 text-blue-600 font-semibold text-sm underline hover:text-blue-700"
              >
                {expandedProfile === founder.id ? 'Show less' : 'See complete profile'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
