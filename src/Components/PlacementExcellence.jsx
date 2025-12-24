// PlacementExcellence.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../Styles/PlacementExcellence.css';
import campusBackground from '../Assets/Background.png';
import Footer from './Footer';

// Local recruiter images (make sure these files exist in src/Assets/recruiters)
import recruiter1 from '../Assets/recruiters/ashokleyland.png';
import recruiter2 from '../Assets/recruiters/tcs.png';
import recruiter3 from '../Assets/recruiters/accenture.png';
import recruiter4 from '../Assets/recruiters/wipro.png';
import recruiter5 from '../Assets/recruiters/tcs.png'; 
import recruiter6 from '../Assets/recruiters/techmahindra.png';
import recruiter7 from '../Assets/recruiters/zoho.png';
import recruiter8 from '../Assets/recruiters/tcs.png'; 

// Local student images (make sure these files exist in src/Assets/)
import student1 from '../Assets/person.jpeg';
import student2 from '../Assets/person.jpeg';
import student3 from '../Assets/person.jpeg';

const PlacementExcellence = () => {
  const [heroScroll, setHeroScroll] = useState(0);
  const [activeStory, setActiveStory] = useState(null);
  const [faqOpen, setFaqOpen] = useState({});
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const [statValues, setStatValues] = useState({});
  const [statsAnimated, setStatsAnimated] = useState(false);

  const statsData = [
    { id: 'placement', label: 'Placement Rate', value: 92, suffix: '%' },
    { id: 'highest', label: 'Highest Package', value: 22, suffix: ' LPA' },
    { id: 'average', label: 'Average Package', value: 6.2, suffix: ' LPA' },
    { id: 'students', label: 'Students Placed', value: 1200, suffix: '+' },
    { id: 'companies', label: 'Companies', value: 180, suffix: '+' }
  ];

  const recruiters = [
    { src: recruiter1, alt: 'Ashok Leyland' },
    { src: recruiter2, alt: 'TCS' },
    { src: recruiter3, alt: 'Accenture' },
    { src: recruiter4, alt: 'Wipro' },
    { src: recruiter5, alt: 'TCS (alt)' },
    { src: recruiter6, alt: 'Tech Mahindra' },
    { src: recruiter7, alt: 'Zoho' },
    { src: recruiter8, alt: 'TCS (alt2)' }
  ];

  const successStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      photo: student1,
      role: 'Software Engineer',
      company: 'TCS',
      quote: 'The placement training and mock interviews prepared me perfectly for the real deal.'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      photo: student2,
      role: 'Data Analyst',
      company: 'Infosys',
      quote: 'Industry partnerships gave me hands-on exposure that set me apart.'
    },
    {
      id: 3,
      name: 'Ananya Reddy',
      photo: student3,
      role: 'Product Manager',
      company: 'Cognizant',
      quote: 'The soft skills training boosted my confidence during interviews.'
    }
  ];

  const timelineSteps = [
    'Register with Placement Cell',
    'Pre-placement Training',
    'Aptitude & Soft-skill Sessions',
    'Mock Interviews',
    'Company Shortlisting',
    'Final Interviews',
    'Offer Rollout'
  ];

  const trainingModules = [
    { name: 'Aptitude Training', desc: 'Quantitative, logical & verbal reasoning', progress: 95 },
    { name: 'Soft Skills', desc: 'Communication, presentation & teamwork', progress: 88 },
    { name: 'Resume Workshop', desc: 'Professional resume building guidance', progress: 92 },
    { name: 'Domain Bootcamps', desc: 'Technical skill enhancement programs', progress: 85 },
    { name: 'Mock Interviews', desc: 'Practice sessions with industry experts', progress: 90 },
    { name: 'Industry Projects', desc: 'Real-world problem solving experience', progress: 82 }
  ];

  const team = [
    { name: 'Dr. S. Ramachandran', role: 'Placement Director', email: 'placement@hindusthan.ac.in' },
    { name: 'Prof. M. Lakshmi', role: 'Training Coordinator', email: 'training@hindusthan.ac.in' },
    { name: 'Mr. K. Venkatesh', role: 'Industry Relations', email: 'industry@hindusthan.ac.in' }
  ];

  const faqs = [
    {
      q: 'When does the placement process begin?',
      a: 'The placement process typically begins in the final year, with pre-placement training starting from the pre-final year.'
    },
    {
      q: 'Is placement training mandatory?',
      a: 'Yes, all students must complete the mandatory training modules to be eligible for campus placements.'
    },
    {
      q: 'How many companies visit the campus?',
      a: 'Over 180 companies visit our campus annually, offering diverse opportunities across sectors.'
    },
    {
      q: 'What support is provided for placement preparation?',
      a: 'We offer comprehensive training including aptitude coaching, soft skills development, mock interviews, and resume building workshops.'
    }
  ];

  // Hero parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setHeroScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation with easeOutQuart
  const animateValue = (id, start, end, duration) => {
    const startTime = performance.now();
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = start + (end - start) * easedProgress;

      setStatValues((prev) => ({ ...prev, [id]: current }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  // Intersection observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsAnimated) {
            setStatsAnimated(true);
            statsData.forEach((stat) => {
              animateValue(stat.id, 0, stat.value, 2000);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [statsAnimated]);

  // Intersection observer for timeline
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pe-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.pe-timeline-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="pe-container">
      <section className="hero-section">
        <div className="hero-background" style={{ transform: `translateY(${heroScroll * 0.1}px)` }}>
          <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Placements Excellence</h1>
            <div className="breadcrumb">
              <a href="/" style={{ textDecoration: 'none', color: 'white' }}>Home</a> &gt;{' '}
              <a href="/about-us" style={{ textDecoration: 'none', color: 'white' }}>Placements</a> &gt;{' '}
              <a href="/aboutTrust" style={{ textDecoration: 'none', color: '#f4b400' }}>Excellence</a>
            </div>
            <p className="hero-description">
              Empowering careers through industry partnerships, comprehensive training, and exceptional placement opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="pe-stats" ref={statsRef}>
        {statsData.map((stat) => (
          <div key={stat.id} className="pe-stat">
            <div className="pe-stat-value">
              {(statValues[stat.id] || 0).toFixed(stat.value % 1 !== 0 ? 1 : 0)}
              {stat.suffix}
            </div>
            <div className="pe-stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="pe-logos" aria-label="Top Recruiters">
        <h2>Top Recruiters</h2>
        <div className="pe-logo-track" aria-hidden="false">
          {[...recruiters, ...recruiters].map((recruiter, idx) => (
            <div key={idx} className="pe-logo" tabIndex="0" role="img" aria-label={recruiter.alt}>
              <img src={recruiter.src} alt={recruiter.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="pe-spotlight">
        <h2>Success Stories</h2>
        <div className="pe-spot-grid">
          {successStories.map((story) => (
            <article
              key={story.id}
              className="pe-spot-card"
              onClick={() => setActiveStory(story.id)}
              onKeyPress={(e) => e.key === 'Enter' && setActiveStory(story.id)}
              tabIndex="0"
              role="button"
              aria-label={`View ${story.name}'s success story`}
            >
              <img src={story.photo} alt={story.name} loading="lazy" />
              <h3>{story.name}</h3>
              <p className="pe-spot-role">{story.role}</p>
              <p className="pe-spot-company">{story.company}</p>
            </article>
          ))}
        </div>
      </section>

      {activeStory && (
        <div
          className="pe-modal"
          onClick={() => setActiveStory(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="pe-modal-content" onClick={(e) => e.stopPropagation()}>
            {successStories.filter((s) => s.id === activeStory).map((story) => (
              <div key={story.id}>
                <img src={story.photo} alt={story.name} />
                <h3 id="modal-title">{story.name}</h3>
                <p>
                  <strong>{story.role}</strong> at {story.company}
                </p>
                <blockquote>"{story.quote}"</blockquote>
                <button onClick={() => setActiveStory(null)} aria-label="Close modal">Close</button>
              </div>
            ))}
          </div>
        </div>
      )}

      <section className="pe-timeline" ref={timelineRef}>
        <h2>Placement Process</h2>
        <div className="pe-timeline-track">
          {timelineSteps.map((step, idx) => (
            <div key={idx} className="pe-timeline-item">
              <div className="pe-timeline-marker">{idx + 1}</div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pe-training">
        <h2>Placement Training & Skill Programs</h2>
        <div className="pe-training-grid">
          {trainingModules.map((module, idx) => (
            <div key={idx} className="pe-training-card">
              <h3>{module.name}</h3>
              <p>{module.desc}</p>
              <div className="pe-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={module.progress}>
                <div className="pe-progress-bar" style={{ width: `${module.progress}%` }}></div>
              </div>
              <span className="pe-progress-label">{module.progress}% Complete</span>
            </div>
          ))}
        </div>
        <button className="pe-cta" aria-label="View training calendar">View Training Calendar</button>
      </section>

      <section className="pe-team">
        <h2>Placement Cell Team</h2>
        <div className="pe-team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="pe-team-card">
              <h3>{member.name}</h3>
              <p className="pe-team-role">{member.role}</p>
              <a href={`mailto:${member.email}`} className="pe-team-email">{member.email}</a>
              <button className="pe-cta" aria-label={`Contact ${member.name}`}>Contact</button>
            </div>
          ))}
        </div>
      </section>

      <section className="pe-downloads">
        <h2>Reports & Resources</h2>
        <button className="pe-cta" aria-label="Download placement report PDF">
          Download Placement Report (PDF)
        </button>
      </section>

      <section className="pe-faq">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, idx) => (
          <div key={idx} className="pe-faq-item">
            <button
              className="pe-faq-q"
              onClick={() => toggleFaq(idx)}
              aria-expanded={faqOpen[idx] || false}
              aria-controls={`faq-answer-${idx}`}
            >
              {faq.q}
              <span className="pe-faq-icon" aria-hidden="true">{faqOpen[idx] ? '−' : '+'}</span>
            </button>
            {faqOpen[idx] && (
              <div id={`faq-answer-${idx}`} className="pe-faq-a">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default PlacementExcellence;
