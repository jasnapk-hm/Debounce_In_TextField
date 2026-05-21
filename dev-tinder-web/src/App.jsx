import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body></Body>}></Route>
          <Route path="/login" element={<div>Login page</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
