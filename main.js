
// HTML Elements
let output = document.getElementById("answer");
let btnResult = document.getElementById("button-output");

// Event Listener
btnResult.addEventListener("click", solver)

//Event Function
function solver() {
    // Recieve Inputs
let valaEl = +document.getElementById("valueA").value;
let valbEl = +document.getElementById("valueB").value;
let valcEl = +document.getElementById("valueC").value;
    // Output Result
    if (discriminate(valaEl, valbEl, valcEl) > 0) {
        output.innerHTML = "There are 2 roots. They are: " + qudraticsolverPositive(valaEl, valbEl, valcEl) +  " and " + quadraticsolverNegative(valaEl, valbEl, valcEl);
    } else if (discriminate(valaEl, valbEl, valcEl) === 0) {
        output.innerHTML = "There is 1 root. It is: " + qudraticsolverPositive(valaEl, valbEl, valcEl);
    } else {
        output.innerHTML = "There are no roots.";
    }
}

// Calculate Number of Roots
function discriminate(a, b, c){
    return (Math.pow(b,2) - 4 * a * c);
}

// Calculate Roots
function qudraticsolverPositive(a, b, c) {
    return (-b + Math.sqrt(Math.pow(b,2) - 4 * a * c)) / (2 * a);
}
function quadraticsolverNegative(a, b, c) {
    return (-b - Math.sqrt(Math.pow(b,2) - 4 * a * c)) / (2 * a);
}









