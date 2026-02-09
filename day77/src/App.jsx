import React, { useState } from "react";
import axios from "axios";
import User from "./components/User";
const App = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setData(response.data);
  }
  return (
    <div className="min-h-screen bg-slate-900 p-10 flex flex-col items-center">
      <button
        onClick={getData}
        className="mb-10 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
      >
        Load Products
      </button>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl">
        {data.map((elem, idx) => (
          <User
            key={idx}
            title={elem.title}
            price={elem.price}
            category={elem.category}
            description={elem.description}
            image={elem.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

//npm i axios
// import axios from 'axios'
// axios.get('url) to get data from any api
