// Select color input
const color = $('#colorPicker');

// Select size input
const size = $('#sizePicker');

// When size is submitted by the user, call makeGrid()
const canvas = $('#pixelCanvas');

function colorCell(event) {
    const eachCell = $(event.target);
    const colorSelected = color.val();
    eachCell.css('background-color', colorSelected);
  }

function makeGrid(height, width) {
// Your code goes here!
  for(let row = 0 ; row < height ; row++) {
    let rowElement = $('<tr>');
    for(let col = 0 ; col < width ; col++) {
      let columnElement = $('<td>');
      columnElement.on('click', colorCell);
      rowElement.append(columnElement);
    }
    rowElement.appendTo(canvas);
  }
}

function onSubmit(event) {
    event.preventDefault();
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    makeGrid(height, width);
  }

function init() {
  size.on('submit', onSubmit);
}

init();