import './SocialLinks.css';

function SocialLinks()
{
  return(
    <>
      {/* <!-- i think 'text-center' is className of bootstrap framework--> */}
      <div className="social-links text-center">
        <a
          href="https://www.linkedin.com/in/Sunil63603/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/Sunil63603"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>  
        </a>
        <a
          href="mailto:s60667843@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href="https://wa.me/8197759383"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </>
  );
}

export default SocialLinks;