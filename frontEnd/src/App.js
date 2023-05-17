<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "../src/components/Form/Form";
import Hero from "./components/hero/hero";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Hero />
        <Form />
      </BrowserRouter>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
