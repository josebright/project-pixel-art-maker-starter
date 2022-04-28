//color variable
const color = $('#colorPicker');

//Grid size variable
const size = $('#sizePicker');

// Canvas variable
const canvas = $('#pixelCanvas');

//Color cell function
function colorCell(event) {
	const eachCell = $(event.target);
	const colorSelected = color.val();
	eachCell.css('background-color', colorSelected);
}

//m by n grid function
function makeGrid(height, width) {
	canvas.empty()
	for (let row = 0; row < height; row++) {
		let rowElement = $('<tr>');
		for (let col = 0; col < width; col++) {
			let columnElement = $('<td>');
			columnElement.on('click', colorCell);
			rowElement.append(columnElement);
		}
		rowElement.appendTo(canvas);
	}
}

//Submit function
function onSubmit(event) {
	event.preventDefault();
	const height = $('#inputHeight').val();
	const width = $('#inputWidth').val();
	makeGrid(height, width);
}

//Initiate the submit function
function init() {
	size.on('submit', onSubmit);
}

init();