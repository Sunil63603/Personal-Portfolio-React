import './ContactSection.css';
import { useRef,useState,useEffect } from 'react';

function ContactSection() {

  //3.function to handle form submission
  const formRef = useRef(null);
  const loadingMessageRef = useRef(null);
  const successMessageRef = useRef(null);

  const [loading, setLoading] = useState(false);  // Initialize loading state
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const formSubmit = () => {
      const form = formRef.current;
      const loadingMessage = loadingMessageRef.current;
      const successMessage = successMessageRef.current;

      // Initially hide messages
      loadingMessage.style.display = "none";
      successMessage.style.display = "none";

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Show loading message
        setLoading(true);

        // Simulate form submission
        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        }).then((response) => {
          setLoading(false);
          if (response.ok) {
            // Show success message
            setSuccess(true);
            successMessage.style.display = "block";
            form.reset();
          } else {
            console.log("else block");
          }
        });
      });
    };

    // Ensure the form is loaded before adding the listener
    window.addEventListener("load", formSubmit);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("load", formSubmit);
    };
  }, []);

  return (
    <>
      <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-5">
                {/* <!-- 'info-wrap' is written in css file.info-wrap is towards LHS in contact section. --> */}
                <div className="info-wrap">
                  <div
                    className="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Address</h3>
                      <p>Ward No 22,Chintamani,Karnataka</p>
                    </div>
                  </div>
                  {/* <!-- End Info Item --> */}

                  <div
                    className="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <a
                      href="tel:+91 8197759383"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-telephone flex-shrink-0"></i>
                    </a>
                    <div>
                      <h3>Call me</h3>
                      <p>
                        <a
                          href="tel:+91 8197759383"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{fontSize:'20px'}}
                        >
                          +91 8197759383
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Info Item --> */}

                  <div
                    className="info-item d-flex"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <a
                      href="mailto:s60667843@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-envelope flex-shrink-0"></i>
                    </a>
                    <div>
                      <h3>Email</h3>
                      <p>
                        <a
                          href="mailto:s60667843@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{fontSize:'20px'}}
                        >
                          s60667843@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* <!-- End Info Item --> */}
                </div>
              </div>
              <div className="col-lg-7">
      <form
        ref={formRef}
        action="https://api.web3forms.com/submit"
        method="POST"
        className="php-email-form"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <input
          type="hidden"
          name="access_key"
          value="Write your access key here"
          // this access key can be generated in web#3forms.com
        />
        <div className="row gy-4">
          <div className="col-md-6">
            <label htmlFor="name-field" className="pb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name-field"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email-field" className="pb-2">
              Your Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email-field"
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="message-field" className="pb-2">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              rows="10"
              id="message-field"
              required
            ></textarea>
          </div>
          <div className="col-md-12 text-center">
            <div ref={loadingMessageRef} className="loading">
              {loading ? "Sending..." : ""}
            </div>
            <div ref={successMessageRef} className="sent-message" style={{ display: success ? "block" : "none" }}>
              Your message has been sent. Thank you!
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>    
              {/* <!-- End Contact Form --> */}
            </div>
          </div>
        </section>
    </>
  )
}

export default ContactSection
