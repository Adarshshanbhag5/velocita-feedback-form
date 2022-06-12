import { animated } from "react-spring";
import logo from "../assets/vr-new-logo-white.webp";
export default function Form({ style, question, onClick, formData }) {
  function optionClick(e) {
    formData.push({ answer: e.target.innerText });
  }
  function optionClickHandler(e) {
    optionClick(e);
    onClick();
  }
  return (
    <animated.div style={{ ...style }} className="card__container">
      <div className="card__logo__container">
        <img src={logo} alt="logo" className="card__logo" />
      </div>
      <div className="question__container">{question}</div>
      <div className="answer__container">
        <div className="options" onClick={optionClickHandler}>
          Yes
        </div>
        <div className="options" onClick={optionClickHandler}>
          No
        </div>
        <div className="options" onClick={optionClickHandler}>
          May be
        </div>
      </div>
    </animated.div>
  );
}
