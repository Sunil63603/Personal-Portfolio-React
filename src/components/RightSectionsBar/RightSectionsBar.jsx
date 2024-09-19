import AOS from 'aos';
import { useEffect, useRef, useState } from "react";
import "./RightSectionsBar.css";

//components
import AboutSection from './AboutSection/AboutSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ResumeSection from './ResumeSection/ResumeSection';
import ProjectSection from './ProjectSection/ProjectSection';
import ContactSection from './ContactSection/ContactSection';
import Footer from './Footer/Footer';

// Divide this into multiple sections once after completing the implementation
function RightSectionsBar() 
{
  //Write logic of this component here.
  //1.this is logic for animation on scroll
  useEffect(()=>{
    function aosInit() {//function to handle animation on scroll
      AOS.init({
        duration: 300,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
    const loadEvent = window.addEventListener("load", aosInit);

    //clean up functions
    return ()=>{
      window.removeEventListener("load",loadEvent);
    }
  },[]);//runs on initial render

  //2.this is logic for typed effect(FrontEnd web developer)
  
  //3.function to handle form submission
  
  //4.scroll top logic
  useEffect(() => {
    function toggleScrollTop() {
      let scrollTop = document.querySelector(".scroll-top");
      if (scrollTop) {
        // If user scrolled >100 in Y-axis, show scrollTop, otherwise hide it
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    }
  
    // Attach the scroll event listener
    window.addEventListener("scroll", toggleScrollTop);
  
    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", toggleScrollTop);
    };
  }, []); // Empty dependency array to run on initial render and cleanup on unmount
  

  //5.preloader logic
  useEffect(() => {
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      const loadEvent = window.addEventListener("load", () => {
        preloader.remove(); // When window 'loads', remove the preloader.
      });
  
      // Clean up function for event listener
      return () => {
        window.removeEventListener("load", loadEvent);
      };
    }
  }, []);

  return (
    <>
      {/* just like id=header in leftFixedBar,what is the use of 'main' and in which css file is .main written */}
      <main className="main">
        {/* <!-- About Section --> */}
        {/* each and every section has 'id',that id is stored in url bar when clicked on it,based on which scrolling occurs*/}
        {/* <!-- id='about' is used for navigation to about section when user clicks on about in left side bar --> */}
        <AboutSection></AboutSection>

        {/* <!-- 👇chatGPT generated skills section --> */}
        {/* <!-- Skills Section --> */}
        <SkillsSection></SkillsSection>
        {/* end of skills section */}
        {/* <!-- /Skills Section --> */}

        {/* <!-- Resume Section --> */}
        <ResumeSection></ResumeSection>
        {/* <!-- /Resume Section --> */}

        {/* <!-- ❌change fonts for text in projects section --> */}
        {/* <!-- 👇Usman code for projects section --> */}
        {/* <!-- Project Section  --> */}
        <ProjectSection></ProjectSection>
        {/* <!--End of Projects section--> */}

        {/* <!-- Contact Section --> */}
        <ContactSection></ContactSection>
        {/* <!-- /Contact Section --> */}

        {/* Footer */}
        <Footer></Footer>

          {/* <!-- Scroll Top --> */}
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

          {/* <!-- Preloader --> */}
          {/* <!-- this is used to indicate 'loader/spinner' while RHS/sections are not yet loaded --> */}
        <div id="preloader"></div>
        {/* uncomment this after completely implementing the rightSectionsBar*/}
      </main>
    </>
  );
}

export default RightSectionsBar;
