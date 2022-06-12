import "./styles/App.css";
import car from "./assets/cartwo.png";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="App">
      <h1 className="head">Feedback form</h1>
      <img src={car} alt="car" className="bg__img" />
      <div className="form__container">
        <Feedback />
      </div>
    </div>
  );
}

export default App;
