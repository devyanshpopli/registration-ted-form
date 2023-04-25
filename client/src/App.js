import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import RegistrationForm2 from "./RegistrationForm2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationForm/>}/>
        <Route path="/RegistrationForm2" element={<RegistrationForm2/>}/>
      </Routes>
    </>
  );
}

export default App;
