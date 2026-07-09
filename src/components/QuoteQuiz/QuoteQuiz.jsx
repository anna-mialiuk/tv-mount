import { useState } from "react";
import sendLead from "../../utils/sendLead";
import Modal from "../Modal/Modal";
import steps from "../../data/quoteQuiz";
import QuizHeader from "./QuizHeader";
import QuizProgress from "./QuizProgress";
import QuizOptionStep from "./QuizOptionStep";
import QuizContactForm from "./QuizContactForm";
import QuizSuccess from "./QuizSuccess";
import "./QuoteQuiz.sass";

const FORM_STEP_INDEX = steps.length;
const TOTAL_STEPS = steps.length + 1;

function QuoteQuiz({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const currentStep = steps[step];
  const progress = isSuccess ? 100 : ((step + 1) / TOTAL_STEPS) * 100;

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setIsSuccess(false);
  };

  const handleClose = () => {
    resetQuiz();
    onClose();
  };

  const handleOptionClick = (value) => {
    if (!currentStep) return;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentStep.name]: value,
    }));
  };

  const handleNext = () => {
    if (!currentStep) return;

    const currentAnswer = answers[currentStep.name];
    const isRequired = currentStep.required !== false;

    if (isRequired && !currentAnswer) return;

    setStep((current) =>
      current < steps.length - 1 ? current + 1 : FORM_STEP_INDEX,
    );
  };

  const handleBack = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      await sendLead({
        formName: "Quote Quiz",
        name: formData.get("name"),
        phone: formData.get("phone"),
        tvSize: answers.tvSize,
        wallType: answers.wallType,
        service: answers.services,
        answers,
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Quote quiz submit error:", error);
      alert("Failed to send request. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      overlayClassName="quote-quiz"
      contentClassName="quote-quiz__modal"
    >
      <QuizHeader onClose={handleClose} />
      <QuizProgress progress={progress} />

      {isSuccess ? (
        <QuizSuccess onClose={handleClose} />
      ) : step === FORM_STEP_INDEX ? (
        <QuizContactForm
          totalSteps={TOTAL_STEPS}
          answers={answers}
          onBack={handleBack}
          onSubmit={handleSubmit}
        />
      ) : (
        <QuizOptionStep
          stepIndex={step}
          totalSteps={TOTAL_STEPS}
          step={currentStep}
          value={answers[currentStep.name]}
          onOptionClick={handleOptionClick}
          onBack={handleBack}
          onNext={handleNext}
        />
      )}
    </Modal>
  );
}

export default QuoteQuiz;
