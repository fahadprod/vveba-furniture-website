export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="content-left">
          <h2>Subscribe to our newsletter and grab <span>30% OFF</span></h2>
        </div>
        
        <div className="content-right">
          <input 
            type="email" 
            placeholder="Your e-mail address..."
            className="email-input"
          />
          <button className="signup-btn">SIGN UP</button>
        </div>
      </div>
    </section>
  );
}