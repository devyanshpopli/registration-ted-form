import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import RegistrationForm2 from "./RegistrationForm2";
import RegistrationForm3 from "./RegistrationForm3";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationForm/>}/>
        <Route path="/RegistrationForm2" element={<RegistrationForm2/>}/>
        <Route path="/RegistrationForm3" element={<RegistrationForm3/>}/>
      </Routes>
    </>
  );
}

export default App;
