import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter} from "react-router-dom";
import Bingo from "./bingo";
import GlobalStyle from "./style/global.style" 

axios.defaults.baseURL = 'https://api-bingo-pipa.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle/>
      <Bingo/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
