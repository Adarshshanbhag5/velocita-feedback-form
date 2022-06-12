import React, { useState, useCallback, useEffect } from "react";
import { useTransition, useSpringRef } from "@react-spring/web";
import "../styles/Feedback.css";
import Form from "./Form";
import DetailsForm from "./DetailsForm";
import ExtraComments from "./ExtraComments";

const cards = [
  { question: "", type: "user" },
  { question: `Did we meet your expectations?` },
  { question: `How would you rate your interaction with our seniors?` },
  { question: `What are your interests?` },
  { question: `How was your overall experience?` },
  { question: `Do you have any other comments?` },
];

let formData = [];

export default function App() {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(
    () => setIndex((state) => (state + 1) % cards.length),
    []
  );
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,50%,0)" },
    enter: { opacity: 1, transform: "translate3d(-50%,-50%,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index, transRef]);
  return (
    <div className="grid">
      {transitions((style, i) => {
        if (i === 0) {
          return (
            <DetailsForm style={style} nextCard={onClick} formData={formData} />
          );
        } else if (i === cards.length - 1) {
          return <ExtraComments style={style} formData={formData} />;
        } else {
          return (
            <Form
              formData={formData}
              style={style}
              question={cards[i].question}
              onClick={onClick}
            />
          );
        }
      })}
    </div>
  );
}
