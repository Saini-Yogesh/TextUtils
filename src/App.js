import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import About from "./Component/About";
import React, { useState } from "react";
import Alerts from "./Component/Alerts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(4, 39, 67)";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  };
  return (
    // JSX start
    <>
      <Router>
        <Navbar
          tittle="TextUtils"
          aboutUs="About here"
          mode={mode}
          toggleMode={togglemode}
        />
        <Alerts alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <TextForm
                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                mode={mode}
                alert={alert}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
