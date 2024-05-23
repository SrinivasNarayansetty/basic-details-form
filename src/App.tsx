import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import BasicDetails from "./Components/containers/BasicDetails";
import BodyWeight from "./Components/containers/BodyWeight";
import AgeDetails from "./Components/containers/AgeDetails";
import VoiceMessage from "./Components/containers/VoiceMessage";
import ConfirmDetails from "./Components/containers/ConfirmDetails";
import SuccessScreen from "./Components/containers/SuccessScreen";

import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicDetails />}></Route>
          <Route path="/weight-details" element={<BodyWeight />}></Route>
          <Route path="/age" element={<AgeDetails />}></Route>
          <Route path="/voice-message" element={<VoiceMessage />}></Route>
          <Route path="/confirm-details" element={<ConfirmDetails />}></Route>
          <Route path="/success-screen" element={<SuccessScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    <ToastContainer position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored" />
    </>
  );
}

export default App;
