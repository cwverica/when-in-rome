import NavBar from './navBar/NavBar';
import ConversionArea from "./conversionArea/ConversionArea";
import './App.css';

import { useState } from "react";


function App() {

  const [toRoman, setToRoman] = useState(true);

  return (
    <div className="App">
      <NavBar
        toRoman={toRoman}
        setToRoman={setToRoman} />
      <ConversionArea
        toRoman={toRoman} />
    </div>
  );
}

export default App;
