import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const backgroundRemover = () => {
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-info');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  // }
  const toggleSwitch = (cls) => {
    // backgroundRemover();
    // console.log("Switch has been toggled");
    // document.body.classList.add('bg-'+cls);

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
    if (cls === "success") {
      setMode("dark");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
      showAlert("Green mode has been enabled", "success");
    }
    if (cls === "danger") {
      setMode("dark");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
      showAlert("Red mode has been enabled", "success");
    }
    if (cls === "warning") {
      setMode("dark");
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "black";
      showAlert("Yellow mode has been enabled", "success");
    }
    if (cls === "info") {
      setMode("dark");
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
      showAlert("Blue mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleSwitch={toggleSwitch}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />              
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading={"TextUtils: Word Counter, Character Counter, Remove Extra Spaces, etc"} mode={mode}/>} />
            {/* <TextForm showAlert={showAlert} heading={"Enter your text to analyze"} mode={mode}/> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
