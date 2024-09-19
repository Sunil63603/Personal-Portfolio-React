import './SectionsNavMenu.css';
import React,{useState,useEffect} from 'react';//used for changing active section on scroll or on click(LeftFixedBar's navmenu)

function SectionsNavMenu()
{
  const [currentSection,setCurrentSection] = useState('about');//default section is 'about' section

    //function to handle section change(either by scroll or by click)
    useEffect(()=>{
      const navmenulinks = document.querySelectorAll('.navmenu a');//select all sections

      function navmenuScrollspy()//handle scroll in 'y' axis
      {
        navmenulinks.forEach((navmenulink)=>{//loop over all section and for each section..
          if(!navmenulink.hash) return;
          const section = document.querySelector(navmenulink.hash);
          if(!section) return;
          const position = window.scrollY + 200;

          if(position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight)
          {
            document.
            querySelectorAll('.navmenu a.active').
            forEach((link)=>link.classList.remove('active'));

            navmenulink.classList.add('active');
            setCurrentSection(navmenulink.getAttribute('href').substring(1));
          }
          else
          {
            navmenulink.classList.remove('active');
          }
        });
      }

      //adding event handlers
      window.addEventListener('load',navmenuScrollspy);
      document.addEventListener('scroll',navmenuScrollspy);
      
      //cleanup function to clear event listeners
      return ()=>{
        window.removeEventListener('load',navmenuScrollspy);
        document.removeEventListener('scroll',navmenuScrollspy);
      }
    },[]);//executed only on initial render

  return (
    <>
      <nav className="navmenu">
        <ul>
          {/* <!-- theres no specific code related to 'li' in navmenu --> */}
          {/* <!-- active className makes About section as default page--> */}
          {/* <!--active className should be removed from 'about' section when any other section is choosen--> */}
          <li>
            <a href="#about" className={currentSection === 'about' ? 'active' : ''}>
              <i className="bi bi-person navicon"></i>About
            </a>
          </li>
          <li>
            <a href="#skills" className={currentSection === 'skills' ? 'active' : ''}>
              <i className="bi bi-tools navicon"></i>Skills
            </a>
          </li>
          <li>
            <a href="#resume" className={currentSection === 'resume' ? 'active' : ''}>
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </a>
          </li>
          <li>
            <a href="#projects" className={currentSection === 'projects' ? 'active' : ''}>
              <i className="bi bi-images navicon"></i> Projects
            </a>
          </li>
          <li className="contact-button">
            <a href="#contact" className={currentSection === 'contact' ? 'active' : ''}>
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
          {/* <!-- 'contact-button' className is used to highlight contact button. --> */}
        </ul>
      </nav>
    </>
  );
}

export default SectionsNavMenu;