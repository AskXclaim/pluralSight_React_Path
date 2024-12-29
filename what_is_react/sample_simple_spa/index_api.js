import React from "https://esm.sh/react@19.0.0-beta-04b058868c-20240508/?dev";
import ReactDOMClient from "https://esm.sh/react-dom@19.0.0-beta-04b058868c-20240508/client/?dev";

window.onload = () => {
	const rootElement = document.getElementById("root");
	const root = ReactDOMClient.createRoot(rootElement);

	const items = [1, 2, 3];
	const childrenElements = [];
	items.forEach((item, index) => {
		childrenElements.push(React.createElement("li", {key: items[index]}, items[index]));
	});

	root.render(childrenElements);
};

