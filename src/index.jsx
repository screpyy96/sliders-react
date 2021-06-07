import { render } from "react-dom";
import Sliders from "./components/slider/sliders";
import "./index.css";

const app = <Sliders />;
const here = document.querySelector("#here");

render(app, here);
