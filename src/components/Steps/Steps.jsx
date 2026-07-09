import Card from "../Card/Card";
import steps from "../../data/steps";
import "./Steps.sass";

function Steps() {
  return (
    <section className="steps">
      <div className="steps__container container">
        <h2 className="steps__title">How we work: 4 simple steps</h2>

        <div className="steps__cards">
          {steps.map((step) => (
            <Card
              key={step.number}
              number={step.number}
              title={step.title}
              text={step.text}
              time={step.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
