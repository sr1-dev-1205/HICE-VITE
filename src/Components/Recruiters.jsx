// Recruiters.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Recruiters.css';
import campusBackground from "../Assets/Subtract.png";
import Footer from './Footer';

// Top recruiters (local assets) - put these files in src/Assets/recruiters/
import googleLogo from '../Assets/recruiters/google.jpeg';
import microsoftLogo from '../Assets/recruiters/tcs.png';
import amazonLogo from '../Assets/recruiters/tcs.png';
import tcsLogo from '../Assets/recruiters/tcs.png';
import infosysLogo from '../Assets/recruiters/tcs.png';
import wiproLogo from '../Assets/recruiters/wipro.png';
import accentureLogo from '../Assets/recruiters/accenture.png';
import cognizantLogo from '../Assets/recruiters/tcs.png';
import ibmLogo from '../Assets/recruiters/tcs.png';
import oracleLogo from '../Assets/recruiters/tcs.png';
import adobeLogo from '../Assets/recruiters/tcs.png';
import samsungLogo from '../Assets/recruiters/tcs.png';
import sapLogo from '../Assets/recruiters/tcs.png';

// Core / other sector logos (local)
import lntLogo from '../Assets/recruiters/tcs.png';
import siemensLogo from '../Assets/recruiters/tcs.png';
import boschLogo from '../Assets/recruiters/tcs.png';
import abbLogo from '../Assets/recruiters/tcs.png';
import schneiderLogo from '../Assets/recruiters/tcs.png';
import hitachiLogo from '../Assets/recruiters/tcs.png';

// Consulting logos
import deloitteLogo from '../Assets/recruiters/tcs.png';
import eyLogo from '../Assets/recruiters/tcs.png';
import pwcLogo from '../Assets/recruiters/tcs.png';
import kpmgLogo from '../Assets/recruiters/tcs.png';
import mckinseyLogo from '../Assets/recruiters/tcs.png';
import bcgLogo from '../Assets/recruiters/tcs.png';

// BFSI logos
import iciciLogo from '../Assets/recruiters/tcs.png';
import hdfcLogo from '../Assets/recruiters/tcs.png';
import axisLogo from '../Assets/recruiters/tcs.png';
import jpmLogo from '../Assets/recruiters/tcs.png';
import gsLogo from '../Assets/recruiters/tcs.png';
import morganLogo from '../Assets/recruiters/tcs.png';

// Product / startup logos
import flipkartLogo from '../Assets/recruiters/tcs.png';
import paytmLogo from '../Assets/recruiters/tcs.png';
import zomatoLogo from '../Assets/recruiters/tcs.png';
import swiggyLogo from '../Assets/recruiters/tcs.png';
import oyoLogo from '../Assets/recruiters/tcs.png';
import olaLogo from '../Assets/recruiters/tcs.png';
import razorpayLogo from '../Assets/recruiters/tcs.png';
import freshworksLogo from '../Assets/recruiters/tcs.png';
import zohoLogo from '../Assets/recruiters/tcs.png';
import phonepeLogo from '../Assets/recruiters/tcs.png';
import credLogo from '../Assets/recruiters/tcs.png';
import byjusLogo from '../Assets/recruiters/tcs.png';

// Testimonial photos (local)
import testPhoto1 from '../Assets/recruiters/tcs.png';
import testPhoto2 from '../Assets/recruiters/tcs.png';
import testPhoto3 from '../Assets/recruiters/tcs.png';
import testPhoto4 from '../Assets/recruiters/tcs.png';

// MOU partner logos (local)
import intelLogo from '../Assets/recruiters/tcs.png';
import ciscoLogo from '../Assets/recruiters/tcs.png';
import awsLogo from '../Assets/recruiters/tcs.png';
import redhatLogo from '../Assets/recruiters/tcs.png';

// Person fallback if needed
import personPlaceholder from '../Assets/person.jpeg';

