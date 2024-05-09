import { useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Navbar/>
    </>
  );
}

export default App;
