// PlacementTraining.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/PlacementTraining.css';
import campusBackground from '../Assets/Background.png';
import trainer1 from '../Assets/person.jpeg';
import Footer from './Footer';
const PlacementTraining = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.dataset.section]: true
          }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-section]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const philosophyPoints = [
    { icon: '💬', text: 'Effective communication and interpersonal skills' },
    { icon: '🔧', text: 'Strong technical and analytical foundations' },
    { icon: '🎯', text: 'Problem-solving and critical thinking abilities' },
    { icon: '🤝', text: 'Professional etiquette and workplace readiness' }
  ];

  const skillPillars = [
    {
      id: 1,
      title: 'Soft Skills & Communication',
      description: 'Building confidence, presentation abilities, and interpersonal effectiveness'
    },
    {
      id: 2,
      title: 'Technical Skill Building',
      description: 'Strengthening core engineering concepts and practical applications'
    },
    {
      id: 3,
      title: 'Aptitude & Logical Reasoning',
      description: 'Developing analytical thinking and quantitative problem-solving'
    },
    {
      id: 4,
      title: 'Professional Conduct & Ethics',
      description: 'Cultivating workplace behavior and professional responsibility'
    }
  ];

  const readinessPath = [
    {
      id: 1,
      stage: 'Foundation Stage',
      period: 'Year 1-2',
      description: 'Focus on academic excellence and fundamental skill development',
      activities: ['Core curriculum mastery', 'Basic communication training', 'Introduction to professional skills']
    },
    {
      id: 2,
      stage: 'Development Stage',
      period: 'Year 2-3',
      description: 'Building practical experience through projects and workshops',
      activities: ['Hands-on project work', 'Advanced technical training', 'Aptitude development programs']
    },
    {
      id: 3,
      stage: 'Industry Interaction',
      period: 'Year 3-4',
      description: 'Exposure to industry practices and professional environments',
      activities: ['Guest lectures and seminars', 'Industry visit programs', 'Skill enhancement workshops']
    },
    {
      id: 4,
      stage: 'Pre-Placement Readiness',
      period: 'Final Year',
      description: 'Comprehensive preparation for career opportunities',
      activities: ['Resume building support', 'Mock interview sessions', 'Company-specific preparation']
    }
  ];

  const supportStructure = [
    {
      id: 1,
      icon: '👨‍🏫',
      title: 'Mentorship & Guidance',
      description: 'Faculty mentors provide academic and career guidance throughout the student journey'
    },
    {
      id: 2,
      icon: '🎓',
      title: 'Career Counseling',
      description: 'Professional counseling to help students identify strengths and career paths'
    },
    {
      id: 3,
      icon: '📋',
      title: 'Training Coordination',
      description: 'Dedicated cell to organize workshops, seminars, and skill development programs'
    }
  ];

  return (
    <div className="pt-placement-training">
       {/* Hero Section */}
                        <section className="hero-section">
                          <div className="hero-background">
                            <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
                          </div>
                  
                          <div className="hero-content">
                  
                            {/* Hero Text */}
                            <div className="hero-text">
                              <h1 className="hero-title">Placement Excellence</h1>
                              <div className="breadcrumb"><a href="/" style={{ textDecoration:"none", color:"white"}}>Home</a> &gt; <a href="/placements" style={{ textDecoration:"none", color:"white"}}>Placements</a>
                              {" "}
                          &gt;{" "}
                          <a href="/placement-excellence" style={{ textDecoration: "none", color: "#f4b400" }}>
                            Placement Excellence
                          </a></div>
                              <p className="hero-description">
                                If you are passionate and driven, explore our current openings across
                                Hindusthan Institutions and apply.
                              </p>
                            </div>
                          </div>
                        </section>

      {/* Training Philosophy Section */}
      <section 
        className={`pt-philosophy-section ${isVisible['philosophy'] ? 'pt-visible' : ''}`}
        data-section="philosophy"
      >
        <div className="pt-container">
          <div className="pt-philosophy-grid">
            <div className="pt-philosophy-content">
              <h2 className="pt-section-title">Our Training Philosophy</h2>
              <p className="pt-philosophy-text">
                We believe that successful career placement begins with comprehensive preparation that extends 
                beyond technical knowledge. Our training approach focuses on holistic development, ensuring 
                students are equipped with the skills, confidence, and professional mindset required to thrive 
                in competitive environments.
              </p>
              <p className="pt-philosophy-text">
                From the first year onwards, we integrate career development activities into the academic 
                curriculum, creating a progressive learning path that prepares students for future opportunities 
                while maintaining academic excellence.
              </p>
            </div>
            <div className="pt-philosophy-points">
              <h3 className="pt-points-heading">Key Focus Areas</h3>
              <ul className="pt-points-list">
                {philosophyPoints.map((point, index) => (
                  <li key={index} className="pt-point-item">
                    <span className="pt-point-icon">{point.icon}</span>
                    <span className="pt-point-text">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Pillars Grid */}
      <section 
        className={`pt-pillars-section ${isVisible['pillars'] ? 'pt-visible' : ''}`}
        data-section="pillars"
      >
        <div className="pt-container">
          <h2 className="pt-section-title pt-center">Core Skill Development Pillars</h2>
          <p className="pt-section-subtitle">
            Four foundational areas that form the basis of our training program
          </p>
          <div className="pt-pillars-grid">
            {skillPillars.map((pillar) => (
              <article key={pillar.id} className="pt-pillar-card">
                <h3 className="pt-pillar-title">{pillar.title}</h3>
                <p className="pt-pillar-description">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Year-wise Readiness Path */}
      <section 
        className={`pt-readiness-section ${isVisible['readiness'] ? 'pt-visible' : ''}`}
        data-section="readiness"
      >
        <div className="pt-container">
          <h2 className="pt-section-title pt-center">Year-wise Readiness Path</h2>
          <p className="pt-section-subtitle">
            A progressive development journey preparing students for career success
          </p>
          <div className="pt-timeline">
            {readinessPath.map((phase, index) => (
              <article key={phase.id} className="pt-timeline-item">
                <div className="pt-timeline-marker">
                  <span className="pt-timeline-number">{phase.id}</span>
                  {index < readinessPath.length - 1 && <div className="pt-timeline-line"></div>}
                </div>
                <div className="pt-timeline-content">
                  <div className="pt-timeline-header">
                    <h3 className="pt-timeline-title">{phase.stage}</h3>
                    <span className="pt-timeline-period">{phase.period}</span>
                  </div>
                  <p className="pt-timeline-description">{phase.description}</p>
                  <ul className="pt-timeline-activities">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Support Structure Section */}
      <section 
        className={`pt-support-section ${isVisible['support'] ? 'pt-visible' : ''}`}
        data-section="support"
      >
        <div className="pt-container">
          <h2 className="pt-section-title pt-center">Support Structure</h2>
          <p className="pt-section-subtitle">
            Comprehensive support system to guide students throughout their journey
          </p>
          <div className="pt-support-grid">
            {supportStructure.map((support) => (
              <article key={support.id} className="pt-support-card">
                <div className="pt-support-icon">{support.icon}</div>
                <h3 className="pt-support-title">{support.title}</h3>
                <p className="pt-support-description">{support.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    <Footer/>
    </div>
  );
};

export default PlacementTraining;