import React from "react";
import "./../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights
          on how your links are performing.
        </p>
        <a href="#" className="btn-get-started">Get Started</a>
      </div>

      <div className="hero__image">
        <img
          src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/illustration-working.svg"
          alt="Working Illustration"
        />
      </div>
    </section>
  );
}

export default Hero;
