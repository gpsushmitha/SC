const display = document.getElementById('display');

function appendChar(char) {
    display.value  += char;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display').value;
    display = display.replace('^', '**'); // Replace power operator with JS power operator
    display = display.replace('pi', 'Math.PI'); 
    try {
        display.value = eval(display.value) ;
    } catch (error) {
        display.value = 'Error';
    }
}
function calculateSqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateTrig(func) {
    try {
        let value = eval( display.value);
        if (func === 'sin') {
            display.value = Math.sin(value);
        } else if (func === 'cos') {
            display.value = Math.cos(value);
        } else if (func === 'tan') {
            display.value = Math.tan(value);
        }  
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePower() {
    try {
        display.value = Math.pow(eval( display.value), 2);
   
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateExp() {
    try {
        display.value = Math.exp(eval(display.value));
     
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateLog() {
    try {
        display.value = Math.log10(eval( display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateLn() {
    try {
        display.value = Math.log( eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculatePi() {
    try {
        display.value = Math.PI( eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}  

 document.getElementById('mainButton').addEventListener('click', function() {
    const hiddenButtons = document.getElementById('hiddenButtons');
    
    if (hiddenButtons.style.display === 'none' ) {
      hiddenButtons.style.display = 'block';
    } else {
      hiddenButtons.style.display = 'none';
    }
  }); 
  
