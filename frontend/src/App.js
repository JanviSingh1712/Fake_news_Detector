// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import SignupPage from "./components/SignupPage";
// import LoginPage from "./components/LoginPage";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
//         <Route path="/signup" element={<SignupPage />} /> {/* Signup Page */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Navbar from "./components/Navbar";

// Import screens
import HomePage from "./screens/HomePage";
import DetectPage from "./screens/DetectPage";
import AboutPage from "./screens/AboutPage";

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Navbar, null),
      React.createElement(
        Routes,
        null,
        React.createElement(Route, {
          path: "/",
          element: React.createElement(HomePage),
        }),
        React.createElement(Route, {
          path: "/login",
          element: React.createElement(LoginPage),
        }),
        React.createElement(Route, {
          path: "/signup",
          element: React.createElement(SignupPage),
        }),
        React.createElement(Route, {
          path: "/detect",
          element: React.createElement(DetectPage),
        }),
        React.createElement(Route, {
          path: "/about",
          element: React.createElement(AboutPage),
        })
      )
    )
  );
}

export default App;
