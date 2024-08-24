let minValue = document.getElementById('min');
let maxValue = document.getElementById('max');
let submit = document.getElementById('btn');
let updValue = document.getElementById('child');

submit.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default action of the form submit button when the button is clicked.
    let min = parseInt(minValue.value);
    let max = parseInt(maxValue.value);
    
    if (min > max) {
        updValue.innerHTML = "Min value cannot be greater than Max value.";
    } else {
        let value = Math.floor(Math.random() * (max - min + 1) + min);
        updValue.innerHTML = `Your Random value from the selected range is ${value}`;
    }
});
