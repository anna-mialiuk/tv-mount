import { useState } from "react";
import AccordionItem from "./AccordionItem";
import questions from "../../data/faqItems";
import "./FAQ.sass";

function FAQ() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq__title">Frequently Asked Questions</h2>

        <div className="faq__grid">
          {questions.map((item, index) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isActive={activeItem === index}
              onClick={() => setActiveItem(activeItem === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
