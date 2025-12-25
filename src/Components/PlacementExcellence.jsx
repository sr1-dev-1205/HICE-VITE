// PlacementExcellence.jsx
import React, { useEffect, useRef } from 'react';
import '../Styles/PlacementExcellence.css';
import campusBackground from '../assets/Subtract.png';
import Footer from './Footer';
const PlacementExcellence = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pe-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.pe-animate').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="pe-container">
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

      {/* Vision Section */}
      <section className="pe-section pe-vision">
        <div className="pe-content-wrapper">
          <div className="pe-animate">
  <h2 className="pe-section-title">Our Commitment to Career Readiness</h2>

  <p className="pe-vision-text">
    As a new institution, we are building our placement framework on strong foundations with an industry-aligned curriculum, skill-based learning, and ethical preparation from day one. Our vision extends beyond placement numbers — we aim to nurture competent, confident professionals who can contribute meaningfully to the industry and society. We focus on developing technical abilities, communication skills, leadership qualities, and real-world problem-solving through guided mentoring and structured training. By working closely with industry experts, academic mentors, and corporate partners, we ensure that every student receives relevant exposure, internship opportunities, and a clear progression towards employability. As we continue to expand our training ecosystem, strengthen our recruiter network, and enhance our learning methodologies, our commitment remains the same: to empower every student with the confidence, clarity, and capability to build a successful and purposeful career.
  </p>
</div>

        </div>
      </section>

      {/* Industry Readiness Framework */}
      <section className="pe-section pe-framework">
        <div className="pe-content-wrapper">
          <h2 className="pe-section-title pe-animate">Industry Readiness Framework</h2>
          <div className="pe-framework-grid">
            <div className="pe-card pe-animate">
              <div className="pe-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="pe-card-title">Industry-Oriented Curriculum</h3>
              <p className="pe-card-text">
                Our curriculum is designed in consultation with industry needs, ensuring relevance 
                and practical applicability in real-world scenarios.
              </p>
            </div>

            <div className="pe-card pe-animate">
              <div className="pe-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="pe-card-title">Skill-Based Learning</h3>
              <p className="pe-card-text">
                Focus on developing both technical expertise and soft skills through hands-on 
                learning, workshops, and continuous assessment.
              </p>
            </div>

            <div className="pe-card pe-animate">
              <div className="pe-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="pe-card-title">Project-Driven Education</h3>
              <p className="pe-card-text">
                Students work on real-world projects throughout their academic journey, building 
                portfolios that showcase their capabilities.
              </p>
            </div>

            <div className="pe-card pe-animate">
              <div className="pe-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="pe-card-title">Certification Pathways</h3>
              <p className="pe-card-text">
                Opportunities for students to earn industry-recognized certifications alongside 
                their degree programs, enhancing employability.
              </p>
            </div>
            <div className="pe-card pe-animate">
  <div className="pe-card-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 7h18M3 12h18M3 17h18M6 7v10M18 7v10" />
    </svg>
  </div>
  <h3 className="pe-card-title">Career Mapping & Guidance</h3>
  <p className="pe-card-text">
    Structured guidance that helps students identify strengths, select the right path, and
    plan their career trajectory with clarity and confidence.
  </p>
</div>

<div className="pe-card pe-animate">
  <div className="pe-card-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l2.09 6.26H21l-5.17 3.76L17.91 21 12 16.77 6.09 21l1.08-7.98L2 9.26h6.91L12 3z" />
    </svg>
  </div>
  <h3 className="pe-card-title">Recruiter & Industry Connect</h3>
  <p className="pe-card-text">
    Expansion of partnerships with companies to increase placement opportunities, internships,
    and interview-driven engagement.
  </p>
