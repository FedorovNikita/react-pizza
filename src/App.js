import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });

    // fetch('/db.json')
    //   .then((res) => res.json())
    //   .then((data) => setPizzas(data.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home items={pizzas} />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
