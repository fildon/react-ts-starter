import { createRoot } from "react-dom/client";

import { App } from "./app";

const rootElement = document.querySelector("#root");

if (rootElement) {
	createRoot(rootElement).render(<App />);
}
