import { Accordion, Card, AccordionContext } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Image from "next/image";

import FAQS from "../components/faq.json";
import heart from "../../public/heart.png";
import heartplus from "../../public/heartp.png";

import { useContext } from "react";
import styles from "./faq.module.css";

function ContextAwareToggle({ children, eventKey, callback }: any) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div className="d-flex flex-row p-1 pb-2 justify-content-center">
      <button
        type="button"
        className={`${styles.myAccordionButton} border-0`}
        onClick={decoratedOnClick}
      >
        <Image
          src={isCurrentEventKey ? heart : heartplus}
          className={`${styles.accordionIcon}`}
          alt="#"
        />
        {children}
      </button>
    </div>
  );
}

export default function FAQComponent() {
  return (
    <div className={`${styles.faqContainer} m-auto`}>
      <div className={`${styles.faqTitle}`}>
        <u>FAQ</u>
      </div>
      <p className={`${styles.faqM}`}>
        A FAQ page, or Frequently Asked Questions page, is a section on a
        website that provides answers to commonly asked questions about a
        particular topic or product. The purpose of a FAQ page is to provide
        users with quick and easy access to information that they may need to
        know before using a product or service. A well-designed FAQ page can
        help to reduce customer support inquiries, improve user satisfaction,
        and increase overall engagement with a website. Typically, a FAQ page
        will include a list of questions and answers, with links to additional
        resources or support channels if necessary. The questions and answers
        may be organized by topic or category to help users find the information
        they need quickly and easily.
      </p>
      <Accordion flush>
        {FAQS.map((faq, index) => {
          const eventKey = (index + 1).toString();
          return (
            <Card
              key={index}
              className={
                "p-0 m-3 border-black " + (index === 0 ? "border-top-0" : "")
              }
            >
              <Card.Header className={`${styles.question}`}>
                <div className="d-flex flex-row p-1 pb-2 justify-content-center align-items-center">
                  <ContextAwareToggle eventKey={eventKey} /> {faq.question}{" "}
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey={eventKey}>
                <Card.Body className={`${styles.answer}`}>
                  {faq.response}{" "}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
}
