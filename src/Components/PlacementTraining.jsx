import React, { useState, useEffect, useRef } from 'react';
import '../Styles/PlacementTraining.css';
import campusBackground from '../Assets/Subtract.png';
import trainer1 from '../Assets/person.jpeg';
import Footer from './Footer';
const PlacementTraining = () => {
  const [activeView, setActiveView] = useState('calendar');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Sample data
  const stats = [
    { id: 1, label: 'Training Programs', value: 45, suffix: '+' },
    { id: 2, label: 'Students Trained', value: 1250, suffix: '+' },
    { id: 3, label: 'Placement Ready', value: 92, suffix: '%' },
    { id: 4, label: 'Mock Interviews', value: 380, suffix: '+' }
  ];

  const modules = [
    { id: 1, name: 'Aptitude Training', short: 'Quantitative, Logical & Verbal reasoning', tags: ['Mandatory', 'Online'], duration: '6 weeks', progress: 100 },
    { id: 2, name: 'Soft Skills Development', short: 'Communication, Leadership & Team collaboration', tags: ['Mandatory'], duration: '4 weeks', progress: 75 },
    { id: 3, name: 'Resume & LinkedIn', short: 'Professional branding and portfolio building', tags: ['Optional'], duration: '2 weeks', progress: 100 },
    { id: 4, name: 'Domain Bootcamps', short: 'Technical & domain-specific training sessions', tags: ['Optional', 'Hybrid'], duration: '8 weeks', progress: 45 },
    { id: 5, name: 'Mock Interviews', short: 'HR & Technical interview simulations', tags: ['Mandatory'], duration: 'Ongoing', progress: 60 },
    { id: 6, name: 'Interview Labs', short: 'Real-time interview practice with AI feedback', tags: ['Online'], duration: 'Ongoing', progress: 30 },
    { id: 7, name: 'Company Prep', short: 'Company-specific preparation modules', tags: ['Optional'], duration: '3 weeks', progress: 0 },
    { id: 8, name: 'Certifications', short: 'Industry certifications via Coursera & edX', tags: ['Optional', 'Self-paced'], duration: 'Variable', progress: 85 }
  ];

  const calendarEvents = [
    { id: 1, title: 'Aptitude Workshop', date: '2025-12-15', time: '10:00 AM', type: 'Aptitude', trainer: 'Dr. Sarah Johnson', seats: 12, location: 'Hall A' },
    { id: 2, title: 'Soft Skills Seminar', date: '2025-12-16', time: '2:00 PM', type: 'Soft Skills', trainer: 'Prof. Michael Chen', seats: 8, location: 'Room 301' },
    { id: 3, title: 'Technical Mock Interview', date: '2025-12-17', time: '11:00 AM', type: 'Mock Interview', trainer: 'Ms. Priya Sharma', seats: 5, location: 'Interview Lab' },
    { id: 4, title: 'Resume Building Workshop', date: '2025-12-18', time: '3:00 PM', type: 'Domain', trainer: 'Mr. David Lee', seats: 20, location: 'Hall B' },
    { id: 5, title: 'Leadership Training', date: '2025-12-19', time: '9:00 AM', type: 'Soft Skills', trainer: 'Dr. Amanda Foster', seats: 15, location: 'Auditorium' },
    { id: 6, title: 'Data Structures Bootcamp', date: '2025-12-20', time: '1:00 PM', type: 'Domain', trainer: 'Prof. Raj Kumar', seats: 10, location: 'Lab 2' }
  ];

  const trainers = [
    { id: 1, name: 'Dr. Sarah Johnson', photo: trainer1, role: 'Aptitude Coach', expertise: ['Quantitative', 'Logical Reasoning'], linkedin: '#' },
    { id: 2, name: 'Prof. Michael Chen', photo: trainer1, role: 'Soft Skills Expert', expertise: ['Communication', 'Leadership'], linkedin: '#' },
    { id: 3, name: 'Ms. Priya Sharma', photo: trainer1, role: 'Technical Interviewer', expertise: ['Coding', 'System Design'], linkedin: '#' },
    { id: 4, name: 'Mr. David Lee', photo: trainer1, role: 'Industry Mentor', expertise: ['Resume', 'LinkedIn'], linkedin: '#' }
  ];

  const resources = [
    { id: 1, title: 'Placement Handbook 2025', type: 'PDF', file: '#' },
    { id: 2, title: 'Resume Templates Pack', type: 'ZIP', file: '#' },
    { id: 3, title: 'Aptitude Question Bank', type: 'PDF', file: '#' },
    { id: 4, title: 'Company-specific Guides', type: 'PDF', file: '#' }
  ];

  const testimonials = [
    { id: 1, name: 'Ananya Reddy', photo: trainer1, role: 'Software Engineer', company: 'Google', quote: 'The mock interviews prepared me perfectly for the real thing.' },
    { id: 2, name: 'Rahul Gupta', photo: trainer1, role: 'Data Analyst', company: 'Microsoft', quote: 'Domain bootcamps gave me the edge I needed to secure my dream job.' },
    { id: 3, name: 'Sneha Patel', photo: trainer1, role: 'Product Manager', company: 'Amazon', quote: 'Soft skills training transformed my interview performance completely.' }
  ];

  const faqs = [
    { id: 1, q: 'How do I register for training programs?', a: 'Click the "Register for Training" button and fill out the enrollment form. You will receive confirmation within 24 hours.' },
    { id: 2, q: 'Are mock interviews mandatory?', a: 'Yes, all students must complete at least 3 mock interviews before appearing for campus placements.' },
    { id: 3, q: 'Can I access training materials online?', a: 'Absolutely! All registered students have 24/7 access to our learning management system with recorded sessions and resources.' },
    { id: 4, q: 'How do I book a mentor slot?', a: 'Navigate to the Trainers section and click "Book a Mentor Slot" on any trainer\'s card. Select your preferred time and submit.' }
  ];

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      const element = document.getElementById(`stat-${stat.id}`);
      if (!element) return;

      let current = 0;
      const increment = stat.value / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          element.textContent = stat.value;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current);
        }
      }, 16);
    });
  };

  const openModal = (type, data) => {
    setModalContent({ type, data });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const filteredEvents = selectedCategory === 'all' 
    ? calendarEvents 
    : calendarEvents.filter(e => e.type.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="p-tr-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
        </div>

        <div className="hero-content">

          {/* Hero Text */}
          <div className="hero-text">
            <h1 className="hero-title">Placements Excellence</h1>
            <div className="breadcrumb"><a href="/" style={{ textDecoration:"none", color:"white"}}>Home</a> &gt; <a href="/about-us" style={{ textDecoration:"none", color:"white"}}>Placements</a>
              {" "}
              &gt;{" "}
              <a href="/aboutTrust" style={{ textDecoration: "none", color: "#f4b400" }}>
                Excellence
              </a>
            </div>
            <p className="hero-description">
              Empowering careers through industry partnerships, comprehensive
              training, and exceptional placement opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="p-tr-stats" ref={statsRef}>
        <div className="p-tr-stats-grid">
          {stats.map(stat => (
            <div key={stat.id} className="p-tr-stat-card">
              <div className="p-tr-stat-value">
                <span id={`stat-${stat.id}`}>0</span>
                <span className="p-tr-stat-suffix">{stat.suffix}</span>
              </div>
              <div className="p-tr-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Modules */}
      <section className="p-tr-modules">
        <h2 className="p-tr-section-title">Training Modules</h2>
        <div className="p-tr-modules-grid">
          {modules.map((module, idx) => (
            <div key={module.id} className="p-tr-mod-card" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="p-tr-mod-header">
                <h3>{module.name}</h3>
                {module.progress === 100 && <span className="pe-badge">✓</span>}
              </div>
              <p className="p-tr-mod-desc">{module.short}</p>
              <div className="p-tr-mod-tags">
                {module.tags.map(tag => (
                  <span key={tag} className="p-tr-tag">{tag}</span>
                ))}
              </div>
              <div className="p-tr-mod-progress">
                <div className="p-tr-progress-bar">
                  <div className="p-tr-progress-fill" style={{ width: `${module.progress}%` }}></div>
                </div>
                <span className="p-tr-progress-text">{module.progress}%</span>
              </div>
              <div className="p-tr-mod-footer">
                <span className="p-tr-mod-duration">{module.duration}</span>
                <button className="p-tr-mod-cta" onClick={() => openModal('enroll', module)}>Enroll</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calendar & Booking */}
      <section className="p-tr-calendar">
        <div className="p-tr-cal-header">
          <h2 className="p-tr-section-title">Training Calendar</h2>
          <div className="p-tr-cal-controls">
            <div className="p-tr-cal-filters">
              <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => setSelectedCategory('all')}>All</button>
              <button className={selectedCategory === 'aptitude' ? 'active' : ''} onClick={() => setSelectedCategory('aptitude')}>Aptitude</button>
              <button className={selectedCategory === 'soft' ? 'active' : ''} onClick={() => setSelectedCategory('soft')}>Soft Skills</button>
              <button className={selectedCategory === 'domain' ? 'active' : ''} onClick={() => setSelectedCategory('domain')}>Domain</button>
              <button className={selectedCategory === 'mock' ? 'active' : ''} onClick={() => setSelectedCategory('mock')}>Mock</button>
            </div>
            <div className="p-tr-cal-view-toggle">
              <button className={activeView === 'calendar' ? 'active' : ''} onClick={() => setActiveView('calendar')}>Calendar</button>
              <button className={activeView === 'list' ? 'active' : ''} onClick={() => setActiveView('list')}>List</button>
            </div>
          </div>
        </div>
        <div className="p-tr-cal-content">
          {filteredEvents.map(event => (
            <div key={event.id} className={`p-tr-event p-tr-event--${event.type.toLowerCase().replace(' ', '')}`}>
              <div className="p-tr-event-date">
                <span className="p-tr-event-day">{new Date(event.date).getDate()}</span>
                <span className="p-tr-event-month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
              </div>
              <div className="p-tr-event-details">
                <h4>{event.title}</h4>
                <p><strong>Trainer:</strong> {event.trainer}</p>
                <p><strong>Time:</strong> {event.time} | <strong>Location:</strong> {event.location}</p>
                <p><strong>Seats Available:</strong> {event.seats}</p>
              </div>
              <button className="p-tr-event-book" onClick={() => openModal('book', event)}>Book Seat</button>
            </div>
          ))}
        </div>
      </section>

      {/* Trainers */}
      <section className="p-tr-trainers">
        <h2 className="p-tr-section-title">Our Trainers & Mentors</h2>
        <div className="p-tr-trainers-grid">
          {trainers.map(trainer => (
            <div key={trainer.id} className="p-tr-trainer-card">
              <img src={trainer.photo} alt={trainer.name} loading="lazy" />
              <h3>{trainer.name}</h3>
              <p className="p-tr-trainer-role">{trainer.role}</p>
              <div className="p-tr-trainer-expertise">
                {trainer.expertise.map(exp => (
                  <span key={exp} className="p-tr-tag">{exp}</span>
                ))}
              </div>
              <button className="p-tr-trainer-cta" onClick={() => openModal('mentor', trainer)}>Book Mentor Slot</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="p-tr-testimonials">
        <h2 className="p-tr-section-title">Success Stories</h2>
        <div className="p-tr-testimonials-grid">
          {testimonials.map(test => (
            <div key={test.id} className="p-tr-testimonial-card">
              <img src={test.photo} alt={test.name} loading="lazy" />
              <p className="p-tr-testimonial-quote">"{test.quote}"</p>
              <h4>{test.name}</h4>
              <p className="p-tr-testimonial-role">{test.role} at {test.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="p-tr-resources">
        <h2 className="p-tr-section-title">Resources & Downloads</h2>
        <div className="p-tr-resources-grid">
          {resources.map(resource => (
            <div key={resource.id} className="p-tr-resource-card">
              <div className="p-tr-resource-icon">{resource.type}</div>
              <h4>{resource.title}</h4>
              <a href={resource.file} download className="p-tr-resource-download">Download</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="p-tr-faq">
        <h2 className="p-tr-section-title">Frequently Asked Questions</h2>
        <div className="p-tr-faq-list">
          {faqs.map(faq => (
            <div key={faq.id} className="p-tr-faq-item">
              <button 
                className="p-tr-faq-question"
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                aria-expanded={expandedFaq === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                {faq.q}
                <span className="p-tr-faq-icon">{expandedFaq === faq.id ? '−' : '+'}</span>
              </button>
              {expandedFaq === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="p-tr-faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="p-tr-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="p-tr-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close button placed at top inside modal so it always sits top-right */}
            <button className="p-tr-modal-close" type="button" onClick={closeModal} aria-label="Close modal">
              ×
            </button>

            {modalContent?.type === 'book' && (
              <div>
                <h3>Book Your Seat</h3>
                <p><strong>Event:</strong> {modalContent.data.title}</p>
                <p><strong>Trainer:</strong> {modalContent.data.trainer}</p>
                <p><strong>Date:</strong> {modalContent.data.date} at {modalContent.data.time}</p>
                <p><strong>Seats Available:</strong> {modalContent.data.seats}</p>
                <button className="p-tr-cta p-tr-cta--primary" onClick={closeModal}>Confirm Booking</button>
              </div>
            )}
            {modalContent?.type === 'enroll' && (
              <div>
                <h3>Enroll in {modalContent.data.name}</h3>
                <p>{modalContent.data.short}</p>
                <p><strong>Duration:</strong> {modalContent.data.duration}</p>
                <button className="p-tr-cta p-tr-cta--primary" onClick={closeModal}>Confirm Enrollment</button>
              </div>
            )}
            {modalContent?.type === 'mentor' && (
              <div>
                <h3>Book Mentor Session</h3>
                <p><strong>Mentor:</strong> {modalContent.data.name}</p>
                <p><strong>Role:</strong> {modalContent.data.role}</p>
                <button className="p-tr-cta p-tr-cta--primary" onClick={closeModal}>Book Session</button>
              </div>
            )}
            {modalContent?.type === 'register' && (
              <div>
                <h3>Register for Training</h3>
                <p>Fill out your details to register for placement training programs.</p>
                <button className="p-tr-cta p-tr-cta--primary" onClick={closeModal}>Submit Registration</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacementTraining;
