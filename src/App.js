import logo from "./logo.svg";
import "./App.css";
import Navigate from "./Navigation/Navigate";
import WebFont from "webfontloader";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Muli", "Roboto","Poppins"],
      },
    });
  }, []);
  return <Navigate />;
}

export default App;
