function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function getRandomColor() {
	return Math.floor(Math.random() * 16777215).toString(16);
}

function changeColor(event) {
	let sketchboardSquare = event.target;

	let randomColor = getRandomColor();

	sketchboardSquare.style.backgroundColor = `#${randomColor}`;
	sketchboardSquare.style.borderColor = `#${randomColor}`;
}

function createSketchboard(sketchboardSize) {
	let sketchboard = document.querySelector(".sketchboard");
	removeAllChildNodes(sketchboard);

	sketchboardWidthHeight = 512;
	sketchboardSquareWidthHeight = sketchboardWidthHeight / sketchboardSize;

	for (let i = 0; i < sketchboardSize; i++) {
		let sketchboardRow = document.createElement("div");
		sketchboardRow.classList.add("sketchboard-row");

		for (let j = 0; j < sketchboardSize; j++) {
			let sketchboardSquare = document.createElement("div");
			sketchboardSquare.classList.add("sketchboard-square");
			sketchboardSquare.style.width = `${sketchboardSquareWidthHeight}px`;
			sketchboardSquare.style.height = `${sketchboardSquareWidthHeight}px`;

			sketchboardSquare.addEventListener("mouseover", changeColor);

			sketchboardRow.append(sketchboardSquare);
		}

		sketchboard.append(sketchboardRow);
	}
}

let defaultSketchboardSize = 16;
createSketchboard(defaultSketchboardSize);

document.querySelector(".size-button").addEventListener("click", () => {
	let sketchboardSize = prompt("Enter size (max 100):");

	console.log(sketchboardSize);

	if (isNaN(sketchboardSize)) return;
	if (sketchboardSize < 1 || sketchboardSize > 100) return;

	createSketchboard(sketchboardSize);
});
