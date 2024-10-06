  import React from "react";
  import  ReactDOM  from "react-dom/client";
  import App from './App';
  import { BrowserRouter } from "react-router-dom";
  import { reducer } from "./cart/reducer";
  import { Provider } from "react-redux";
  import { legacy_createStore } from "redux";
  const store = legacy_createStore(reducer);
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BrowserRouter>
  <Provider store={store}>
      <App/>
  </Provider>
  </BrowserRouter>);
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import App from './home/seeallpc/App';
// import { BrowserRouter } from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BrowserRouter>
    {/* <App/> */}
{/* </BrowserRouter>); */}