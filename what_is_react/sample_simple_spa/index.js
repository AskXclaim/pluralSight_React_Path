window.onload = () => {
	const rootElement = document.getElementById("root");
	const getCurrentDateButton = document.createElement("button");
	const buttonText = "Click me for current date";
	getCurrentDateButton.innerHTML = buttonText;
	getCurrentDateButton.addEventListener("click", () => {
		getCurrentDateButton.innerHTML = (new Date()).toString();
	});

	const resetButton = document.createElement("button");
	resetButton.innerHTML = "Reset button text";
	resetButton.addEventListener("click", () => {
		getCurrentDateButton.innerHTML = buttonText;
	});

	rootElement.appendChild(getCurrentDateButton);
	rootElement.appendChild(resetButton);
};