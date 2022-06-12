import { collection, doc, setDoc } from "firebase/firestore";
import React, { useRef } from "react";
import { animated } from "react-spring";
import { db } from "../firebase";
import logo from "../assets/vr-new-logo-white.webp";
export default function ExtraComments({ style, formData }) {
  const requirementRef = useRef("");
  async function submitHandler() {
    const dbRef = doc(collection(db, "feedbacks"));
    formData.push({ textArea: requirementRef.current.value });
    console.log("final data is:\n", formData);
    try {
      await setDoc(dbRef, { formData });
      console.log("sucess");
      window.location.replace("https://velocitaracing.github.io/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <animated.div style={{ ...style }} className="card__container">
      <div className="card__logo__container">
        <img src={logo} alt="logo" className="card__logo" />
      </div>
      <div className="textDiv">
        <label htmlFor="text">Do you have any other comments?</label>
        <textarea
          ref={requirementRef}
          name="message"
          id="text"
          cols="30"
          rows="5"
          required
        ></textarea>
      </div>
      <button className="btn" onClick={submitHandler}>
        Submit
      </button>
    </animated.div>
  );
}
