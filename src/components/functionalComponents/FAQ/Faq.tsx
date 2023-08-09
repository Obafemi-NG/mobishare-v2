import { FC, useState } from "react";

// imported styles
import styles from "./Faq.module.css";

// imported Data
import { faqData } from "../../../localData/faqData";

// imported fontawesomeicons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Faq: FC = () => {
  const [showAnswer, setShowAnswer] = useState<{ [id: string]: boolean }>({});
  const toggleAnswer = (id: string) => {
    setShowAnswer({
      [id]: !showAnswer[id],
    });
  };
  return (
    <div className={styles["section-container"]}>
      <p className={styles.title}> Frequently Asked Questions </p>
      {faqData.map((item) => {
        return (
          <div
            key={item.id}
            className={styles["faq-container"]}
            onClick={() => toggleAnswer(item.id)}
          >
            <div className={styles["question-top"]}>
              <p className={styles["question"]}>{item.question}</p>
              {showAnswer[item.id] ? (
                <FontAwesomeIcon icon={faMinus} style={{ color: "#545454" }} />
              ) : (
                <FontAwesomeIcon icon={faPlus} style={{ color: "#545454" }} />
              )}
            </div>
            <p className={styles.answer}>
              {" "}
              {showAnswer[item.id] && item.answer}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
