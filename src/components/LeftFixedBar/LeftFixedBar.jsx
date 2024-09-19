import "./LeftFixedBar.css";//contains css specific to this component
import SocialLinks from "./SocialLinks/SocialLinks";//component which displays social media links in leftFixedBar
import SectionsNavMenu from "./SectionsNavMenu/SectionsNavMenu";//to display links to different sections on leftFixedBar
import { useEffect } from "react";

function LeftFixedBar() {
  //this component's logic👇
  //1.toggle leftFixedBar in mobile view using icon(onClick event handler)
  let headerToggleBtn;
  useEffect(()=>{
    headerToggleBtn = document.querySelector('.header-toggle');
  },[]);

  function headerToggle()//calling this function when clicked on 'icon' 
  {
    document.querySelector("#header").classList.toggle("header-show");//header-show is written in css file
    headerToggleBtn.classList.toggle("bi-list");
    headerToggleBtn.classList.toggle("bi-x");
  }

  //2.In mobile view when clicked on any navmenu in leftFixedBar,then scroll to that section and also hide leftFixedBar.
  useEffect(()=>{
    function hideHeader()
    {
      document.querySelectorAll(".navmenu a").forEach((navmenu) => {
        navmenu.addEventListener("click", () => {
          if (document.querySelector(".header-show")) {
            headerToggle();
          }
        });
      });
    } 
    hideHeader();

    //clean up function
    return ()=>{
      document.querySelectorAll(".navmenu a").forEach((navmenu) => {
        navmenu.removeEventListener("click", () => {
          if (document.querySelector(".header-show")) {
            headerToggle();
          }
        } );
      });
    }

  },[])//only on initial render;

  //2.Remove 'active' className from 'about' section ,when any other section is being viewed
  //active className is actually added or removed based on scroll in rightSectionsBar.
  //so,check whether 'active' className is working as expected once after implementing scrolling effect in rightSectionsBar

  return (
    // <!-- This below code is related to left side bar(navigation bar of our page) -->
    //what is id='header' used for?this is used to toggle the LeftSideBar based on click event on 'header-toggle' button
    <header id="header" className="header dark-background d-flex flex-column">
      {/* <!-- below tag is used to hide left side bar,and show a button(which toggles visibility),in mobile view--> */}
        <i className="header-toggle d-xl-none bi bi-list" onClick={headerToggle}></i>
      {/* this icons should not be displayed all the time */}
      {/* <!-- 'i' tag is used to display icons--> */}

      {/* <!-- This is code related to image displayed in left side bar --> */}
      <div className="profile-img">
        <img
          src="/img/Sunil_golden_logo.png"
          alt="my_image"
          className="img-fluid rounded-circle"
        ></img>
      </div>

      {/* <!-- 👇here replace href to my portfolio link(deployed link) --> */}
      <a
        href="index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1>Sunil S</h1>
      </a>

      {/* <!-- code to display social media links in left side bar --> */}
      <SocialLinks></SocialLinks>

      {/* <!-- code used for navigation between different sections of the portfolio --> */}
      <SectionsNavMenu></SectionsNavMenu>
    </header>
  );
}

export default LeftFixedBar;
