import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    //write a html program so that it makes the full screen black
    <>
      <div className="h-screen bg-slate-950">
        <div>
          <img
            src="\product_delivery.jpg"
            alt="product img"
            className="flex w-3/5 h-auto ml-auto mr-auto py-5 mt-4"
          />
        </div>
        <div>
          <div>
            <p className="text-4xl font-bold font-serif text-slate-300">
              Fast Delivery in your area
            </p>
          </div>
          <div>
            <p className="text-base text-slate-600 font-normal p-5">
              Your package will come right to your door as soon as possible
            </p>
          </div>
        </div>
        <div>
          <div className="flex place-content-center">
            <div className="w-2 h-1 border-b-4 border-slate-400 mt-3 mb-3 mr-2 rounded-2xl"></div>
            <div className="w-6 h-1 border-b-4 border-orange-500 mt-3 mb-3 rounded-2xl"></div>
            <div className="w-2 h-1 border-b-4 border-slate-400 mt-3 mb-3 ml-2 rounded-2xl"></div>
          </div>
          <button className="py-1 px-20 mt-4 text-white bg-orange-600 rounded-md">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