</div>

          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="pe-section pe-training">
        <div className="pe-content-wrapper">
          <div className="pe-training-content pe-animate">
            <h2 className="pe-section-title">Our Training Philosophy</h2>
            <p className="pe-training-text">
              We believe in holistic development that prepares students for professional excellence. 
              Our training framework focuses on building capabilities gradually and systematically.
            </p>
            <div className="pe-training-areas">
              <div className="pe-training-item">
                <h4>Technical Proficiency</h4>
                <p>Deep understanding of core concepts and emerging technologies</p>
              </div>
              <div className="pe-training-item">
                <h4>Communication Skills</h4>
                <p>Effective verbal and written communication for professional settings</p>
              </div>
              <div className="pe-training-item">
                <h4>Problem-Solving Aptitude</h4>
                <p>Analytical thinking and logical reasoning capabilities</p>
              </div>
              <div className="pe-training-item">
                <h4>Professional Ethics</h4>
                <p>Understanding workplace values, integrity, and responsibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Collaboration Roadmap */}
      <section className="pe-section pe-roadmap">
        <div className="pe-content-wrapper">
          <h2 className="pe-section-title pe-animate">Industry Collaboration Roadmap</h2>
          <div className="pe-timeline">
            <div className="pe-timeline-item pe-animate">
              <div className="pe-timeline-marker"></div>
              <div className="pe-timeline-content">
                <h3>Strategic Partnerships</h3>
                <p>
                  Establishing MoUs with leading companies to create long-term collaboration 
                  frameworks for knowledge sharing and talent development.
                </p>
              </div>
            </div>

            <div className="pe-timeline-item pe-animate">
              <div className="pe-timeline-marker"></div>
              <div className="pe-timeline-content">
                <h3>Internship Pipelines</h3>
                <p>
                  Building structured internship programs that provide students with real-world 
                  experience and industry exposure during their academic journey.
                </p>
              </div>
            </div>

            <div className="pe-timeline-item pe-animate">
              <div className="pe-timeline-marker"></div>
              <div className="pe-timeline-content">
                <h3>Industry Expert Sessions</h3>
                <p>
                  Regular guest lectures and workshops by industry professionals to bridge the 
                  gap between academic learning and industry practices.
                </p>
              </div>
            </div>

            <div className="pe-timeline-item pe-animate">
              <div className="pe-timeline-marker"></div>
              <div className="pe-timeline-content">
                <h3>Pre-Placement Engagement</h3>
                <p>
                  Continuous interaction with potential recruiters through campus visits, 
                  project collaborations, and talent showcasing events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Recruiters Will Trust Us */}
      <section className="pe-section pe-trust">
        <div className="pe-content-wrapper">
          <h2 className="pe-section-title pe-animate">Why Recruiters Will Trust Us</h2>
          <div className="pe-trust-grid">
            <div className="pe-trust-card pe-animate">
              <h3>Curriculum Quality</h3>
              <p>
                Rigorous academic programs designed to meet industry standards and future 
                technological demands.
              </p>
            </div>
            <div className="pe-trust-card pe-animate">
              <h3>Faculty Mentoring</h3>
              <p>
                Experienced faculty members dedicated to guiding students toward professional 
                excellence and career success.
              </p>
            </div>
            <div className="pe-trust-card pe-animate">
              <h3>Student Discipline</h3>
              <p>
                Strong emphasis on professional ethics, punctuality, and commitment to continuous 
                learning and improvement.
              </p>
            </div>
            <div className="pe-trust-card pe-animate">
              <h3>Industry Exposure</h3>
              <p>
                Regular interactions with industry through projects, visits, and collaborative 
                initiatives that keep students industry-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student-Centric Commitment */}
      <section className="pe-section pe-commitment">
        <div className="pe-content-wrapper">
          <div className="pe-commitment-content pe-animate">
            <h2 className="pe-section-title">Student-Centric Commitment</h2>
            <div className="pe-commitment-grid">
              <div className="pe-commitment-item">
                <div className="pe-commitment-number">01</div>
                <h4>Personalized Mentorship</h4>
                <p>
                  Every student is assigned a faculty mentor who provides guidance on academic 
                  progress, career planning, and personal development throughout their journey.
                </p>
              </div>
              <div className="pe-commitment-item">
                <div className="pe-commitment-number">02</div>
                <h4>Career Guidance</h4>
                <p>
                  Comprehensive career counseling services to help students identify their 
                  strengths, explore opportunities, and make informed career decisions.
                </p>
              </div>
              <div className="pe-commitment-item">
                <div className="pe-commitment-number">03</div>
                <h4>Transparent Process</h4>
                <p>
                  Clear communication about placement procedures, eligibility criteria, and 
                  expectations, ensuring students are well-informed at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <Footer/>
    </div>
  );
};

export default PlacementExcellence;