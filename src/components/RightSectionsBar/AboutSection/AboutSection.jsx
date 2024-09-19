import './AboutSection.css';
import { useEffect } from 'react';
import Typed from 'typed.js';

function AboutSection() {
  /*
  useEffect(()=>{
    
    //2.this is logic for typed effect(FrontEnd web developer)
    function typedInit()//function to handle typing effect for 'FrontEnd Web developer'
    {
      const selectTyped = document.querySelector(".typed");
      if (selectTyped) 
      {
        let typed_strings = selectTyped.getAttribute("data-typed-items");
        typed_strings = typed_strings.split(",");
        new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 50,
        backSpeed: 10,
        backDelay: 1000,
        });
      }
    }
    const loadEvent = window.addEventListener("load", typedInit);//calling function as soon as load.

    //clean up functions
    return ()=>{
      window.removeEventListener("load",loadEvent);
    }
  },[]);//runs on initial render

  */

  return (
    <>
      <section id="about" className="about section">{/*className 'section' is common for each and every section*/}
          {/* in future if you want background image for about section ,then uncomment code in css*/}
          {/* <!-- i think 'container' is bootstrap className --> */}
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            {/* <!-- 'section' and 'section-title' are both written together in CSS file and both are common to all the sections--> */}
            <div className="container section-title" data-aos="fade-up">
              <h2>About me</h2>
            </div>
            {/* <!--❌in css file there is both 'about-content' and '.about','.content'  --> */}
            {/* 'about-content' is used to display about text and 'see my work' button side by side*/}
             <div className="about-content">
               <div className="about-text">
                  <h2 className='wave-container'
                    style={{
                      color: "black",
                      fontSize: "3rem",
                      fontWeight: 400,
                    }}
                    >
                    I am Sunil <span className='wave'>👋</span>
                  </h2>
                  {/* <!--in future if you want to add more roles,just add those new roles into this 'data-typed-items' --> */}
                  <p>
                    <span
                      className="typed"
                      data-typed-items="Front End Web Developer"
                      style={{ color: "black" }}
                    >Front End Web Developer</span>
                  </p>
                  <p className="fst-italic py-3">
                    {/* <!-- Both JS and React icons are used here --> */}
                    Built projects using <i className="fab fa-js"></i> and{" "}
                    <i className="fab fa-react"></i>
                  </p>
               </div>
               <div className="about-button">
                {/* <!-- this button slowly navigates to the "projects" section --> */}
                 <a href="#projects" className="btn btn-green">
                  See my work<i className="bi bi-arrow-down-short"></i>
                 </a>
               </div>
             </div>
          </div>
        </section>
        {/* <!-- /About Section --> */}
    </>
  )
}

export default AboutSection;
