import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
<div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-pink-500 text-white text-4xl font-montserrat shadow-custom">
  Tailwind is 💨 working!
</div>
  );
}

export default App;
