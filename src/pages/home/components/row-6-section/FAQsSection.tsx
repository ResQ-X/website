import { useState } from "react";
import styles from "./FAQsSection.module.css";
import angleDownIcon from "../../../../assets/images/svg/angle-down-icon.svg";
import { FAQsList } from "../../../../constants/FaqsList";

function FAQsSection() {
  // Functions, State and Variables
  // States
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);

  //   Functions
  //   Function to toggle the current accordion
  const handleToggleCurrentAccordion = (index: number) => {
    setActiveAccordionIndex((prev) => (prev === index ? -1 : index));
  };
  return (
    <section className={`home__row_section`}>
      <div className="app__row_container">
        {/* Header Container */}
        <div className={styles.section_header_container}>
          {/* Section Title */}
          <h1 className="section_title">
            Answers to <span>Your Questions</span>
          </h1>
        </div>

        {/* FAQs Container */}
        <div className={`${styles.faqs_wrappper}`}>
          {/* Accordion Wrapper*/}
          {FAQsList.map((faq, index) => (
            <div
              key={index + 1}
              className={`${styles.accordion_wrapper} ${
                activeAccordionIndex !== index ? styles.collapsed : ""
              }`}
            >
              <button
                className={`${styles.accordion_header_title_wrapper}`}
                onClick={() => {
                  handleToggleCurrentAccordion(index);
                }}
              >
                <div className={styles.accordion_question_wrapper}>
                  <p className="">{faq.question}</p>
                </div>

                <div className={styles.toggle_accordion_icon_wrapper}>
                  <img
                    src={angleDownIcon}
                    alt=""
                    className={
                      activeAccordionIndex === index
                        ? "rotate-up-180deg"
                        : "rotate-down-180deg"
                    }
                  />
                </div>
              </button>

              {/* Faq Answer */}
              <div
                dangerouslySetInnerHTML={{ __html: faq.answer }}
                className={styles.accordion_answer_wrapper}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <span id="waitlist"></span>
    </section>
  );
}

export default FAQsSection;
