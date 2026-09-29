import { useRef, useState } from "react";
import sendLead from "../../utils/sendLead";
import Modal from "../Modal/Modal";
import steps from "../../data/quoteQuiz";
import QuizHeader from "./QuizHeader";
import QuizProgress from "./QuizProgress";
import QuizOptionStep from "./QuizOptionStep";
import QuizSizeStep from "./QuizSizeStep";
import QuizContactForm from "./QuizContactForm";
import QuizSuccess from "./QuizSuccess";
import "./QuoteQuiz.sass";

// step 0 — TV size, then option steps, then the contact form
const FORM_STEP_INDEX = steps.length + 1;
const TOTAL_STEPS = steps.length + 2;
const DEFAULT_ANSWERS = { tvQuantity: "1 TV" };

function QuoteQuiz({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(DEFAULT_ANSWERS);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDiscountPopupOpen, setIsDiscountPopupOpen] = useState(false);
  const nameInputRef = useRef(null);

  const currentStep = step > 0 ? steps[step - 1] : null;
  const progress = isSuccess ? 100 : ((step + 1) / TOTAL_STEPS) * 100;

  const resetQuiz = () => {
    setStep(0);
    setAnswers(DEFAULT_ANSWERS);
    setIsSuccess(false);
    setIsDiscountPopupOpen(false);
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

  const handleAnswersChange = (changes) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, ...changes }));
  };

  const handleSizeNext = () => setStep(1);

  const handleNext = () => {
    if (!currentStep) return;

    if (step < steps.length) {
      setStep(step + 1);
      return;
    }

    setStep(FORM_STEP_INDEX);
    setIsDiscountPopupOpen(true);
  };

  const handleClaimDiscount = () => {
    setIsDiscountPopupOpen(false);
    nameInputRef.current?.focus();
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
        tvQuantity: answers.tvQuantity,
        technicians: answers.technicians,
        removeOldTv: answers.removeOldTv ? "Yes" : "No",
        wallType: answers.wallType,
        service: Array.isArray(answers.services)
          ? answers.services.join(", ")
          : answers.services,
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
          onSubmit={handleSubmit}
          nameInputRef={nameInputRef}
          isPopupOpen={isDiscountPopupOpen}
          onClaimDiscount={handleClaimDiscount}
        />
      ) : step === 0 ? (
        <QuizSizeStep
          totalSteps={TOTAL_STEPS}
          answers={answers}
          onChange={handleAnswersChange}
          onNext={handleSizeNext}
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
