import axios from "axios";
import React, { useEffect } from "react";
// import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
// import { setPizzas as setPizzasAction } from "./redux/actions/pizzas";
// import store from "./redux/store";

function App() {

  useEffect(() => {
    axios.get('/db.json').then(({ data }) => {

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

// class App extends React.Component {
//   componentDidMount() {
//     axios.get("/db.json").then(({ data }) => {
//       // если указали в connect, то можно диспатч из пропсов брать
//       // store.dispatch(setPizzasAction(data.pizzas));
//       // если не передаем в connect mapDispatchToProps
//       // this.props.dispatch(setPizzasAction(data.pizzas));
//       this.props.setPizzasAction(data.pizzas);
//     });
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home items={this.props.items} />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   }
// };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     setPizzas: (items) => dispatch(setPizzasAction(items)),
// //   }
// // };

// export default connect(mapStateToProps, {
//   setPizzasAction
// })(App);

