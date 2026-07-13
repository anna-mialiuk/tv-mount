import "./About.sass";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h2 className="about__title">Who we are and why we’re the best</h2>

            <div className="about__image-tablet">
              <img
                src="/about-team.webp"
                alt="TV Mount Company team"
                className="about__img-team"
                loading="lazy"
              />
            </div>

            <div className="about__text">
              <p className="about__paragraph text-sm">
                TV Mount Company was founded in 2019 with a simple mission: to
                make professional, honest TV installation affordable, safe, and
                high-quality.
              </p>

              <p className="about__paragraph text-sm">
                We believe that every customer deserves a professional approach
                and honest service. Our technicians aren’t just
                technicians—they’re people who love their work and take pride in
                every project.
              </p>

              <p className="text-sm">
                In 6 years, we’ve installed over 15,000 TVs, received 8,000+
                five-star reviews, and earned the trust of customers in three
                major cities: Philadelphia, Chicago, and Atlanta.
              </p>
            </div>

            <div className="about__stats">
              <div className="about__stat">
                <strong>15,000+</strong>
                <span className="about__span-text">TVs Installed</span>
              </div>

              <div className="about__stat">
                <strong>8,000+</strong>
                <span className="about__span-text">Satisfied Customers</span>
              </div>

              <div className="about__stat">
                <strong>6+</strong>
                <span className="about__span-text">Years in Business</span>
              </div>

              <div className="about__stat">
                <strong>3</strong>
                <span className="about__span-text">Cities Served</span>
              </div>
            </div>
          </div>

          <div className="about__image">
            <img
              src="/about-team.webp"
              alt="TV Mount Company team"
              className="about__img-team"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about__stats-laptop">
          <div className="about__stat">
            <strong>15,000+</strong>
            <span className="about__span-text">TVs Installed</span>
          </div>

          <div className="about__stat">
            <strong>8,000+</strong>
            <span className="about__span-text">Satisfied Customers</span>
          </div>

          <div className="about__stat">
            <strong>6+</strong>
            <span className="about__span-text">Years in Business</span>
          </div>

          <div className="about__stat">
            <strong>3</strong>
            <span className="about__span-text">Cities Served</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
