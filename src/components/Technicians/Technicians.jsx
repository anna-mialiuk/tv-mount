import technicians from "../../data/technicians";
import "./Technicians.sass";

function Technicians() {
  return (
    <section id="about" className="technicians">
      <div className="technicians__container container">
        <h2 className="technicians__title">Our Lead Technicians</h2>

        <div className="technicians__list">
          {technicians.map((person) => (
            <article className="technicians__card" key={person.name}>
              <div className="technicians__info">
                <h3 className="technicians__name">{person.name}</h3>
                <p className="technicians__text">{person.text}</p>

                <ul className="technicians__skills">
                  {person.skills.map((skill) => (
                    <li className="technicians__skill" key={skill}>
                      <img
                        src="/check.svg"
                        alt=""
                        aria-hidden="true"
                        className="technicians__check"
                        loading="lazy"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={person.photo}
                alt={`${person.name}, TV Mount Company technician`}
                className="technicians__photo"
                loading="lazy"
                decoding="async"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technicians;
