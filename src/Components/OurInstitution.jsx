import React from "react";
import "../Styles/OurInstitution.css";
import "../Styles/OurInstitutionResponsive.css"
import campusBackground from "../Assets/Background.png";
import LeftImage from "../Assets/OurInstituition/lab.jpg";
import LeftImage1 from "../Assets/OurInstituition/library.jpg";
import TrustVector from "../Assets/Vector.png";
import crown from "../Assets/Vector/Crown.png";
import Footer from "./Footer";
import HicetImg from '../Assets/OurInstituition/library.jpg'

const OurInstitution = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="oi-hero-section">
        <div className="oi-hero-background">
          <img
            src={campusBackground}
            alt="Campus Background"
            className="oi-hero-bg-image"
          />
        </div>

        <div className="oi-hero-content">
          <div className="oi-hero-text">
            <h1 className="oi-hero-title">About Us</h1>
            <div className="oi-breadcrumb">
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </a>{" "}
              &gt;{" "}
              <a href="#" style={{ textDecoration: "none", color: "#f4b400" }}>
                About Us
              </a>
            </div>
            <p className="oi-hero-description">
              If you are passionate and driven, explore our current openings
              across Hindusthan Institutions and apply.
            </p>
          </div>
        </div>
      </section>

       <section className="oi-why-section">
              <h2 className="oi-why-title"  data-aos="fade-up">
                 <span className="oi-highlight">|</span> OUR INSTITUTIONS
               </h2>
           <div className="oi-why-container">
             {/* Left Side Image */}
             <div className="oi-why-left" data-aos="fade-right">
               <div className="oi-why-left-top">
               <img src={LeftImage} alt="Why Hindusthan" /></div>
               <div className="oi-why-left-bottom">
               <img src={LeftImage1} alt="Why Hindusthan" /></div>
               <div className="oi-why-right-bottom">
               <img src={TrustVector} alt="Why Hindusthan" /></div>
             </div>
     
             {/* Right Side Content */}
             <div className="oi-why-right" data-aos="fade-right">
              
               <p>
                Hindusthan is known for its strong academic foundation combined with modern infrastructure. 
                The institution provides a student-friendly environment where learning goes beyond books and classrooms.
               </p>
               <p>
                The college encourages innovation, research, and skill development 
                through practical exposure. With state-of-the-art labs, industry tie-ups, and
                 experienced faculty, students get real-world learning opportunities.
                 This prepares them to face global challenges with the right skills.
               </p>
               <p>Beyond academics, Hindusthan supports cultural, sports, and extracurricular activities to shape overall personality. 
                 The campus life is vibrant, inclusive, and motivating, making students 
                 feel at home while growing professionally. That's why Hindusthan is a preferred choice for many.</p>
             </div>
           </div>
         </section>

      {/* Courses Section */}
      <div className="oi-courses-container">
        <div className="oi-courses-card">
          <h3>Foundation And Vision</h3>
          <ul>
            <li>
              To provide an intellectual environment that fosters the search for
              new knowledge in a highly dynamic computing world and to fine-tune
              graduate research attributes.
            </li>
          </ul>
        </div>
        <div className="oi-courses-card">
          <h3>Entry Requirements</h3>
          <ul>
            <li>
              The student must have passed Class 12th from a recognised board.
            </li>
            <li>
              Students from any recognized stream (Science, Commerce, Arts) are
              eligible.
            </li>
          </ul>
        </div>
        <div className="oi-courses-card">
          <h3>Course Duration And Intake</h3>
          <ul>
            <li>3 Years</li>
            <li>180 Intakes</li>
          </ul>
        </div>
        <div className="oi-courses-card">
          <h3>Industry Recognition</h3>
          <ul>
            <li>
              Our BCA course is recognised by DBT Star college scheme. We also
              have an Industry Integrated Course with GOOGLE Technologies.
            </li>
          </ul>
        </div>
        <div className="oi-courses-center-icon">
          <span>
            <img src={crown} alt="Crown" />
          </span>
        </div>
      </div>

       <section className="oi-institutions-wrapper">
      {/* HICAS Section */}
      <div className="oi-institution">
        <div className="oi-institution-header oi-left-border">
          <h2>
            HINDUSTHAN COLLEGE OF ARTS & SCIENCE (HICAS),
            <br />
            COIMBATORE
          </h2>
        </div>

        <div className="oi-institution-content">
          <div className="oi-institution-image oi-left">
            <img src={HicetImg} alt="HICAS visual" />
          </div>

          <div className="oi-institution-text oi-right">
            <ul>
              <li>
                <strong>1998:</strong> Founded with an intake of 144 students,
                HICAS has grown to accommodate over 9,300 students annually
                across various academic programs.
              </li>
              <li>
                <strong>2015:</strong> Achieved autonomous status, allowing the
                institution to design its own curriculum and conduct
                examinations independently, while still awarding degrees
                conferred by Bharathiar University.
              </li>
              <li>
                <strong>2021:</strong> Launched the Hindusthan International
                Research Academy (HIRA), a significant milestone in fostering
                research and innovation.
              </li>
              <li>
                <strong>2024:</strong> Organized a Faculty Development Programme
                on Emotional Intelligence and Resiliency in Higher Education,
                emphasizing the institution's commitment to faculty development.
              </li>
            </ul>
          </div>
        </div>
      </div>



      {/* HIT Section */}
      <div className="oi-institution oi-reverse">
        <div className="oi-institution-header oi-right-border">
          <h2>
            HINDUSTHAN INSTITUTE OF TECHNOLOGY (HIT),
            <br />
            COIMBATORE
          </h2>
        </div>

        <div className="oi-institution-content oi-reverse">
          <div className="oi-institution-text oi-left">
            <ul>
              <li>
                <strong>Academic Excellence:</strong> HITECH is affiliated with
                Anna University and recognized by AICTE. It holds NBA and NAAC
                'A' grade accreditation, reflecting its quality education.
              </li>
              <li>
                <strong>Infrastructure Development:</strong> The campus features
                modern classrooms, laboratories, library, sports facilities,
                hostels, and transportation. It provides a conducive environment
                for learning and growth.
              </li>
              <li>
                <strong>Industry Collaboration & Placements:</strong> HITECH has
                partnerships with leading industries for internships and
                placements, ensuring successful recruitment and strong
                industry-oriented skills.
              </li>
            </ul>
          </div>

          <div className="oi-institution-image oi-right">
            <img src={HicetImg} alt="HIT visual" />
          </div>
          
        </div>
      </div>
        <div className="oi-institution">
        <div className="oi-institution-header oi-left-border">
          <h2>
            HINDUSTHAN COLLEGE OF ARTS & SCIENCE (HICAS),
            <br />
            COIMBATORE
          </h2>
        </div>

        <div className="oi-institution-content">
          <div className="oi-institution-image oi-left">
            <img src={HicetImg} alt="HICAS visual" />
          </div>

          <div className="oi-institution-text oi-right">
            <ul>
              <li>
                <strong>1998:</strong> Founded with an intake of 144 students,
                HICAS has grown to accommodate over 9,300 students annually
                across various academic programs.
              </li>
              <li>
                <strong>2015:</strong> Achieved autonomous status, allowing the
                institution to design its own curriculum and conduct
                examinations independently, while still awarding degrees
                conferred by Bharathiar University.
              </li>
              <li>
                <strong>2021:</strong> Launched the Hindusthan International
                Research Academy (HIRA), a significant milestone in fostering
                research and innovation.
              </li>
              <li>
                <strong>2024:</strong> Organized a Faculty Development Programme
                on Emotional Intelligence and Resiliency in Higher Education,
                emphasizing the institution's commitment to faculty development.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HIT Section */}
      <div className="oi-institution oi-reverse">
        <div className="oi-institution-header oi-right-border">
          <h2>
            HINDUSTHAN INSTITUTE OF TECHNOLOGY (HIT),
            <br />
            COIMBATORE
          </h2>
        </div>

        <div className="oi-institution-content oi-reverse">
          <div className="oi-institution-text oi-left">
            <ul>
              <li>
                <strong>Academic Excellence:</strong> HITECH is affiliated with
                Anna University and recognized by AICTE. It holds NBA and NAAC
                'A' grade accreditation, reflecting its quality education.
              </li>
              <li>
                <strong>Infrastructure Development:</strong> The campus features
                modern classrooms, laboratories, library, sports facilities,
                hostels, and transportation. It provides a conducive environment
                for learning and growth.
              </li>
              <li>
                <strong>Industry Collaboration & Placements:</strong> HITECH has
                partnerships with leading industries for internships and
                placements, ensuring successful recruitment and strong
                industry-oriented skills.
              </li>
            </ul>
          </div>

          <div className="oi-institution-image oi-right">
            <img src={HicetImg} alt="HIT visual" />
          </div>
          
        </div>
      </div>
        <div className="oi-institution">
        <div className="oi-institution-header oi-left-border">
          <h2>
            HINDUSTHAN COLLEGE OF ARTS & SCIENCE (HICAS),
            <br />
            COIMBATORE
          </h2>
        </div>

        <div className="oi-institution-content">
          <div className="oi-institution-image oi-left">
            <img src={HicetImg} alt="HICAS visual" />
          </div>

          <div className="oi-institution-text oi-right">
            <ul>
              <li>
                <strong>1998:</strong> Founded with an intake of 144 students,
                HICAS has grown to accommodate over 9,300 students annually
                across various academic programs.
              </li>
              <li>
                <strong>2015:</strong> Achieved autonomous status, allowing the
                institution to design its own curriculum and conduct
                examinations independently, while still awarding degrees
                conferred by Bharathiar University.
              </li>
              <li>
                <strong>2021:</strong> Launched the Hindusthan International
                Research Academy (HIRA), a significant milestone in fostering
                research and innovation.
              </li>
              <li>
                <strong>2024:</strong> Organized a Faculty Development Programme
                on Emotional Intelligence and Resiliency in Higher Education,
                emphasizing the institution's commitment to faculty development.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HIT Section */}
      <div className="oi-institution oi-reverse">
        <div className="oi-institution-header oi-right-border">
          <h2>
            HINDUSTHAN INSTITUTE OF TECHNOLOGY (HIT),
            <br />
            COIMBATORE
          </h2>
        </div>

        <div className="oi-institution-content oi-reverse">
          <div className="oi-institution-text oi-left">
            <ul>
              <li>
                <strong>Academic Excellence:</strong> HITECH is affiliated with
                Anna University and recognized by AICTE. It holds NBA and NAAC
                'A' grade accreditation, reflecting its quality education.
              </li>
              <li>
                <strong>Infrastructure Development:</strong> The campus features
                modern classrooms, laboratories, library, sports facilities,
                hostels, and transportation. It provides a conducive environment
                for learning and growth.
              </li>
              <li>
                <strong>Industry Collaboration & Placements:</strong> HITECH has
                partnerships with leading industries for internships and
                placements, ensuring successful recruitment and strong
                industry-oriented skills.
              </li>
            </ul>
          </div>

          <div className="oi-institution-image oi-right">
            <img src={HicetImg} alt="HIT visual" />
          </div>
          
        </div>
      </div>
        <div className="oi-institution">
        <div className="oi-institution-header oi-left-border">
          <h2>
            HINDUSTHAN COLLEGE OF ARTS & SCIENCE (HICAS),
            <br />
            COIMBATORE
          </h2>
        </div>

        <div className="oi-institution-content">
          <div className="oi-institution-image oi-left">
            <img src={HicetImg} alt="HICAS visual" />
          </div>

          <div className="oi-institution-text oi-right">
            <ul>
              <li>
                <strong>1998:</strong> Founded with an intake of 144 students,
                HICAS has grown to accommodate over 9,300 students annually
                across various academic programs.
              </li>
              <li>
                <strong>2015:</strong> Achieved autonomous status, allowing the
                institution to design its own curriculum and conduct
                examinations independently, while still awarding degrees
                conferred by Bharathiar University.
              </li>
              <li>
                <strong>2021:</strong> Launched the Hindusthan International
                Research Academy (HIRA), a significant milestone in fostering
                research and innovation.
              </li>
              <li>
                <strong>2024:</strong> Organized a Faculty Development Programme
                on Emotional Intelligence and Resiliency in Higher Education,
                emphasizing the institution's commitment to faculty development.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HIT Section */}
      <div className="oi-institution oi-reverse">
        <div className="oi-institution-header oi-right-border">
          <h2>
            HINDUSTHAN INSTITUTE OF TECHNOLOGY (HIT),
            <br />
            COIMBATORE
          </h2>
        </div>

        <div className="oi-institution-content oi-reverse">
          <div className="oi-institution-text oi-left">
            <ul>
              <li>
                <strong>Academic Excellence:</strong> HITECH is affiliated with
                Anna University and recognized by AICTE. It holds NBA and NAAC
                'A' grade accreditation, reflecting its quality education.
              </li>
              <li>
                <strong>Infrastructure Development:</strong> The campus features
                modern classrooms, laboratories, library, sports facilities,
                hostels, and transportation. It provides a conducive environment
                for learning and growth.
              </li>
              <li>
                <strong>Industry Collaboration & Placements:</strong> HITECH has
                partnerships with leading industries for internships and
                placements, ensuring successful recruitment and strong
                industry-oriented skills.
              </li>
            </ul>
          </div>

          <div className="oi-institution-image oi-right">
            <img src={HicetImg} alt="HIT visual" />
          </div>
          
        </div>
      </div>  <div className="oi-institution">
        <div className="oi-institution-header oi-left-border">
          <h2>
            HINDUSTHAN COLLEGE OF ARTS & SCIENCE (HICAS),
            <br />
            COIMBATORE
          </h2>
        </div>

        <div className="oi-institution-content">
          <div className="oi-institution-image oi-left">
            <img src={HicetImg} alt="HICAS visual" />
          </div>

          <div className="oi-institution-text oi-right">
            <ul>
              <li>
                <strong>1998:</strong> Founded with an intake of 144 students,
                HICAS has grown to accommodate over 9,300 students annually
                across various academic programs.
              </li>
              <li>
                <strong>2015:</strong> Achieved autonomous status, allowing the
                institution to design its own curriculum and conduct
                examinations independently, while still awarding degrees
                conferred by Bharathiar University.
              </li>
              <li>
                <strong>2021:</strong> Launched the Hindusthan International
                Research Academy (HIRA), a significant milestone in fostering
                research and innovation.
              </li>
              <li>
                <strong>2024:</strong> Organized a Faculty Development Programme
                on Emotional Intelligence and Resiliency in Higher Education,
                emphasizing the institution's commitment to faculty development.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HIT Section */}
      <div className="oi-institution oi-reverse">
        <div className="oi-institution-header oi-right-border">
          <h2>
            HINDUSTHAN INSTITUTE OF TECHNOLOGY (HIT),
            <br />
            COIMBATORE
          </h2>
        </div>

        <div className="oi-institution-content oi-reverse">
          <div className="oi-institution-text oi-left">
            <ul>
              <li>
                <strong>Academic Excellence:</strong> HITECH is affiliated with
                Anna University and recognized by AICTE. It holds NBA and NAAC
                'A' grade accreditation, reflecting its quality education.
              </li>
              <li>
                <strong>Infrastructure Development:</strong> The campus features
                modern classrooms, laboratories, library, sports facilities,
                hostels, and transportation. It provides a conducive environment
                for learning and growth.
              </li>
              <li>
                <strong>Industry Collaboration & Placements:</strong> HITECH has
                partnerships with leading industries for internships and
                placements, ensuring successful recruitment and strong
                industry-oriented skills.
              </li>
            </ul>
          </div>

          <div className="oi-institution-image oi-right">
            <img src={HicetImg} alt="HIT visual" />
          </div>
          
        </div>
      </div>
    </section>

      <Footer/>
    </>
  );
};

export default OurInstitution;
