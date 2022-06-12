import { useRef, useState } from "react";
import { animated } from "react-spring";
import logo from "../assets/vr-new-logo-white.webp";
export default function DetailsForm({ style, nextCard, formData }) {
  const [validForm, setValidForm] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const regexRef = useRef({
    name: /^([\w]{3,})+(\s+([\w\s]{1,})+)?$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^\d{10}$/,
  });
  function formValidation(field, regex) {
    if (regex.test(field.value)) {
      field.className = "valid__formfield";
      setValidForm(true);
    } else {
      field.className = "invalid__formfield";
      setValidForm(false);
    }
  }

  function keyUpHandler(e) {
    formValidation(e.target, regexRef.current[e.target.id]);
  }

  function formSubmitHandler(e) {
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    formData.push({ user: data });
    nextCard();
  }
  return (
    <animated.div style={{ ...style }} className="card__container">
      <div className="card__logo__container">
        <img src={logo} alt="logo" className="card__logo" />
      </div>
      <div className="nameDiv">
        <label htmlFor="name">Name*</label>
        <input
          ref={nameRef}
          onKeyUp={keyUpHandler}
          type="text"
          id="name"
          placeholder="Enter your name"
          required
        />
        <p className="validation__info">
          Name must contain atleast 3 characters
        </p>
      </div>
      <div className="emailDiv">
        <label htmlFor="email">Email address</label>
        <input
          ref={emailRef}
          onKeyUp={keyUpHandler}
          type="email"
          id="email"
          placeholder="Enter your email address"
          required
        />
        <p className="validation__info">Email must be valid address</p>
      </div>
      <button className="btn" onClick={formSubmitHandler} disabled={!validForm}>
        Next
      </button>
    </animated.div>
  );
}
