import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUS from "./contactus";

function App() {
  return (
    <div className="w-full h-full flex">
      <Routes>
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/" element={<ContactUS />} />
      </Routes>
    </div>
  );
}

export default App;
