// Recruiters.jsx
import React, { useState } from 'react';
import Footer from './Footer';
import campusBackground from '../assets/Subtract.png';
import '../Styles/Recruiters.css';

const Recruiters = () => {
  const [activeCategory, setActiveCategory] = useState('software');

  const companyLogos = {
    core: [
      { name: 'L&T', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Larsen_%26_Toubro_logo.svg/200px-Larsen_%26_Toubro_logo.svg.png' },
      { name: 'Tata Steel', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Tata_Steel_Logo.svg/200px-Tata_Steel_Logo.svg.png' },
      { name: 'BHEL', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Bharat_Heavy_Electricals_Limited_logo.svg/200px-Bharat_Heavy_Electricals_Limited_logo.svg.png' },
      { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/200px-Siemens-logo.svg.png' },
      { name: 'ABB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/200px-ABB_logo.svg.png' },
      { name: 'Schneider Electric', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Schneider_Electric_logo.svg/200px-Schneider_Electric_logo.svg.png' },
      { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logotype.svg/200px-Bosch-logotype.svg.png' },
      { name: 'Ashok Leyland', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ashok_Leyland_Logo.svg/200px-Ashok_Leyland_Logo.svg.png' },
      { name: 'Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Mahindra_Rise_logo.svg/200px-Mahindra_Rise_logo.svg.png' },
      { name: 'Voltas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Voltas_logo.svg/200px-Voltas_logo.svg.png' },
      { name: 'NTPC', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/NTPC_Logo.svg/200px-NTPC_Logo.svg.png' },
      { name: 'GAIL', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/GAIL_Logo.svg/200px-GAIL_Logo.svg.png' }
    ],
    software: [
      { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/200px-Tata_Consultancy_Services_Logo.svg.png' },
      { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png' },
      { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/200px-Wipro_Primary_Logo_Color_RGB.svg.png' },
      { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cognizant_logo_2022.svg/200px-Cognizant_logo_2022.svg.png' },
      { name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tech_Mahindra_New_Logo.svg/200px-Tech_Mahindra_New_Logo.svg.png' },
      { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/HCLTech_logo.svg/200px-HCLTech_logo.svg.png' },
      { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/200px-Accenture.svg.png' },
      { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Capgemini_201x_logo.svg/200px-Capgemini_201x_logo.svg.png' },
      { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png' },
      { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/200px-Oracle_logo.svg.png' },
      { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png' },
      { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png' },
      { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
      { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/200px-SAP_2011_logo.svg.png' },
      { name: 'Zoho', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Zoho_Logo.svg/200px-Zoho_Logo.svg.png' },
      { name: 'Freshworks', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Freshworks_logo.svg/200px-Freshworks_logo.svg.png' }
    ],
    management: [
      { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/200px-Deloitte.svg.png' },
      { name: 'EY', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/EY_logo_2019.svg/200px-EY_logo_2019.svg.png' },
      { name: 'PwC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PwC_Logo.svg/200px-PwC_Logo.svg.png' },
      { name: 'KPMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_logo.svg/200px-KPMG_logo.svg.png' },
      { name: 'McKinsey', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/MC_Wordmark_Black_RGB.png/200px-MC_Wordmark_Black_RGB.png' },
      { name: 'BCG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BCG_Corporate_Logo.svg/200px-BCG_Corporate_Logo.svg.png' },
      { name: 'Bain', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bain_%26_Company_logo.svg/200px-Bain_%26_Company_logo.svg.png' },
      { name: 'Gartner', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Gartner_logo.svg/200px-Gartner_logo.svg.png' },
      { name: 'Aon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Aon_Corporation_logo.svg/200px-Aon_Corporation_logo.svg.png' },
      { name: 'Marsh', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Marsh_%26_McLennan_Companies_logo.svg/200px-Marsh_%26_McLennan_Companies_logo.svg.png' },
      { name: 'Accenture Strategy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/200px-Accenture.svg.png' },
      { name: 'Cognizant Consulting', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cognizant_logo_2022.svg/200px-Cognizant_logo_2022.svg.png' }
    ]
  };

  const allLogos = [...companyLogos.software, ...companyLogos.core, ...companyLogos.management];

  return (
    <div className="recruiters-page">
     {/* Hero Section */}
                       <section className="hero-section">
                         <div className="hero-background">
                           <img src={campusBackground} alt="Campus Background" className="hero-bg-image" />
                         </div>
                 
                         <div className="hero-content">
                 
                           {/* Hero Text */}
                           <div className="hero-text">
                             <h1 className="hero-title">Recruiters</h1>
                             <div className="breadcrumb"><a href="/" style={{ textDecoration:"none", color:"white"}}>Home</a> &gt; <a href="/placements" style={{ textDecoration:"none", color:"white"}}>Placements</a>
                             {" "}
                         &gt;{" "}
                         <a href="/placement-excellence" style={{ textDecoration: "none", color: "#f4b400" }}>
                           Recruiters
                         </a></div>
                             <p className="hero-description">
                               If you are passionate and driven, explore our current openings across
                               Hindusthan Institutions and apply.
                             </p>
                           </div>
                         </div>
                       </section>

      <section className="placement-overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop" alt="Campus Recruitment" />
            </div>
            <div className="overview-text">
              <h2>College Placement</h2>
              <p>The Placement and Career Development Cell at our institution is committed to fostering strong industry connections and preparing students for successful professional careers. As a newly established college, we are dedicated to building a robust network of corporate partnerships that will provide our students with diverse opportunities across various sectors.</p>
              <p>Our vision is to create a dynamic ecosystem where academic excellence meets industry requirements. We focus on developing industry-ready skills through comprehensive training programs, workshops, and exposure to real-world challenges. Our curriculum is designed in consultation with industry experts to ensure our graduates possess the competencies that employers seek.</p>
              <p>We are actively engaging with leading organizations across core engineering, software development, and management sectors to establish long-term recruitment partnerships. Our commitment extends to facilitating internships, industrial visits, and collaborative projects that provide students with hands-on experience and professional networking opportunities from their early academic years.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="recruiters-list-section">
        <div className="container">
          <h2 className="section-title">Recruiters Company List</h2>
          <div className="category-tabs">
            <button 
              className={`tab-button ${activeCategory === 'core' ? 'active' : ''}`}
              onClick={() => setActiveCategory('core')}
            >
              Core Companies
            </button>
            <button 
              className={`tab-button ${activeCategory === 'software' ? 'active' : ''}`}
              onClick={() => setActiveCategory('software')}
            >
              Software Companies
            </button>
            <button 
              className={`tab-button ${activeCategory === 'management' ? 'active' : ''}`}
              onClick={() => setActiveCategory('management')}
            >
              Management Companies
            </button>
          </div>
          <div className="companies-grid">
            {companyLogos[activeCategory].map((company, index) => (
              <div key={index} className="company-card">
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="logo-loop-section">
        <div className="logo-loop-container">
          <div className="logo-loop">
            {[...allLogos, ...allLogos].map((company, index) => (
              <div key={index} className="loop-logo">
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recruiters;