import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <div>
        <Products />
      </div>
    </>
  );
}

export default App;
