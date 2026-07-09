import Card from "../Card/Card";
import benefits from "../../data/benefits";
import "./Benefits.sass";

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__container container">
        <h2 className="benefits__title">
          Why 10,000+ customers choose TV Mount Company
        </h2>

        <div className="benefits__cards">
          {benefits.map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
