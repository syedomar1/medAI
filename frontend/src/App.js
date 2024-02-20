import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
// import ContextState from "./context/notes/ContextState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chatbot from  "./components/Telebot";
import Footer from  "./components/Footer";
import Map from  "./components/Hospital";
import TextSummarizer from  "./components/Summary";
import {useState} from 'react';


function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type});
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      {/* <ContextState> */}
        <Router>
          <Navbar title="MedAI" aboutText="About" />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} />
              {/* <Route exact path="/about" element={<About />} /> */}
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
              <Route exact path="/telebot" element={<Chatbot showAlert={showAlert}/>} />
              <Route exact path="/hospital" element={<Map showAlert={showAlert}/>} />
              <Route exact path="/summary" element={<TextSummarizer showAlert={showAlert}/>} />
            </Routes>
          </div>
            <Footer></Footer>
        </Router>
      {/* </ContextState> */}
    </>
  );
}

export default App;
