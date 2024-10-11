import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import publicRoutes from "./router/index";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