const Recruiters = () => {
  const [activeYear, setActiveYear] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [salaryCounters, setSalaryCounters] = useState({
    highest: 0,
    average: 0,
    median: 0,
    top10: 0
  });

  const topRecruiters = [
    { name: 'Google', logo: googleLogo },
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'TCS', logo: tcsLogo },
    { name: 'Infosys', logo: infosysLogo },
    { name: 'Wipro', logo: wiproLogo },
    { name: 'Accenture', logo: accentureLogo },
    { name: 'Cognizant', logo: cognizantLogo },
    { name: 'IBM', logo: ibmLogo },
    { name: 'Oracle', logo: oracleLogo },
    { name: 'Adobe', logo: adobeLogo },
    { name: 'Samsung', logo: samsungLogo }
  ];

  const categories = [
    {
      id: 'it',
      title: 'IT & Software',
      description: 'Leading tech giants and innovative startups',
      badge: 'Top Hiring Sector',
      companies: [
        { name: 'Google', logo: googleLogo },
        { name: 'Microsoft', logo: microsoftLogo },
        { name: 'Amazon', logo: amazonLogo },
        { name: 'Adobe', logo: adobeLogo },
        { name: 'Oracle', logo: oracleLogo },
        { name: 'SAP', logo: sapLogo }
      ]
    },
    {
      id: 'core',
      title: 'Core Engineering',
      description: 'Manufacturing and industrial leaders',
      companies: [
        { name: 'L&T', logo: lntLogo },
        { name: 'Siemens', logo: siemensLogo },
        { name: 'Bosch', logo: boschLogo },
        { name: 'ABB', logo: abbLogo },
        { name: 'Schneider', logo: schneiderLogo },
        { name: 'Hitachi', logo: hitachiLogo }
      ]
    },
    {
      id: 'consulting',
      title: 'Consulting & Analytics',
      description: 'Strategic consulting and data science firms',
      companies: [
        { name: 'Deloitte', logo: deloitteLogo },
        { name: 'EY', logo: eyLogo },
        { name: 'PwC', logo: pwcLogo },
        { name: 'KPMG', logo: kpmgLogo },
        { name: 'McKinsey', logo: mckinseyLogo },
        { name: 'BCG', logo: bcgLogo }
      ]
    },
    {
      id: 'bfsi',
      title: 'BFSI',
      description: 'Banking, financial services, and insurance',
      companies: [
        { name: 'ICICI Bank', logo: iciciLogo },
        { name: 'HDFC Bank', logo: hdfcLogo },
        { name: 'Axis Bank', logo: axisLogo },
        { name: 'JPMorgan', logo: jpmLogo },
        { name: 'Goldman Sachs', logo: gsLogo },
        { name: 'Morgan Stanley', logo: morganLogo }
      ]
    },
    {
      id: 'product',
      title: 'Product Companies',
      description: 'Innovative product development companies',
      badge: 'High Growth',
      companies: [
        { name: 'Flipkart', logo: flipkartLogo },
        { name: 'Paytm', logo: paytmLogo },
        { name: 'Zomato', logo: zomatoLogo },
        { name: 'Swiggy', logo: swiggyLogo },
        { name: 'OYO', logo: oyoLogo },
        { name: 'Ola', logo: olaLogo }
      ]
    },
    {
      id: 'startups',
      title: 'Emerging Startups',
      description: 'Fast-growing innovative startups',
      companies: [
        { name: 'Razorpay', logo: razorpayLogo },
        { name: 'Freshworks', logo: freshworksLogo },
        { name: 'Zoho', logo: zohoLogo },
        { name: 'PhonePe', logo: phonepeLogo },
        { name: 'CRED', logo: credLogo },
        { name: "Byju's", logo: byjusLogo }
      ]
    }
  ];

  const yearwiseRecruiters = [
    {
      year: '2024',
      totalRecruiters: 245,
      newRecruiters: 68,
      returningRecruiters: 177,
      companies: topRecruiters.slice(0, 8)
    },
    {
      year: '2023',
      totalRecruiters: 218,
      newRecruiters: 52,
      returningRecruiters: 166,
      companies: topRecruiters.slice(0, 6)
    },
    {
      year: '2022',
      totalRecruiters: 195,
      newRecruiters: 45,
      returningRecruiters: 150,
      companies: topRecruiters.slice(0, 5)
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      designation: 'Senior HR Manager',
      company: 'Google India',
      photo: testPhoto1 || personPlaceholder,
      quote: 'The students from this institution consistently demonstrate exceptional technical skills and a strong work ethic.',
      fullQuote: 'The students from this institution consistently demonstrate exceptional technical skills and a strong work ethic. We have been recruiting from this college for the past 5 years, and the quality of talent continues to impress us. Their problem-solving abilities and adaptability make them valuable assets to our teams.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      designation: 'Talent Acquisition Lead',
      company: 'Microsoft',
      photo: testPhoto2 || personPlaceholder,
      quote: 'One of our top partner institutions for campus hiring. The placement cell is highly professional and supportive.',
      fullQuote: 'One of our top partner institutions for campus hiring. The placement cell is highly professional and supportive. The students are well-prepared, possess excellent communication skills, and show great enthusiasm for innovation. We look forward to continued collaboration.'
    },
    {
      id: 3,
      name: 'Anil Mehta',
      designation: 'VP - Human Resources',
      company: 'Infosys',
      photo: testPhoto3 || personPlaceholder,
      quote: 'Strong industry-academic collaboration. Students are industry-ready with practical exposure and domain knowledge.',
      fullQuote: 'Strong industry-academic collaboration. Students are industry-ready with practical exposure and domain knowledge. The curriculum alignment with industry needs is commendable. We have hired over 200 students in the last three years with excellent retention rates.'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      designation: 'Campus Hiring Head',
      company: 'Amazon',
      photo: testPhoto4 || personPlaceholder,
      quote: 'Exceptional talent pool with strong fundamentals. The students showcase great potential for growth and leadership.',
      fullQuote: 'Exceptional talent pool with strong fundamentals. The students showcase great potential for growth and leadership. Their technical depth combined with soft skills makes them stand out. We have seen many of them grow into leadership roles within a few years.'
    }
  ];

  const trustFactors = [
    { icon: '🎓', title: 'Strong Fundamentals', description: 'Rigorous academic curriculum with emphasis on core concepts' },
    { icon: '💬', title: 'Communication Skills', description: 'Dedicated training in professional communication and presentation' },
    { icon: '🔧', title: 'Industry Curriculum', description: 'Regular curriculum updates aligned with industry requirements' },
    { icon: '🏭', title: 'Advanced Labs', description: 'State-of-the-art laboratories and research facilities' },
    { icon: '🤝', title: 'Internship Pipeline', description: 'Strong internship programs with leading companies' },
    { icon: '📈', title: 'High Retention', description: '92% of placed students complete probation successfully' }
  ];

  const mouPartners = [
    { name: 'Intel', logo: intelLogo, type: 'R&D Partnership' },
    { name: 'Cisco', logo: ciscoLogo, type: 'Networking Academy' },
    { name: 'IBM', logo: ibmLogo, type: 'AI Center of Excellence' },
    { name: 'AWS', logo: awsLogo, type: 'Cloud Training' },
    { name: 'RedHat', logo: redhatLogo, type: 'Linux Certification' },
    { name: 'SAP', logo: sapLogo, type: 'ERP Training' }
  ];

  const salaryStats = {
    highest: 45.5,
    average: 8.2,
    median: 6.5,
    top10: 18.5
  };

  const trendData = [
    { year: '2020', count: 165 },
    { year: '2021', count: 178 },
    { year: '2022', count: 195 },
    { year: '2023', count: 218 },
    { year: '2024', count: 245 }
  ];

  const scrollRef = useRef(null);
  const salaryRef = useRef(null);
  const trendRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('p-rec-visible');
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.p-rec-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };

    const animateCounter = (key, target) => {
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setSalaryCounters(prev => ({ ...prev, [key]: current }));
      }, 20);
    };

    const salaryObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounter('highest', salaryStats.highest);
        animateCounter('average', salaryStats.average);
        animateCounter('median', salaryStats.median);
        animateCounter('top10', salaryStats.top10);
      }
    }, observerOptions);

    if (salaryRef.current) salaryObserver.observe(salaryRef.current);
    return () => salaryObserver.disconnect();
  }, []);

  const toggleYear = (year) => {
    setActiveYear(activeYear === year ? null : year);
  };

  const openTestimonial = (testimonial) => {
    setSelectedTestimonial(testimonial);
    document.body.style.overflow = 'hidden';
  };

  const closeTestimonial = () => {
    setSelectedTestimonial(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="p-rec-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Our Recruiters</h1>
            <div className="breadcrumb">
              <a href="/" style={{ textDecoration:"none", color:"white"}}>Home</a> &gt; <a href="/about-us" style={{ textDecoration:"none", color:"white"}}>Placements</a> &gt; <a href="/aboutTrust" style={{ textDecoration: "none", color: "#f4b400" }}>Our Recruiters</a>
            </div>
            <p className="hero-description">
              Empowering careers through industry partnerships, comprehensive training, and exceptional placement opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Top Recruiters Marquee */}
      <section className="p-rec-marquee">
        <div className="p-rec-marquee-track">
          {[...topRecruiters, ...topRecruiters].map((recruiter, idx) => (
            <div key={idx} className="p-rec-marquee-item" tabIndex="0">
              <img src={recruiter.logo} alt={recruiter.name} />
            </div>
          ))}
        </div>
      </section>

      {/* Recruiters by Category */}
      <section className="p-rec-categories p-rec-reveal">
        <div className="p-rec-section-header">
          <h2>Recruiters by Industry</h2>
          <p>Diverse opportunities across multiple sectors and domains</p>
        </div>
        <div className="p-rec-categories-grid">
          {categories.map(category => (
            <div key={category.id} className="p-rec-category-block">
              {category.badge && (
                <span className="p-rec-category-badge">{category.badge}</span>
              )}
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="p-rec-category-logos">
                {category.companies.map((company, idx) => (
                  <div key={idx} className="p-rec-category-logo">
                    <img src={company.logo} alt={company.name} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Year-wise Recruiter Participation */}
      <section className="p-rec-yearwise p-rec-reveal">
        <div className="p-rec-section-header">
          <h2>Year-wise Recruiter Participation</h2>
          <p>Consistent growth in recruiter engagement and diversity</p>
        </div>
        <div className="p-rec-yearwise-blocks">
          {yearwiseRecruiters.map(yearData => (
            <div key={yearData.year} className="p-rec-year-block">
              <div
                className="p-rec-year-header"
                onClick={() => toggleYear(yearData.year)}
                role="button"
                tabIndex="0"
                aria-expanded={activeYear === yearData.year}
              >
                <h3>{yearData.year}</h3>
                <div className="p-rec-year-stats">
                  <span className="p-rec-year-stat">
                    <strong>{yearData.totalRecruiters}</strong> Total
                  </span>
                  <span className="p-rec-year-stat p-rec-stat-new">
                    <strong>{yearData.newRecruiters}</strong> New
                  </span>
                  <span className="p-rec-year-stat p-rec-stat-returning">
                    <strong>{yearData.returningRecruiters}</strong> Returning
                  </span>
                </div>
                <span className={`p-rec-year-toggle ${activeYear === yearData.year ? 'p-rec-active' : ''}`}>
                  ▼
                </span>
              </div>
              {activeYear === yearData.year && (
                <div className="p-rec-year-content">
                  <div className="p-rec-year-logos">
                    {yearData.companies.map((company, idx) => (
                      <div key={idx} className="p-rec-year-logo">
                        <img src={company.logo} alt={company.name} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* HR Testimonials */}
      <section className="p-rec-testimonials p-rec-reveal">
        <div className="p-rec-section-header">
          <h2>What Recruiters Say</h2>
          <p>Feedback from our hiring partners and industry leaders</p>
        </div>
        <div className="p-rec-testimonials-grid">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="p-rec-testimonial-card"
              onClick={() => openTestimonial(testimonial)}
              role="button"
              tabIndex="0"
            >
              <div className="p-rec-testimonial-photo">
                <img src={testimonial.photo} alt={testimonial.name} />
              </div>
              <div className="p-rec-testimonial-content">
                <p className="p-rec-testimonial-quote">"{testimonial.quote}"</p>
                <div className="p-rec-testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.designation}</p>
                  <p className="p-rec-testimonial-company">{testimonial.company}</p>
                </div>
              </div>
              <span className="p-rec-testimonial-expand">Read More →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Recruiters Trust Us */}
      <section className="p-rec-trust p-rec-reveal">
        <div className="p-rec-section-header">
          <h2>Why Recruiters Choose Us</h2>
          <p>Our commitment to excellence and industry readiness</p>
        </div>
        <div className="p-rec-trust-grid">
          {trustFactors.map((factor, idx) => (
            <div key={idx} className="p-rec-trust-card">
              <div className="p-rec-trust-icon">{factor.icon}</div>
              <h3>{factor.title}</h3>
              <p>{factor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Salary Snapshot */}
      <section className="p-rec-salary p-rec-reveal" ref={salaryRef}>
        <div className="p-rec-section-header">
          <h2>Placement Statistics</h2>
          <p>CTC insights and salary trends for 2024 batch</p>
        </div>
        <div className="p-rec-salary-grid">
          <div className="p-rec-salary-card">
            <div className="p-rec-salary-icon">🏆</div>
            <h3>Highest Package</h3>
            <div className="p-rec-salary-amount">
              ₹ {salaryCounters.highest.toFixed(1)} <span>LPA</span>
            </div>
            <div className="p-rec-salary-bar" style={{ '--progress': '100%' }}></div>
          </div>
          <div className="p-rec-salary-card">
            <div className="p-rec-salary-icon">📊</div>
            <h3>Average Package</h3>
            <div className="p-rec-salary-amount">
              ₹ {salaryCounters.average.toFixed(1)} <span>LPA</span>
            </div>
            <div className="p-rec-salary-bar" style={{ '--progress': '55%' }}></div>
          </div>
          <div className="p-rec-salary-card">
            <div className="p-rec-salary-icon">📈</div>
            <h3>Median Package</h3>
            <div className="p-rec-salary-amount">
              ₹ {salaryCounters.median.toFixed(1)} <span>LPA</span>
            </div>
            <div className="p-rec-salary-bar" style={{ '--progress': '45%' }}></div>
          </div>
          <div className="p-rec-salary-card">
            <div className="p-rec-salary-icon">⭐</div>
            <h3>Top 10% Average</h3>
            <div className="p-rec-salary-amount">
              ₹ {salaryCounters.top10.toFixed(1)} <span>LPA</span>
            </div>
            <div className="p-rec-salary-bar" style={{ '--progress': '75%' }}></div>
          </div>
        </div>
      </section>

      {/* Hiring Trend Overview */}
      <section className="p-rec-trends p-rec-reveal" ref={trendRef}>
        <div className="p-rec-section-header">
          <h2>Hiring Growth Trend</h2>
          <p>Year-on-year increase in recruiter participation</p>
        </div>
        <div className="p-rec-trends-chart">
          {trendData.map((data, idx) => (
            <div key={idx} className="p-rec-trend-bar-wrapper">
              <div
                className="p-rec-trend-bar"
                style={{ '--height': `${(data.count / 245) * 100}%` }}
              >
                <span className="p-rec-trend-value">{data.count}</span>
              </div>
              <span className="p-rec-trend-year">{data.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Partnerships & MOU */}
      <section className="p-rec-mou p-rec-reveal">
        <div className="p-rec-section-header">
          <h2>Industry Partnerships</h2>
          <p>Strategic collaborations for research, training, and innovation</p>
        </div>
        <div className="p-rec-mou-grid">
          {mouPartners.map((partner, idx) => (
            <div key={idx} className="p-rec-mou-card">
              <img src={partner.logo} alt={partner.name} />
              <span className="p-rec-mou-type">{partner.type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiter Resources */}
      <section className="p-rec-downloads p-rec-reveal">
        <div className="p-rec-section-header">
          <h2>Recruiter Resources</h2>
          <p>Download essential documents and forms</p>
        </div>
        <div className="p-rec-downloads-grid">
          <button className="p-rec-download-card">
            <span className="p-rec-download-icon">📄</span>
            <h3>Recruiter Brochure</h3>
            <p>Complete overview of our programs and facilities</p>
          </button>
          <button className="p-rec-download-card">
            <span className="p-rec-download-icon">📘</span>
            <h3>Placement Handbook</h3>
            <p>Detailed placement process and guidelines</p>
          </button>
          <button className="p-rec-download-card">
            <span className="p-rec-download-icon">📋</span>
            <h3>Policy Document</h3>
            <p>Placement policies and procedures</p>
          </button>
          <button className="p-rec-download-card">
            <span className="p-rec-download-icon">✍️</span>
            <h3>Registration Form</h3>
            <p>Company registration for campus recruitment</p>
          </button>
        </div>
      </section>

      <Footer />

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div
          className="p-rec-modal-overlay"
          onClick={closeTestimonial}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="p-rec-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="p-rec-modal-close"
              onClick={closeTestimonial}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="p-rec-modal-header">
              <img src={selectedTestimonial.photo} alt={selectedTestimonial.name} />
              <div>
                <h3>{selectedTestimonial.name}</h3>
                <p>{selectedTestimonial.designation}</p>
                <p className="p-rec-modal-company">{selectedTestimonial.company}</p>
              </div>
            </div>
            <div className="p-rec-modal-body">
              <p>"{selectedTestimonial.fullQuote}"</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recruiters;
