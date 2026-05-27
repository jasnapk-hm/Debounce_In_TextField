import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "./Components/Body";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Feed from "./Components/Feed";

import { Provider } from "react-redux";
import appStore from "./utils/AppStore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="feed" element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
