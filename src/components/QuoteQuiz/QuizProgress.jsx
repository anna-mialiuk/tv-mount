function QuizProgress({ progress }) {
  return (
    <div className="quote-quiz__progress">
      <span style={{ width: `${progress}%` }} />
    </div>
  );
}

export default QuizProgress;
