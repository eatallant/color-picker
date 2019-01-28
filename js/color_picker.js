/*
* full code is in color_picker.html
*/

//button used to unhide and activate color picker
var isColorPickerOpen = false;
$('#colorButton').click(function() {
    if(!isColorPickerOpen){
        $('.colorNav').css('bottom', '-100px');
        isColorPickerOpen = true;
    } else {
        $('.colorNav').css('bottom', '-250px');
        isColorPickerOpen = false;
    }
});


// if color picker is active, any element with the class "colorable" will change its color to the one shown in #colorSwatch on click
$('body').click(function( event ) {    
    if(isColorPickerOpen && $(event.target).hasClass('colorable'))  
        $(event.target).css('background-color', selectedColor); 
});


/* 
* COLOR PICKER
* update the color swatch based on the rgb values provided by the sliders
*/

var sliderRed = document.getElementById("colorRed");
var sliderGreen = document.getElementById("colorGreen");
var sliderBlue = document.getElementById("colorBlue");

var selectedColor = $('#colorSwatch').css('background-color');

$('#colorSwatch').css('background-color', 'rgb(' + sliderRed.value + ', ' + sliderGreen.value + ', ' + sliderBlue.value + ')')
function updateSwatch(r, g, b) {
    $('#colorSwatch').css('background-color', 'rgb(' + r + ', ' + g + ', ' + b + ')')
};

sliderRed.oninput = function() {
    updateSwatch(sliderRed.value, sliderGreen.value, sliderBlue.value);
    selectedColor = $('#colorSwatch').css('background-color');
};
sliderGreen.oninput = function() {
    updateSwatch(sliderRed.value, sliderGreen.value, sliderBlue.value);
    selectedColor = $('#colorSwatch').css('background-color');
};
sliderBlue.oninput = function() {
    updateSwatch(sliderRed.value, sliderGreen.value, sliderBlue.value);
    selectedColor = $('#colorSwatch').css('background-color');
};
