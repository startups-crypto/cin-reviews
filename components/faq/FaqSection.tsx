import type { Dictionary } from "@/app/[lang]/dictionaries";

import styles from "./FaqSection.module.css";

type FaqSectionProps = Readonly<{
  dictionary: Dictionary["faq"];
}>;

function OpenCloseIcon({ index }: Readonly<{ index: number }>) {
  const id = `faq-icon-${index}`;

  return (
    <span aria-hidden="true" className={styles.icon}>
      <svg
        className={styles.plus}
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0V24M0 12H24"
          stroke={`url(#${id}-plus)`}
          strokeWidth="2"
        />
        <path
          d="M12 0V24M0 12H24"
          stroke="#BDFFE2"
          strokeOpacity="0.3"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${id}-plus`}
            x1="12"
            x2="24"
            y1="0"
            y2="35"
          >
            <stop stopColor="#00A277" />
            <stop offset="1" stopColor="#E73029" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className={styles.openIcon}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          fill={`url(#${id}-open-fill)`}
          fillOpacity="0.1"
          height="50"
          rx="25"
          width="50"
        />
        <rect
          height="49"
          rx="24.5"
          stroke={`url(#${id}-open-stroke)`}
          strokeOpacity="0.4"
          width="49"
          x="0.5"
          y="0.5"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${id}-open-fill`}
            x1="0"
            x2="53.7874"
            y1="0"
            y2="74.0582"
          >
            <stop stopColor="#FFC400" />
            <stop offset="0.320159" stopColor="#00A277" />
            <stop offset="1" stopColor="#E72978" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${id}-open-stroke`}
            x1="25"
            x2="25"
            y1="0"
            y2="50"
          >
            <stop stopColor="white" stopOpacity="0.17" />
            <stop offset="1" stopColor="white" stopOpacity="0.08" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className={styles.closeIcon}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          fill={`url(#${id}-close-fill)`}
          fillOpacity="0.4"
          height="50"
          rx="25"
          width="50"
        />
        <rect
          height="49"
          rx="24.5"
          stroke={`url(#${id}-close-stroke)`}
          strokeOpacity="0.4"
          width="49"
          x="0.5"
          y="0.5"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${id}-close-fill`}
            x1="0"
            x2="53.7874"
            y1="0"
            y2="74.0582"
          >
            <stop stopColor="#FFC400" />
            <stop offset="0.320159" stopColor="#00A277" />
            <stop offset="1" stopColor="#E72978" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`${id}-close-stroke`}
            x1="25"
            x2="25"
            y1="0"
            y2="50"
          >
            <stop stopColor="white" stopOpacity="0.17" />
            <stop offset="1" stopColor="white" stopOpacity="0.08" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}

export function FaqSection({ dictionary }: FaqSectionProps) {
  return (
    <section aria-labelledby="faq-title" className={styles.section} id="faq">
      <div className={styles.wrap}>
        <h2 className="t-center text-g-green" id="faq-title">
          {dictionary.title} <span className="green-text">{dictionary.title2}</span>
        </h2>

        <div className={styles.accordion}>
          {dictionary.items.map(({ answer, question }, index) => (
            <details className={styles.item} key={question}>
              <summary className={styles.trigger}>
                <span>{question}</span>
                <OpenCloseIcon index={index} />
              </summary>
              <p className={styles.answer}>{answer}</p>
            </details>
          ))}
        </div>

        <div
          className={`button-wrap button-wrap--center find-all ${styles.findAll}`}
        >
          <a
            className={`s-button-transparent ${styles.transparentButton}`}
            href={dictionary.findAll.url}
          >
            {dictionary.findAll.label}
          </a>
        </div>

        <div className={`have-questions ${styles.haveQuestions}`}>
          <div
            className={`have-questions__text ${styles.haveQuestionsText}`}
          >
            <h3 className="t-center text-g-green font-alkatra-medium">
              {dictionary.haveQuestions.title}
            </h3>
            <p className={`t-center ${styles.haveQuestionsDescription}`}>
              {dictionary.haveQuestions.description}
            </p>
          </div>
          <div className="button-wrap button-wrap--center button-wrap--space">
            <a
              className="s-button s-button--dark s-button--small s-button-width"
              href={dictionary.haveQuestions.cta.url}
            >
              {dictionary.haveQuestions.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
