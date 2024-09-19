import './ProjectSection.css';

function ProjectSection() {
  return (
    <>
      <section id="projects" className="contact section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Project</h2>
          </div>
          <div className="projects-grid">
            {/* <!-- Project 1 --> */}
            <div className="project-card">
              <h6>Recipe Search Application</h6>
              <p>Built using Html,CSS,JS and recipe fetching API</p>
              <a
                href="https://github.com/Sunil63603/ESCR-forkify.git"
                className="btn github-btn"
                target="_blank"
              >
                GitHub Link
              </a>
              <a
                href="https://escr.netlify.app/"
                className="btn demo-btn"
                target="_blank"
              >
                Live Demo
              </a>
              <video width="100%" controls autoPlay>
                <source
                  src='/img/ForKify App - Google Chrome 2024-09-02 21-09-11.mp4'
                  type="video/mp4"
                />
                  Your browser does not support the video tag.
              </video>
            </div>

            {/* <!-- Project 2 --> */}
            <div className="project-card">
              <h6>Tour Tracking Application</h6>
              <p>Built using Html,CSS,JS,React and Map API(leaflet)</p>
              <a
                href="https://github.com/Sunil63603/WorldWise.git"
                className="btn github-btn"
                target="_blank"
              >
                GitHub Link
              </a>
              <a
                href="https://sunil-worldwise.netlify.app/"
                className="btn demo-btn"
                target="_blank"
              >
                Live Demo
              </a>
              <video width="100%" controls>
                <source
                  src="/img/WorldWise - Google Chrome 2024-09-04 20-02-05.mp4"
                  type="video/mp4"
                />
                  Your browser does not support the video tag.
              </video>
            </div>

            <div className="project-card">
              <h6>Mapty</h6>
              <p>Built using Html,CSS,JS and map API(leaflet)</p>
              <a
                href="https://github.com/Sunil63603/Mapty.git"
                className="btn github-btn"
                target="_blank"
              >
                GitHub Link
              </a>
              <a
                href="https://sunil-mapty.netlify.app/"
                className="btn demo-btn"
                target="_blank"
              >
                Live Demo
              </a>
              <video width="100%" controls autoPlay>
                <source
                  src="/img/MAPTY - Google Chrome 2024-09-04 19-51-36.mp4"
                  type="video/mp4"
                />
                  Your browser does not support the video tag.
              </video>
            </div>

            {/* <!-- Add more projects as needed --> */}
          </div>
        </section>
    </>
  )
}

export default ProjectSection
