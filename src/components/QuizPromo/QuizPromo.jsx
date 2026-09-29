import Button from "../Button/Button";
import { QUIZ_DISCOUNT } from "../../data/quoteQuiz";
import "./QuizPromo.sass";

function QuizPromo({ onQuizOpen }) {
  return (
    <section className="quiz-promo">
      <div className="quiz-promo__container container">
        <h2 className="quiz-promo__title">
          Don’t miss your chance.
          <br />
          Take a brief quiz and
          <br />
          <span className="quiz-promo__highlight">
            get ${QUIZ_DISCOUNT} off
          </span>{" "}
          your quote
        </h2>

        <Button
          variant="primary"
          className="quiz-promo__button"
          onClick={onQuizOpen}
        >
          Start Quiz
        </Button>
      </div>
    </section>
  );
}

export default QuizPromo;
