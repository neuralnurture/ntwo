---
title: Careers
layout: page
description: Join Our Team - Research Opportunities at Neural Nurture
bodyClass: page-careers
positions:
  - title: Research Intern — Natural Language Processing
    location: Indore, India
    mode: On-site
    qualifications:
      - Pursuing CS, ML, or related degree (Bachelor's/Master's/PhD)
      - Strong programming skills in Python or similar languages
      - Experience with NLP and deep learning frameworks
      - Collaborative mindset and passion for research
    link: /careers/research-intern-nlp/
    
  - title: Research Intern — Computer Vision
    location: Indore, India
    mode: On-site
    qualifications:
      - Pursuing CS, ML, or related degree (Bachelor's/Master's/PhD)
      - Strong programming skills in Python or similar languages
      - Experience with Computer Vision and deep learning frameworks
      - Collaborative mindset and passion for research
    link: /careers/research-intern-cv/
---

## Join Our Team

At Neural Nurture, we're pushing the boundaries of artificial intelligence through innovative research and practical applications. We're looking for curious minds and passionate innovators to join our journey.

## Current Openings

<div class="job-cards">
{% for position in page.positions %}
  <div class="job-card">
    <div class="job-header">
      <h3>{{ position.title }}</h3>
    </div>
    
    <div class="job-details">
      <p><i class="fa fa-map-marker"></i> {{ position.location }}</p>
      <p><i class="fa fa-building"></i> {{ position.mode }}</p>
      
      <div class="qualifications">
        <p class="qual-header">Minimum Qualifications:</p>
        <ul>
        {% for qual in position.qualifications %}
          <li>{{ qual }}</li>
        {% endfor %}
        </ul>
      </div>
    </div>
    
    <div class="job-footer">
      <a href="{{ position.link }}" class="btn btn-primary">Learn More</a>
    </div>
  </div>
{% endfor %}
</div>

<style>
.job-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.job-card {
  background: #FFF4F4;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.job-card:hover {
  transform: translateY(-4px);
}

.job-header {
  padding: 1.25rem;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.job-header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.job-details {
  padding: 1.25rem;
}

.job-details p {
  margin: 0.5rem 0;
  color: #666;
  font-size: 0.95rem;
}

.job-details i {
  margin-right: 0.5rem;
  color: #dc3545;
}

.qualifications {
  margin-top: 1rem;
}

.qual-header {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.qualifications ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.qualifications li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.qualifications li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #dc3545;
}

.job-footer {
  padding: 1.25rem;
  border-top: 1px solid rgba(0,0,0,0.05);
  text-align: right;
}

.btn-primary {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: #dc3545;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background: #c82333;
}

@media (max-width: 768px) {
  .job-cards {
    grid-template-columns: 1fr;
  }
}
</style>