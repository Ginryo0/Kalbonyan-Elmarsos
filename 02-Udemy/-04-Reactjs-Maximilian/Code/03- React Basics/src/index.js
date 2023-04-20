import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// Create hook element = main place the created elements go -> div with id root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
