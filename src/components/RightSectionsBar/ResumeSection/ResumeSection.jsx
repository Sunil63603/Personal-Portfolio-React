import './ResumeSection.css'

function ResumeSection() {
  return (
    <>
      <section id="resume" className="resume section">
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>Seeking Front End Web development Opportunities(Remote Internship)</p>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" style={{lineHeight:'70px'}}>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Summary</h3>

                <div className="resume-item pb-0">
                  <h4>Sunil S</h4>
                  <ul>
                    <li>Chintamani,Karnataka,India</li>
                    <li>
                      <a
                        href="mailto:s60667843@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        s60667843@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+91 8197759383"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +91 8197759383
                      </a>
                    </li>
                    {/* <!-- !fix this there are 4 list items in web page but only 3 in code --> */}
                  </ul>
                </div>
                {/* <!-- End Resume Item --> */}

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Bachelor Of Engineering</h4>
                  <p>Pursuing Computer Science degree</p>
                  <p>
                    <em>
                      SJC Institute of Technology, Chikkaballapur, Karnataka
                    </em>
                  </p>
                  <h5>2021 - 2025</h5>
                </div>
                {/* <!-- Edn Resume Item --> */}
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>DigiGlobe Solutions Intern</h4>
                  <h5>Aug 2024 - Sept 2024</h5>
                  <p>
                    <em>Bengaluru,Karnataka,India </em>
                  </p>
                  <ul>
                    <li>Built Personal Portfolio website</li>
                  </ul>
                </div>

                <h3 className="resume-title">Skills</h3>
                <div className="resume-item">
                  <ul>
                    <li>
                      <strong>Programming Languages</strong> : C,Core Java
                    </li>
                    <li>
                      <strong>Web Technologies</strong> :
                      HTML,CSS,JavaScript,React
                    </li>
                    <li>
                      <strong>Tools</strong> : VSCode,Eclipse,Git,MS Office
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="resume-button-container">
              {/* <!-- here is the logic to download resume ,from my google drive --> */}
              <a
                href="https://drive.google.com/uc?export=download&id=1VeSq-tixaKgA4ykXBLT5zGtZsjm5kO4R"
                className="btn-green"
                download="Sunil_Resume.pdf"
              >
                Download Resume <i className="bi bi-download"></i>
              </a>
            </div>
          </div>
        </section>
    </>
  )
}

export default ResumeSection;
