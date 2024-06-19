import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
// import About from "./Component/About";
import React, { useState } from "react";
import Alerts from "./Component/Alerts";

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
      document.body.style.backgroundColor = "#3b326a";
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
      {/* <Router> */}
      <Navbar
        tittle="TextUtils"
        aboutUs="About here"
        mode={mode}
        toggleMode={togglemode}
      />
      <Alerts alert={alert} />
      {/* <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={ */}
      <TextForm
        heading="Enter the text to analyze below"
        mode={mode}
        alert={alert}
        showAlert={showAlert}
      />
      {/* }
          />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
