import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Wrapper from "./Wrapper.jsx";

createRoot(document.getElementById("root")).render(
    <Wrapper>
        <App />
    </Wrapper>
);
